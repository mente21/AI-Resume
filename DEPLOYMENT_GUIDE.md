# Vercel Deployment Guide

This guide describes how to deploy your **Client** (Vite + React) and **Server** (Express) to Vercel as two separate projects.

## Prerequisites
- A [Vercel](https://vercel.com/) account (Free tier is fine).
- This project pushed to GitHub.

## Part 1: Deploying the Server (Backend)

1.  **Log in to Vercel** and click **"Add New..."** -> **"Project"**.
2.  **Import your GitHub Repository**.
3.  **Configure the Project**:
    - **Project Name**: `resume-builder-server` (or similar).
    - **Framework Preset**: Select `Other` (or leave default if `Other` isn't there, Vercel detects it).
    - **Root Directory**: Click "Edit" and select `server`. **This is critical.**
4.  **Environment Variables**:
    - Add all variables from your `server/.env` file here.
    - Examples: `MONGO_URI`, `JWT_SECRET`, `OPENAI_API_KEY`, etc.
5.  **Deploy**: Click "Deploy".
6.  **Get URL**: Once finished, copy the domain (e.g., `https://resume-builder-server.vercel.app`).
    - *Note: Visiting this URL might show "Server is live..." if that's your root route.*

## Part 2: Deploying the Client (Frontend)

1.  **Dashboard**: Go back to your Vercel dashboard.
2.  **New Project**: Click **"Add New..."** -> **"Project"**.
3.  **Import the SAME Repository** again.
4.  **Configure the Project**:
    - **Project Name**: `resume-builder-client` (or similar).
    - **Framework Preset**: `Vite` (Vercel should auto-detect this).
    - **Root Directory**: Click "Edit" and select `client`. **This is critical.**
5.  **Environment Variables**:
    - **Key**: `VITE_BASE_URL`
    - **Value**: The URL of your **Server** from Part 1 (e.g., `https://resume-builder-server.vercel.app`). *Important: Do not add a trailing slash `/` if your code appends it, or check your API config.*
6.  **Deploy**: Click "Deploy".

## Part 3: Final Connection Check
1.  Open your deployed Client App.
2.  Try to log in or perform an action that fetches data.
3.  If it works, you are done!

## Troubleshooting
- **CORS Errors**: If you see CORS errors in the console, you might need to update the `cors` configuration in `server/server.js` to explicitly allow your Vercel Client URL.
    - Current: `app.use(cors())` (Allows all, so it should work out of the box).
- **500 Errors (FUNCTION_INVOCATION_FAILED)**: 
    - This usually happens if `MONGODB_URL` is missing or incorrect in Vercel Environment Variables.
    - **Fix**: Go to Vercel Project Settings > Environment Variables, and ensure `MONGODB_URL` is set exactly as it is in your `.env` file.
    - **Redeploy**: After adding env vars, you MUST redeploy (go to Deployments tab > Redeploy) for them to take effect.
