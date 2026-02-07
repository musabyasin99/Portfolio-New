# Quick Reference - C# & MERN Stack Portfolio

## 📋 Prerequisites

| Software | Version | Download |
|----------|---------|----------|
| Node.js | v14+ | [nodejs.org](https://nodejs.org/) |
| MongoDB | Latest | [mongodb.com](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |
| Gmail Account | - | For email functionality |

## 🚀 Commands

### Installation
```bash
npm run install-all          # Install all dependencies (root, server, client)
npm run install-server       # Install only server dependencies
npm run install-client       # Install only client dependencies
```

### Development
```bash
npm run dev                  # Start both frontend & backend (recommended)
npm run server              # Start only backend (port 5000)
npm run client              # Start only frontend (port 3000)
```

### Production Build
```bash
cd client && npm run build   # Build React app for production
```

## 📁 File Structure

```
Portfolio-New/
├── client/              # React frontend
│   ├── src/
│   │   └── components/
│   │       └── sections/  # All portfolio sections
│   └── package.json
├── server/              # Node.js backend
│   ├── routes/
│   │   └── contact.js   # Contact form API
│   ├── index.js         # Server entry point
│   ├── .env             # Environment variables (create this!)
│   └── package.json
└── package.json         # Root package.json
```

## ⚙️ Environment Variables

### Server (.env in `server/` directory)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

### Client (.env in `client/` directory - for production)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## 🔗 URLs

| Service | URL |
|---------|-----|
| Frontend (Dev) | http://localhost:3000 |
| Backend (Dev) | http://localhost:5000 |
| Backend API | http://localhost:5000/api/contact/send |

## 📝 Customization Files

| Section | File Path |
|---------|-----------|
| Introduction | `client/src/components/sections/Introduction.js` |
| Experience | `client/src/components/sections/Experience.js` |
| Skills | `client/src/components/sections/Skills.js` |
| Projects | `client/src/components/sections/Projects.js` |
| Contact | `client/src/components/sections/Contact.js` |
| Styling | `client/src/index.css` (CSS variables) |

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port in use | Change PORT in `.env` or kill process |
| MongoDB error | Check if MongoDB is running or Atlas connection string |
| Email not sending | Verify Gmail App Password (not regular password) |
| Module not found | Run `npm run install-all` |
| CORS error | Backend CORS is already configured |

## 📚 Documentation

- **Setup Guide:** [SETUP.md](./SETUP.md)
- **Deployment Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Main README:** [README.md](./README.md)

## 🚢 Deployment Platforms

| Service | Frontend | Backend | Database |
|---------|----------|---------|----------|
| Vercel | ✅ | ❌ | - |
| Netlify | ✅ | ❌ | - |
| Render | ❌ | ✅ | - |
| Railway | ❌ | ✅ | - |
| Heroku | ❌ | ✅ | - |
| MongoDB Atlas | - | - | ✅ |

---

**Need help?** Check the full documentation in [README.md](./README.md) or [SETUP.md](./SETUP.md)
