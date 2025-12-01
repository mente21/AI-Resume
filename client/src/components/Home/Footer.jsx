import React from 'react';
// Imported Lucide icons as inline SVG are preferred in the project context.

const Footer = () => {
    return (
        <>
            <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/60 to-white mt-40 rounded-t-xl shadow-inner">

                {/* 1. Logo and Links Section (Left/Center Block) */}
                {/* FIX: Removed inner flex-wrap to ensure horizontal layout on large screens. */}
                <div className="flex items-start gap-10 md:gap-16 lg:gap-20 xl:gap-24 **lg:flex-shrink-0**">

                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <div className='h-11 w-auto flex items-center justify-center text-xl font-bold text-green-700 bg-green-100 rounded-lg px-3'>
                            resume.
                        </div>
                    </a>

                    {/* Links Wrapper: FIX - This container uses justify-between to space the three columns */}
                    <div className="flex justify-between flex-grow min-w-0 sm:min-w-[400px] gap-8">

                        {/* Product Links */}
                        <div>
                            <p className="text-slate-800 font-semibold mb-3">Product</p>
                            <ul className="space-y-3">
                                <li><a href="/" className="hover:text-green-600 transition">Home</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Support</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Pricing</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Affiliate</a></li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <p className="text-slate-800 font-semibold mb-3">Resources</p>
                            <ul className="space-y-3">
                                <li><a href="/" className="hover:text-green-600 transition">Company</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Blogs</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Community</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Careers<span className="text-xs text-white bg-indigo-600 rounded-full ml-2 px-2 py-0.5 font-medium">We’re hiring!</span></a></li>
                                <li><a href="/" className="hover:text-green-600 transition">About</a></li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <p className="text-slate-800 font-semibold mb-3">Legal</p>
                            <ul className="space-y-3">
                                <li><a href="/" className="hover:text-green-600 transition">Privacy</a></li>
                                <li><a href="/" className="hover:text-green-600 transition">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. Value Prop, Social, and Copyright Section (Right Block) */}
                {/* FIX: Removed unnecessary flex-grow and used lg:items-end to right-align all vertical content. */}
                <div className="flex flex-col max-md:items-center max-md:text-center gap-4 **lg:items-end** **lg:w-auto**">

                    {/* Value Proposition */}
                    <p className="w-full md:max-w-xs lg:max-w-sm">
                        Making every customer feel valued—no matter the size of your audience.
                    </p>

                    {/* Social Media Icons - Aligns to the right thanks to lg:justify-end */}
                    <div className="flex items-center gap-4 **w-full** lg:justify-end">
                        {/* Dribbble */}
                        <a href="https://dribbble.com/" target="_blank" rel="noreferrer" aria-label="Dribbble">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble size-5 hover:text-green-500 transition-colors" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-green-500 transition-colors" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        {/* X (formerly Twitter) */}
                        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X (formerly Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter size-5 hover:text-green-500 transition-colors" aria-hidden="true">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                </path>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube size-6 hover:text-green-500 transition-colors" aria-hidden="true">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                                </path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="lg:text-right">© 2025 Resume Builder-powered by BiniyamT. </p>
                </div>
            </footer>
            {/* The style block remains for the font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    )
}

// Simple App wrapper to make the file runnable
const App = () => (
    <div className="min-h-screen flex flex-col justify-end">
        <div className="flex-grow p-8 text-center text-gray-700">
            <h1 className="text-3xl font-bold">Main App Content Above</h1>
            <p className="mt-4">Scroll down to see the updated footer.</p>
        </div>
        <Footer />
    </div>
);

export default App;