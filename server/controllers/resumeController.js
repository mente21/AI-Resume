import imageKit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from 'fs';

// POST: /api/resumes/create
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;

        // create new resume
        const newResume = await Resume.create({ userId, title });

        // return success message
        return res.status(201).json({
            message: 'Resume created successfully',
            resume: newResume
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// controller for deleting a resume
// DELETE: /api/resumes/delete
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        await Resume.findOneAndDelete({ userId, _id: resumeId });

        // return success message
        return res.status(200).json({ message: 'Resume deleted successfully' });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// get user resume by id
// GET: /api/resumes/get
export const getResumeByID = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        const resume = await Resume.findOne({ userId, _id: resumeId });

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;

        return res.status(200).json(resume);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// get resume by id public
// GET: /api/resumes/public
export const getPublicResumeById = async (req, res) => {
    try {
        const { resumeId } = req.params;

        const resume = await Resume.findOne({ public: true, _id: resumeId });

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        return res.status(200).json(resume);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// controller for updating a resume
// PUT: /api/resumes/update
// resumeConteolle.js (replace updateResume with this safer version)
export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;

        // 1) Validate resumeId
        if (!resumeId || String(resumeId).trim() === '') {
            return res.status(400).json({ message: 'resumeId is required' });
        }

        // 2) Parse resumeData (body values from multipart are strings)
        let resumeDataCopy;
        if (typeof resumeData === 'string') {
            resumeDataCopy = JSON.parse(resumeData);
        } else {
            resumeDataCopy = structuredClone(resumeData || {});
        }

        // 3) Handle image upload if present
        if (image) {
            const imageBufferData = fs.createReadStream(image.path);

            const response = await imageKit.files.upload({
                file: imageBufferData,
                fileName: 'resume.png',
                folder: 'user-resumes',
                transformation: {
                    pre: 'w-300,h-300,fo-face,z-0.75' + (removeBackground ? ',e-bgremove' : '')
                }
            });

            if (response && response.url) {
                resumeDataCopy.personal_info = resumeDataCopy.personal_info || {};
                resumeDataCopy.personal_info.image = response.url;
            }

            // optional: remove the local temp file if you want
            // fs.unlink(image.path, () => {});
        }

        // 4) Build a safe $set update (so we don't replace the whole doc)
        const updateObj = { ...resumeDataCopy };
        // We don't want to accidentally change owner/userId via the update, so remove userId if present in update
        delete updateObj.userId;
        delete updateObj._id; // don't attempt to replace _id

        const resume = await Resume.findOneAndUpdate(
            { userId, _id: resumeId },
            { $set: updateObj },
            { new: true }
        );

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found or you do not have permission to update it' });
        }

        return res.status(200).json({ message: 'Saved successfully', resume });

    } catch (error) {
        console.error('Error in updateResume:', error);
        return res.status(400).json({ message: error.message });
    }
};
