# 🚀 Vercel Deployment Guide - AI Resume Builder

## 📋 Pre-Deployment Checklist

Before deploying, make sure you have:
- ✅ Vercel CLI installed (Done!)
- ✅ A Vercel account (create at https://vercel.com)
- ✅ Git repository initialized
- ✅ All environment variables ready

---

## 🎯 Deployment Strategy

We'll deploy **TWO separate projects** on Vercel:
1. **Backend (Server)** - API endpoints
2. **Frontend (Client)** - React application

---

## 📦 Step 1: Prepare Git Repository

First, let's make sure your code is in a Git repository:

```bash
cd "c:/Users/Lenovo/OneDrive/Desktop/all in one/My projects/Ai-resume/AI-Powered-Resume-Builder"

# Check if git is initialized
git status

# If not initialized, run:
git init
git add .
git commit -m "Initial commit - Ready for Vercel deployment"
```

**Optional but Recommended:** Push to GitHub
```bash
# Create a new repository on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

---

## 🔐 Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate. Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email).

---

## 🖥️ Step 3: Deploy the SERVER (Backend)

### 3.1 Navigate to Server Directory
```bash
cd "c:/Users/Lenovo/OneDrive/Desktop/all in one/My projects/Ai-resume/AI-Powered-Resume-Builder/server"
```

### 3.2 Deploy to Vercel
```bash
vercel
```

**Answer the prompts:**
- Set up and deploy? **Y**
- Which scope? (Choose your account)
- Link to existing project? **N**
- What's your project's name? **ai-resume-server** (or your choice)
- In which directory is your code located? **./** (current directory)
- Want to override settings? **N**

### 3.3 Add Environment Variables

After deployment, add your environment variables:

```bash
# Add each environment variable
vercel env add JWT_SECRET
# When prompted, paste: my_secret_jwt_token

vercel env add MONGODB_URL
# When prompted, paste: mongodb+srv://mentesnotdebele09_db_user:4gsF598zb5cmRsVy@cluster0.dfybdtb.mongodb.net/?appName=Cluster0

vercel env add IMAGEKIT_PUBLIC_KEY
# When prompted, paste: public_mXf7/lO83GP9gQfaWrDhKfRM55c=

vercel env add IMAGEKIT_PRIVATE_KEY
# When prompted, paste: private_2Y1Ga0XtujHGS48D9jOP2r3GPA8=

vercel env add IMAGEKIT_URL_ENDPOINT
# When prompted, paste: https://ik.imagekit.io/qvvlb2tvg

vercel env add OPENAI_API_KEY
# When prompted, paste: AIzaSyCzRwH9K8Vr2_ITTatEseXkpD8xcid9LSw

vercel env add OPENAI_BASE_KEY
# When prompted, paste: https://generativelanguage.googleapis.com/v1beta/openai/

vercel env add OPENAI_MODEL
# When prompted, paste: gemini-2.0-flash
```

**For each variable, select:**
- Which environment? **Production, Preview, and Development** (select all)

### 3.4 Redeploy with Environment Variables
```bash
vercel --prod
```

### 3.5 Get Your Server URL
After deployment, you'll see something like:
```
✅  Production: https://ai-resume-server.vercel.app
```

**📝 SAVE THIS URL!** You'll need it for the client deployment.

---

## 🎨 Step 4: Deploy the CLIENT (Frontend)

### 4.1 Navigate to Client Directory
```bash
cd "c:/Users/Lenovo/OneDrive/Desktop/all in one/My projects/Ai-resume/AI-Powered-Resume-Builder/client"
```

### 4.2 Deploy to Vercel
```bash
vercel
```

**Answer the prompts:**
- Set up and deploy? **Y**
- Which scope? (Choose your account)
- Link to existing project? **N**
- What's your project's name? **ai-resume-client** (or your choice)
- In which directory is your code located? **./** (current directory)
- Want to override settings? **N**

### 4.3 Add Environment Variable

```bash
vercel env add VITE_BASE_URL
# When prompted, paste your SERVER URL from Step 3.5
# Example: https://ai-resume-server.vercel.app
```

**Select:** Production, Preview, and Development (all)

### 4.4 Deploy to Production
```bash
vercel --prod
```

### 4.5 Get Your Client URL
After deployment, you'll see:
```
✅  Production: https://ai-resume-client.vercel.app
```

**🎉 This is your live application URL!**

---

## ✅ Step 5: Verify Deployment

1. **Open your client URL** in a browser
2. **Test the following:**
   - ✅ Page loads correctly
   - ✅ Can create an account
   - ✅ Can login
   - ✅ Can create a resume
   - ✅ AI features work
   - ✅ Image uploads work

---

## 🔄 Step 6: Update CORS (If Needed)

If you get CORS errors, you may need to update the server to allow your client URL.

The server already uses `cors()` which allows all origins, so this should work fine.

---

## 📱 Managing Your Deployments

### View Your Projects
```bash
vercel ls
```

### View Project Details
```bash
vercel inspect YOUR_DEPLOYMENT_URL
```

### Redeploy After Changes
```bash
# In server or client directory
vercel --prod
```

### View Logs
```bash
vercel logs YOUR_DEPLOYMENT_URL
```

---

## 🌐 Custom Domain (Optional)

To add a custom domain:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your custom domain
5. Follow DNS configuration instructions

---

## 🎯 Quick Reference

### Your Deployment URLs (Update after deployment)

**Backend API:**
```
https://ai-resume-server.vercel.app
```

**Frontend App:**
```
https://ai-resume-client.vercel.app
```

### Environment Variables Summary

**Server (.env):**
- JWT_SECRET
- MONGODB_URL
- IMAGEKIT_PUBLIC_KEY
- IMAGEKIT_PRIVATE_KEY
- IMAGEKIT_URL_ENDPOINT
- OPENAI_API_KEY
- OPENAI_BASE_KEY
- OPENAI_MODEL

**Client (.env):**
- VITE_BASE_URL (your server URL)

---

## 🐛 Troubleshooting

### Server won't start
- Check Vercel logs: `vercel logs YOUR_SERVER_URL`
- Verify all environment variables are set
- Check MongoDB connection string

### Client can't connect to server
- Verify `VITE_BASE_URL` is set correctly
- Check CORS configuration
- Verify server is running

### Images won't upload
- Verify ImageKit credentials
- Check ImageKit dashboard for quota
- Verify all three ImageKit variables are set

### AI features don't work
- Verify Google Gemini API key
- Check API quota/limits
- Verify API is enabled in Google Cloud Console

---

## 📞 Support

If you encounter issues:
1. Check Vercel logs
2. Check browser console for errors
3. Verify all environment variables
4. Check service quotas (MongoDB, ImageKit, Gemini)

---

## 🎉 Success!

Once both deployments are complete and verified, your AI Resume Builder will be live and accessible worldwide!

**Share your app:** Send the client URL to anyone to use your resume builder!
