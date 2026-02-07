# Quick Setup Guide

## Prerequisites Checklist

- [ ] Node.js installed (v14+) - [Download](https://nodejs.org/)
- [ ] MongoDB setup (local or Atlas cloud)
- [ ] Gmail account (for email functionality)
- [ ] Git installed (for version control)

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm run install-all
```

### 2. Configure Environment Variables

Create `server/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

### 3. Get Gmail App Password
1. Go to [Google Account](https://myaccount.google.com/)
2. Security → 2-Step Verification (enable if needed)
3. App passwords → Generate
4. Copy the 16-character password to `EMAIL_PASS`

### 4. Start MongoDB
- **Local:** Start MongoDB service
- **Atlas:** Use connection string in `MONGODB_URI`

### 5. Run Application
```bash
npm run dev
```

### 6. Access
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Troubleshooting

**Port already in use?**
- Change `PORT` in `server/.env`
- Or kill process: `npx kill-port 5000` or `npx kill-port 3000`

**MongoDB connection error?**
- Check if MongoDB is running
- Verify connection string
- For Atlas: Check IP whitelist

**Email not sending?**
- Verify App Password (not regular password)
- Check email service settings
- Ensure 2-Step Verification is enabled

## GitHub Deployment

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Important Notes
- ✅ `.env` is already in `.gitignore` - your secrets are safe
- ✅ Never commit `.env` files
- ✅ Use environment variables in deployment platforms

## Next Steps

1. Customize your information in:
   - `client/src/components/sections/Introduction.js`
   - `client/src/components/sections/Experience.js`
   - `client/src/components/sections/Skills.js`
   - `client/src/components/sections/Projects.js`
   - `client/src/components/sections/Contact.js`

2. Deploy:
   - Frontend: Vercel/Netlify
   - Backend: Render/Railway/Heroku
   - Database: MongoDB Atlas
