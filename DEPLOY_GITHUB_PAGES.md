# Deploy to GitHub Pages - Manual Steps

Your portfolio is **completely built and ready** at `client/build/`. Follow these steps to deploy manually:

## Option 1: Deploy via GitHub Web Interface (Recommended - Easiest)

### Step 1: Push code to GitHub
```powershell
cd c:\Projects\Portfolio-New
git push origin main
```

### Step 2: Go to GitHub Settings
Visit: https://github.com/musabyasin99/Portfolio-New/settings/pages

### Step 3: Configure GitHub Pages
- **Source**: Select "Deploy from a branch"
- **Branch**: Select `main` 
- **Folder**: Select `/ (root)`
- Click **Save**

### Step 4: Add .nojekyll file (Required for React routing)
In your repository root, create a `.nojekyll` file (empty file) to tell GitHub not to process this as a Jekyll site.

```powershell
cd c:\Projects\Portfolio-New
New-Item -Path ".nojekyll" -ItemType File
git add .nojekyll
git commit -m "Add .nojekyll for GitHub Pages"
git push origin main
```

### Step 5: Enable GitHub Pages
After pushing, go back to Settings > Pages and refresh. Your site will be live at:
```
https://musabyasin99.github.io/Portfolio-New
```

---

## Option 2: Deploy using git subtree (Alternative)

If you want to deploy only the `build` folder:

```powershell
cd c:\Projects\Portfolio-New
git subtree push --prefix client/build origin gh-pages
```

Then in GitHub Settings > Pages, select `gh-pages` branch.

---

## Option 3: Manual GitHub CLI Deploy

```powershell
# Install GitHub CLI if not already installed
# Then authenticate and deploy

cd c:\Projects\Portfolio-New\client
gh repo deploy --branch gh-pages --dir build
```

---

## Verify Deployment

After deployment, check:
1. https://musabyasin99.github.io/Portfolio-New
2. Should show your portfolio with:
   - Your name: Musab Yasin
   - Your experience at BQE Software Inc.
   - Your skills and proficiency levels
   - Contact info with your email & phone
   - Empty projects section

## Troubleshooting

**Portfolio not loading?**
- Wait 2-3 minutes for GitHub to build
- Refresh browser (Ctrl+Shift+R for hard refresh)
- Check GitHub Actions in your repo for build logs

**Styles not loading?**
- The `homepage` field in `client/package.json` is set to `/Portfolio-New/`
- This ensures all assets load correctly

**Routes not working?**
- The `.nojekyll` file prevents Jekyll processing which breaks React routing

---

## Built Files Location

Your optimized production build is ready at:
```
c:\Projects\Portfolio-New\client\build\
```

File sizes:
- Main JS: 111.35 kB (gzipped)
- Main CSS: 3.59 kB (gzipped)

Both are optimized for production!
