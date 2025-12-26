# ✅ Vercel Deployment Checklist

## Quick Start - Follow These Steps

### 🔐 Step 1: Login to Vercel
```bash
vercel login
```
- [ ] Browser opened and logged in successfully

---

### 🖥️ Step 2: Deploy Server

```bash
cd "c:/Users/Lenovo/OneDrive/Desktop/all in one/My projects/Ai-resume/AI-Powered-Resume-Builder/server"
vercel --prod
```

**During deployment, answer:**
- Set up and deploy? → **Y**
- Project name? → **ai-resume-server**
- Directory? → **./**
- Override settings? → **N**

- [ ] Server deployed successfully
- [ ] Server URL copied: `_______________________________`

---

### 🔑 Step 3: Add Server Environment Variables

Go to: https://vercel.com/dashboard

1. Click on **ai-resume-server** project
2. Go to **Settings** → **Environment Variables**
3. Add these variables (one by one):

| Variable Name | Value |
|--------------|-------|
| JWT_SECRET | `my_secret_jwt_token` |
| MONGODB_URL | `mongodb+srv://mentesnotdebele09_db_user:4gsF598zb5cmRsVy@cluster0.dfybdtb.mongodb.net/?appName=Cluster0` |
| IMAGEKIT_PUBLIC_KEY | `public_mXf7/lO83GP9gQfaWrDhKfRM55c=` |
| IMAGEKIT_PRIVATE_KEY | `private_2Y1Ga0XtujHGS48D9jOP2r3GPA8=` |
| IMAGEKIT_URL_ENDPOINT | `https://ik.imagekit.io/qvvlb2tvg` |
| OPENAI_API_KEY | `AIzaSyCzRwH9K8Vr2_ITTatEseXkpD8xcid9LSw` |
| OPENAI_BASE_KEY | `https://generativelanguage.googleapis.com/v1beta/openai/` |
| OPENAI_MODEL | `gemini-2.0-flash` |

**For each variable:** Select **Production**, **Preview**, and **Development**

- [ ] All 8 environment variables added
- [ ] Clicked **Redeploy** in Deployments tab

---

### 🎨 Step 4: Deploy Client

```bash
cd "c:/Users/Lenovo/OneDrive/Desktop/all in one/My projects/Ai-resume/AI-Powered-Resume-Builder/client"
vercel --prod
```

**During deployment, answer:**
- Set up and deploy? → **Y**
- Project name? → **ai-resume-client**
- Directory? → **./**
- Override settings? → **N**

- [ ] Client deployed successfully
- [ ] Client URL copied: `_______________________________`

---

### 🔑 Step 5: Add Client Environment Variable

Go to: https://vercel.com/dashboard

1. Click on **ai-resume-client** project
2. Go to **Settings** → **Environment Variables**
3. Add this variable:

| Variable Name | Value |
|--------------|-------|
| VITE_BASE_URL | `YOUR_SERVER_URL_FROM_STEP_2` |

**Example:** `https://ai-resume-server.vercel.app`

**Select:** Production, Preview, and Development

- [ ] Environment variable added
- [ ] Clicked **Redeploy** in Deployments tab

---

### ✅ Step 6: Test Your Application

Open your client URL in a browser and test:

- [ ] Page loads without errors
- [ ] Can register a new account
- [ ] Can login
- [ ] Can create a resume
- [ ] AI suggestions work
- [ ] Image upload works

---

## 🎉 Success!

Your AI Resume Builder is now live!

**Frontend URL:** `_______________________________`
**Backend URL:** `_______________________________`

Share your frontend URL with anyone to use your resume builder!

---

## 🔄 Future Updates

To deploy updates:

```bash
# For server updates
cd server
vercel --prod

# For client updates
cd client
vercel --prod
```

---

## 📱 Vercel Dashboard

Manage your deployments at: https://vercel.com/dashboard

- View logs
- Monitor performance
- Add custom domains
- View analytics
