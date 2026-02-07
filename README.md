# Modern C# & MERN Stack Portfolio

A sophisticated, modern portfolio website built with MERN stack (MongoDB, Express.js, React, Node.js) and C#/.NET showcase, featuring elegant sidebar navigation, smooth animations, and a professional contact system powered by Nodemailer.

## 🎯 Overview

This portfolio website is designed to showcase your expertise as a **Full-Stack Developer** with proficiency in:
- **Frontend:** React, JavaScript/TypeScript, HTML5, CSS3
- **Backend:** C#/.NET Core, Node.js, Express.js
- **Databases:** MongoDB, PostgreSQL, SQL Server
- **DevOps:** Docker, AWS, CI/CD, Git

```bash
# 1. Install all dependencies
npm run install-all

# 2. Create server/.env file (see Prerequisites section)

# 3. Start the application
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Deploy (fix NOT_FOUND / 404)

**1. Vercel**  
- [vercel.com](https://vercel.com) → New Project → Import your repo.  
- **Root Directory:** set to **`client`** (required).  
- Build Command: `npm run build`, Output: `build`.  
- Deploy. The repo includes `client/vercel.json` for SPA routing.

**2. GitHub Pages**  
- Repo **Settings → Pages → Source:** choose **GitHub Actions**.  
- Push to `main`; the workflow builds and deploys the client.  
- Site: `https://<username>.github.io/Portfolio-New` (ensure `client/package.json` `"homepage"` matches).

Full details: [DEPLOYMENT.md](./DEPLOYMENT.md).

> 📖 **New to this project?** Check out [SETUP.md](./SETUP.md) for a detailed step-by-step guide.

## ✨ Features

- 🎨 **Modern, Professional Design** - Glassmorphism UI with gradient backgrounds
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- 🎯 **Intuitive Navigation** - Fixed sidebar with smooth transitions
- 📧 **Contact Form** - Fully functional email system with Nodemailer
- ⚡ **High Performance** - Optimized animations and load times
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌓 **Modern Color Scheme** - Purple and indigo gradients
- 📊 **Skill Visualization** - Animated progress bars with skill levels
- 📁 **Project Showcase** - Beautiful card layout with hover effects

## Sections

1. **Introduction** - Personal introduction and social links
2. **Experience** - Professional experience timeline
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Portfolio projects showcase
5. **Contact** - Contact form with Nodemailer integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM 6** - Navigation
- **Framer Motion 10** - Animations and transitions
- **React Icons** - Icon library (4000+ icons)
- **Axios** - HTTP client for API requests
- **CSS3** - Custom styling with CSS variables and gradients

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4** - Web framework
- **MongoDB & Mongoose 8** - Database and ODM
- **Nodemailer 6** - Email service
- **Express Validator 7** - Input validation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### C# & .NET (Showcase)
Portfolio includes examples of:
- **C#** - Modern object-oriented programming language
- **.NET Core** - Open-source, cross-platform framework
- **ASP.NET MVC** - Web application framework
- **Entity Framework** - ORM for database operations
- **LINQ** - Language-Integrated Query
- **Microservices Architecture** - Scalable backend design

### Development Tools
- **Nodemon** - Auto-reload development server
- **Concurrently** - Run multiple scripts simultaneously
- **Git** - Version control

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
1. **Node.js** (v14 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`
   - npm comes bundled with Node.js

2. **MongoDB** (Optional for local development)
   - **Option A:** Install MongoDB locally from [mongodb.com](https://www.mongodb.com/try/download/community)
   - **Option B:** Use MongoDB Atlas (cloud) - Recommended for beginners
     - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
     - Create a free cluster
     - Get your connection string

3. **Git** (for version control)
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

### Required Accounts (for email functionality)
- **Gmail Account** (or any email service)
  - For Gmail: Enable 2-Step Verification
  - Generate an App Password (see setup instructions below)

## Quick Start Guide

### Step 1: Clone or Download the Repository

If you have the repository URL:
```bash
git clone <repository-url>
cd Portfolio-New
```

Or if you're starting fresh, you already have the files in your directory.

### Step 2: Install Dependencies

Run this command from the root directory to install all dependencies:
```bash
npm run install-all
```

This will:
- Install root dependencies (concurrently, nodemon)
- Install server dependencies (Express, MongoDB, Nodemailer, etc.)
- Install client dependencies (React, Framer Motion, etc.)

**Note:** This may take a few minutes. If you encounter errors, try:
```bash
# Install root dependencies first
npm install

# Then install server dependencies
cd server
npm install
cd ..

# Then install client dependencies
cd client
npm install
cd ..
```

### Step 3: Configure Environment Variables

1. **Create `.env` file in the `server` directory:**
   ```bash
   # On Windows (PowerShell)
   cd server
   New-Item -Path .env -ItemType File
   
   # On Mac/Linux
   cd server
   touch .env
   ```

2. **Copy the example file and edit it:**
   ```bash
   # Copy env.example to .env
   cp env.example .env
   # Or on Windows: copy env.example .env
   ```

3. **Edit the `.env` file with your configuration:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   
   # For MongoDB Atlas, use:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   
   # Email Configuration (Nodemailer)
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=your-contact-email@gmail.com
   ```

4. **Get Gmail App Password (if using Gmail):**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Click on **Security** → **2-Step Verification** (enable if not already)
   - Scroll down to **App passwords**
   - Select **Mail** and **Other (Custom name)**
   - Enter "Portfolio" as the name
   - Copy the 16-character password
   - Paste it in `EMAIL_PASS` in your `.env` file

### Step 4: Start MongoDB (if using local MongoDB)

**Windows:**
```bash
# If MongoDB is installed as a service, it should start automatically
# Or start manually:
net start MongoDB
```

**Mac/Linux:**
```bash
# Start MongoDB service
sudo systemctl start mongod
# Or
mongod
```

**Using MongoDB Atlas (Cloud):**
- No local setup needed!
- Just use your Atlas connection string in `MONGODB_URI`

### Step 5: Run the Application

**Option A: Run both servers together (Recommended)**
```bash
npm run dev
```

**Option B: Run servers separately**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

### Step 6: Access the Application

- **Frontend:** Open [http://localhost:3000](http://localhost:3000) in your browser
- **Backend API:** Running on [http://localhost:5000](http://localhost:5000)

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend servers |
| `npm run server` | Start only the backend server |
| `npm run client` | Start only the frontend server |
| `npm run install-all` | Install all dependencies (root, server, client) |
| `npm run install-server` | Install only server dependencies |
| `npm run install-client` | Install only client dependencies |

## Project Structure

```
Portfolio-New/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   # Section components
│   │   │   ├── Sidebar.js
│   │   │   └── MainContent.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── routes/
│   │   └── contact.js
│   ├── index.js
│   └── package.json
├── package.json
└── README.md
```

## Customization

### Update Personal Information

1. **Introduction Section** (`client/src/components/sections/Introduction.js`)
   - Update name, description, and social links

2. **Experience Section** (`client/src/components/sections/Experience.js`)
   - Modify the `experiences` array with your work history

3. **Skills Section** (`client/src/components/sections/Skills.js`)
   - Update the `skillCategories` array with your skills

4. **Projects Section** (`client/src/components/sections/Projects.js`)
   - Replace the `projects` array with your actual projects

5. **Contact Section** (`client/src/components/sections/Contact.js`)
   - Update contact information (email, phone, location)

### Styling

- Main styles: `client/src/index.css`
- Component styles: `client/src/components/*.css`
- Color scheme can be modified in CSS variables in `index.css`

## Deployment

### Deploying to GitHub

1. **Initialize Git Repository (if not already done)**
   ```bash
   git init
   ```

2. **Add all files to Git**
   ```bash
   git add .
   ```

3. **Create initial commit**
   ```bash
   git commit -m "Initial commit: MERN Stack Portfolio"
   ```

4. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., "portfolio-mern")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

5. **Connect and push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

**Important:** Make sure your `.env` file is in `.gitignore` (it already is) - never commit sensitive credentials!

### Deploying Frontend (React)

#### Option 1: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Configure:
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Add environment variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.com`
6. Deploy!

#### Option 2: Netlify (Free)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click "New site from Git" → Select your repository
4. Configure:
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `client/build`
5. Add environment variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.com`
6. Deploy!

### Deploying Backend (Node.js)

#### Option 1: Render (Recommended - Free tier available)
1. Push your code to GitHub
2. Go to [render.com](https://render.com) and sign in with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name:** portfolio-backend
   - **Environment:** Node
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Root Directory:** `server`
6. Add environment variables from your `.env` file
7. Deploy!

#### Option 2: Railway (Free tier available)
1. Push your code to GitHub
2. Go to [railway.app](https://railway.app) and sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Configure:
   - Set root directory to `server`
   - Add all environment variables
6. Deploy!

#### Option 3: Heroku
1. Install Heroku CLI: [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set EMAIL_USER=your-email
   heroku config:set EMAIL_PASS=your-password
   # ... add all other env variables
   ```
5. Deploy: `git push heroku main`

### MongoDB for Production

**Use MongoDB Atlas (Free tier available):**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use 0.0.0.0/0 for all IPs - less secure)
5. Get your connection string
6. Update `MONGODB_URI` in your production environment variables

### Update Frontend API URL

After deploying the backend, update the frontend to use the production API:

1. **Create `.env` file in `client` directory:**
   ```env
   REACT_APP_API_URL=https://your-backend-url.com
   ```

2. **Update `client/src/components/sections/Contact.js`:**
   ```javascript
   // Change this line:
   const response = await axios.post('/api/contact/send', formData);
   
   // To:
   const response = await axios.post(`${process.env.REACT_APP_API_URL || ''}/api/contact/send`, formData);
   ```

3. **Rebuild and redeploy the frontend**

## License

MIT License - feel free to use this portfolio for your own projects!

## Support

For issues or questions, please open an issue on the repository.

---

Built with ❤️ using the MERN Stack
