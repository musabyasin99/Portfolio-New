# Deployment Guide

This guide covers deploying your MERN Stack Portfolio to various platforms.

## Table of Contents
- [GitHub Setup](#github-setup)
- [Frontend Deployment](#frontend-deployment)
- [GitHub Pages (Option 3)](#option-3-github-pages-free-frontend-only)
- [Backend Deployment](#backend-deployment)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)

## GitHub Setup

### 1. Initialize Git Repository

```bash
# If not already initialized
git init
```

### 2. Create .gitignore

The `.gitignore` file is already configured to exclude:
- `node_modules/`
- `.env` files (your secrets are safe!)
- Build folders
- IDE files

### 3. Initial Commit

```bash
git add .
git commit -m "Initial commit: MERN Stack Portfolio"
```

### 4. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New repository"** (or the `+` icon)
3. Repository name: `portfolio-mern` (or your preferred name)
4. Description: "Modern MERN Stack Portfolio"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (you already have these)
7. Click **"Create repository"**

### 5. Push to GitHub

```bash
# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 6. Verify

Visit your repository on GitHub to confirm all files are uploaded.

**⚠️ Important:** Never commit `.env` files! They contain sensitive information.

## Frontend Deployment

### Option 1: Vercel (Recommended - Free & Easy)

1. **Push code to GitHub** (if not already done)

2. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import Project**
   - Click **"New Project"**
   - Select your GitHub repository
   - Click **"Import"**

4. **Configure Project**
   - **Framework Preset:** Create React App
   - **Root Directory:** `client` ← **Critical:** Must be `client` so Vercel builds the React app, not the repo root (which has no frontend build).
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`
   - The repo includes `client/vercel.json` with SPA rewrites so all routes serve your app correctly.

5. **Environment Variables**
   - Click **"Environment Variables"**
   - **Contact form (built-in API):** Add `EMAIL_USER` (Gmail address), `EMAIL_PASS` (Gmail App Password), and optionally `CONTACT_EMAIL` (inbox for form submissions; defaults to masabyasin@gmail.com). Leave `REACT_APP_API_URL` unset so the form posts to `/api/contact/send` on the same deployment.
   - **Or use external backend:** Set `REACT_APP_API_URL` = `https://your-backend-url.com` and deploy the Node server elsewhere; then the form posts to that backend.

6. **Deploy**
   - Click **"Deploy"**
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify (Free)

1. **Push code to GitHub**

2. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub

3. **New Site from Git**
   - Click **"New site from Git"**
   - Choose GitHub
   - Select your repository

4. **Build Settings**
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `client/build`

5. **Environment Variables**
   - Go to **Site settings** → **Environment variables**
   - Add: `REACT_APP_API_URL` = `https://your-backend-url.com`

6. **Deploy**
   - Click **"Deploy site"**

### Option 3: GitHub Pages (Free, frontend only)

GitHub Pages serves **static files only** (no Node.js or backend). Only the built React app is deployed; the API must be hosted elsewhere (e.g. Render).

1. **Enable GitHub Pages with GitHub Actions**
   - In your repo: **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Set the correct `homepage` in the client**
   - In `client/package.json`, ensure `"homepage"` matches your Pages URL:
   - For a **project site**: `https://YOUR_USERNAME.github.io/Portfolio-New` (replace repo name if different)
   - For a **user site** (repo `YOUR_USERNAME.github.io`): `https://YOUR_USERNAME.github.io`

3. **Deploy**
   - Push to `main` (or `master`). The workflow `.github/workflows/deploy-gh-pages.yml` builds the client and deploys to GitHub Pages.
   - After the first run, the site is at `https://YOUR_USERNAME.github.io/Portfolio-New`

4. **SPA fallback**
   - `client/public/404.html` redirects unknown paths to the app root so direct links and refreshes still load the app.

5. **Environment variables**
   - Set `REACT_APP_API_URL` in your backend’s URL when you deploy the API. For GitHub Actions you can add it as a repo secret and pass it in the workflow if needed.

## Backend Deployment

### Option 1: Render (Recommended - Free Tier)

1. **Push code to GitHub**

2. **Sign up/Login to Render**
   - Go to [render.com](https://render.com)
   - Sign in with GitHub

3. **New Web Service**
   - Click **"New"** → **"Web Service"**
   - Connect your GitHub repository
   - Click **"Connect"**

4. **Configure Service**
   - **Name:** `portfolio-backend` (or your choice)
   - **Environment:** `Node`
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (or paid for better performance)

5. **Environment Variables**
   - Scroll to **"Environment Variables"**
   - Add all variables from your `server/.env`:
     ```
     PORT=5000
     MONGODB_URI=your-mongodb-atlas-uri
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     CONTACT_EMAIL=your-contact-email@gmail.com
     ```

6. **Deploy**
   - Click **"Create Web Service"**
   - Wait for deployment
   - Your API will be at `https://your-service.onrender.com`

7. **Update Frontend**
   - Go back to Vercel/Netlify
   - Update `REACT_APP_API_URL` to your Render URL

### Option 2: Railway (Free Tier Available)

1. **Sign up/Login**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub

2. **New Project**
   - Click **"New Project"**
   - Select **"Deploy from GitHub repo"**
   - Choose your repository

3. **Configure**
   - Railway auto-detects Node.js
   - Set **Root Directory** to `server`
   - Add environment variables

4. **Deploy**
   - Railway automatically deploys on push
   - Get your URL from the dashboard

### Option 3: Heroku

1. **Install Heroku CLI**
   - Download from [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

2. **Login**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   heroku create your-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set EMAIL_SERVICE=gmail
   heroku config:set CONTACT_EMAIL=your-contact-email@gmail.com
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

## Database Setup

### MongoDB Atlas (Recommended for Production)

1. **Sign Up**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account

2. **Create Cluster**
   - Click **"Build a Database"**
   - Choose **FREE (M0)** tier
   - Select a cloud provider and region
   - Click **"Create"**

3. **Create Database User**
   - Go to **Database Access**
   - Click **"Add New Database User"**
   - Choose **Password** authentication
   - Username: `portfolio-user` (or your choice)
   - Password: Generate secure password (save it!)
   - Database User Privileges: **Read and write to any database**
   - Click **"Add User"**

4. **Network Access**
   - Go to **Network Access**
   - Click **"Add IP Address"**
   - For development: Click **"Add Current IP Address"**
   - For production: Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Click **"Confirm"**

5. **Get Connection String**
   - Go to **Database** → **Connect**
   - Choose **"Connect your application"**
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `portfolio` (or your choice)
   - Example: `mongodb+srv://portfolio-user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

6. **Use in Production**
   - Add this connection string to your backend environment variables as `MONGODB_URI`

## Environment Variables Summary

### Backend (Server)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

### Frontend (Client)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] MongoDB Atlas cluster created and connected
- [ ] Environment variables set in both frontend and backend
- [ ] Contact form tested and working
- [ ] All sections customized with your information
- [ ] Social links updated
- [ ] Projects added with real links

## Troubleshooting

### Vercel NOT_FOUND (404) Error

If your deployment shows **NOT_FOUND** or a 404 page:

1. **Root Directory must be `client`**
   - In Vercel: Project → **Settings** → **General** → **Root Directory** → set to `client`.
   - If this is wrong or empty, Vercel builds from the repo root. The root `package.json` has no `build` script that produces a frontend, so there is no output to serve → NOT_FOUND.
   - Fix: Set Root Directory to `client`, then redeploy.

2. **Output Directory**
   - With Root Directory = `client`, the build output is `client/build`, which Vercel sees as `build`. So **Output Directory** should be `build` (not `client/build`).

3. **SPA rewrites**
   - This project includes `client/vercel.json` with rewrites so any path (e.g. direct link or refresh) serves `index.html`. If you removed or changed that file, restore it and redeploy.

4. **Verify deployment**
   - In the Vercel dashboard, confirm the latest deployment succeeded and that you’re opening the correct deployment URL (no typos, correct project).

### GitHub Pages NOT_FOUND / 404

If your site at `https://YOUR_USERNAME.github.io/Portfolio-New` shows **404** or **NOT_FOUND**:

1. **Pages source must be GitHub Actions**
   - Repo **Settings** → **Pages** → **Source**: choose **GitHub Actions** (not “Deploy from a branch”).
   - The workflow deploys the built app; no `gh-pages` branch is used.

2. **`homepage` in `client/package.json`**
   - Must match the Pages URL: `https://YOUR_USERNAME.github.io/Portfolio-New` (use your username and repo name).
   - Wrong or missing `homepage` breaks asset paths (blank or broken page).

3. **Workflow must succeed**
   - **Actions** tab → open the latest **Deploy to GitHub Pages** run. Fix any build errors (e.g. install or build failures).

4. **SPA / direct links**
   - `client/public/404.html` redirects 404s to the app root. If you removed it or changed the base path, update the `base` variable in that file to match `homepage` (e.g. `/Portfolio-New`).

5. **Only the frontend is on GitHub Pages**
   - The backend (Node/Express) does not run on GitHub Pages. Deploy the API to Render/Railway/etc. and set `REACT_APP_API_URL` in the client (e.g. via a build-time env in the workflow).

### Backend Issues
- **Build fails:** Check Node.js version (should be 14+)
- **MongoDB connection error:** Verify connection string and IP whitelist
- **Email not sending:** Check App Password and email service settings

### Frontend Issues
- **API calls fail:** Verify `REACT_APP_API_URL` is set correctly
- **Build fails:** Check for syntax errors in React components
- **CORS errors:** Ensure backend CORS is configured (already done in code)

### General
- **Environment variables not working:** Restart deployment after adding variables
- **Changes not reflecting:** Clear browser cache or hard refresh (Ctrl+Shift+R)

## Support

If you encounter issues:
1. Check the error logs in your deployment platform
2. Verify all environment variables are set correctly
3. Ensure MongoDB is accessible from your backend IP
4. Test API endpoints using Postman or curl

---

Happy Deploying! 🚀
