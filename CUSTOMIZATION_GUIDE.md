# Customization Guide - C# & MERN Stack Portfolio

## 📝 Quick Customization Reference

This guide shows exactly where to edit each section of your portfolio.

---

## 1️⃣ Your Name & Title (Sidebar)

**File:** `client/src/components/Sidebar.js`

**Lines to Edit:** ~22-23

```javascript
// CHANGE THIS:
<h1 className="sidebar-title">Portfolio</h1>
<p className="sidebar-subtitle">MERN Stack Developer</p>

// TO THIS:
<h1 className="sidebar-title">Your Name Here</h1>
<p className="sidebar-subtitle">Your Professional Title</p>
```

---

## 2️⃣ Introduction Section

**File:** `client/src/components/sections/Introduction.js`

**What to Change:**

### Headline (Line ~19-22)
```javascript
<h2 className="section-subtitle">Your Name</h2>
<p className="section-description">
  Full-Stack Developer | C# & MERN Stack Specialist | Building Modern Web Applications
</p>
```

### About Me Text (Line ~35-42)
```javascript
// Update the About Me card with your information
<p>
  I'm a versatile full-stack developer with expertise in both C# backend development...
</p>
```

### Social Links (Line ~9-12)
```javascript
{ icon: FaGithub, url: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
{ icon: FaLinkedin, url: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
{ icon: FaTwitter, url: 'https://twitter.com/YOUR_HANDLE', label: 'Twitter' },
{ icon: FaEnvelope, url: 'mailto:your-email@example.com', label: 'Email' },
```

---

## 3️⃣ Experience Section

**File:** `client/src/components/sections/Experience.js`

**What to Change:** The `experiences` array (Line ~1-40)

```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: '2023 - Present',
    description: [
      'Your achievement 1',
      'Your achievement 2',
      'Your achievement 3',
      'Your achievement 4',
      'Your achievement 5',
    ],
  },
  // Add more experience objects...
];
```

### Tips:
- Use action verbs: "Developed", "Implemented", "Led", "Designed"
- Mention technologies used
- Include metrics when possible
- Keep descriptions concise

---

## 4️⃣ Skills Section

**File:** `client/src/components/sections/Skills.js`

**What to Change:** The `skillCategories` array (Line ~30-90)

### Add/Update Skills
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact, level: 90 },  // CHANGE LEVEL (0-100)
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### Proficiency Levels:
- **90-100**: Expert (5+ years)
- **75-89**: Advanced (3-4 years)
- **60-74**: Intermediate (1-2 years)
- **45-59**: Beginner (learning)

### Available Icons:
- React Icons: `FaReact`, `FaNodeJs`, `FaDatabase`, `FaCode`, etc.
- Simple Icons: `SiCsharp`, `SiDotnet`, `SiMongodb`, `SiPostgresql`, etc.

---

## 5️⃣ Projects Section

**File:** `client/src/components/sections/Projects.js`

**What to Change:** The `projects` array (Line ~1-55)

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'What the project does and its key features',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/projectname',
    demo: 'https://yourproject.vercel.app',
    image: 'https://via.placeholder.com/400x250?text=Your+Project',
  },
  // Add more projects...
];
```

### Tips:
- Add 6-8 of your best projects
- Include both MERN and C#/.NET projects
- Use real project images or screenshots
- Provide working GitHub links
- Include deployed demos when available

### Project Image Options:
1. **Screenshot** - Screenshot of your project
2. **Placeholder** - Use placeholder: `https://via.placeholder.com/400x250?text=Project+Name`
3. **Custom** - Upload to imgur.com or similar
4. **Thumbnail** - Create custom thumbnails

---

## 6️⃣ Contact Information

**File:** `client/src/components/sections/Contact.js`

**Lines to Edit:** ~56-73

```javascript
// Change Email
<p>your.email@example.com</p>

// Change Phone
<p>+1 (555) 123-4567</p>

// Change Location
<p>Your City, Country</p>
```

---

## 7️⃣ Theme Colors

**File:** `client/src/index.css`

**Lines to Edit:** ~8-21

```css
:root {
  --primary-color: #6366f1;        /* Purple/Indigo - Main color */
  --primary-dark: #4f46e5;         /* Darker primary */
  --secondary-color: #8b5cf6;      /* Light purple - Accents */
  --text-primary: #1f2937;         /* Dark gray - Text */
  --text-secondary: #6b7280;       /* Medium gray - Secondary text */
  --bg-primary: #ffffff;           /* White - Card backgrounds */
  --bg-secondary: #f9fafb;         /* Light gray - Background */
  --border-color: #e5e7eb;         /* Light border color */
}
```

### Color Suggestions:
- **Tech Blue**: `#0066cc` primary, `#0052a3` dark
- **Green**: `#10b981` primary, `#059669` dark
- **Orange**: `#f59e0b` primary, `#d97706` dark
- **Red**: `#ef4444` primary, `#dc2626` dark
- **Purple**: `#6366f1` primary, `#8b5cf6` secondary (current)

---

## 8️⃣ Environment Configuration

**File:** `server/.env` (CREATE THIS FILE)

```env
# Server Configuration
PORT=5000

# MongoDB Connection
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# Option 2: MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
CONTACT_EMAIL=your-email@gmail.com
```

### Getting Gmail App Password:
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable "2-Step Verification"
3. Find "App passwords" near the bottom
4. Select "Mail" and "Other (custom)"
5. Generate the password (16 characters)
6. Copy it to `EMAIL_PASS` in your `.env` file

---

## 9️⃣ Optional: Favicon & Metadata

**File:** `client/public/index.html`

```html
<!-- Change the title that appears in browser tab -->
<title>Your Name - Portfolio</title>

<!-- Add favicon -->
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

<!-- Add meta description for SEO -->
<meta name="description" content="Portfolio of a Full-Stack Developer specializing in C# and MERN Stack" />
```

---

## 🔟 Deployment Customizations

### Frontend Build
**File:** `client/package.json`

The `package.json` already has correct build configuration. No changes needed for basic deployment.

### Backend Startup
**File:** `server/index.js`

Already configured. Change `PORT` via environment variable if needed.

---

## 📋 Customization Checklist

As you customize, check off these items:

- [ ] Updated your name in Sidebar
- [ ] Updated your professional title
- [ ] Added your bio in Introduction
- [ ] Updated social media links (GitHub, LinkedIn, etc.)
- [ ] Added your work experience (3+ roles)
- [ ] Added your technical skills with accurate levels
- [ ] Added your projects (6-8 best projects)
- [ ] Added project descriptions and technologies
- [ ] Updated contact information
- [ ] Generated Gmail App Password
- [ ] Created `.env` file with all required variables
- [ ] Tested contact form locally
- [ ] Tested email delivery
- [ ] Changed colors to your preference (optional)
- [ ] Verified all links work
- [ ] Checked mobile responsiveness (F12 → Toggle Device)
- [ ] Ready for deployment!

---

## 🧪 Testing Your Changes

### Test Locally
```bash
npm run dev
```

### Check Mobile View
- Press F12 in browser
- Click device toggle (mobile icon)
- Test all sections on phone/tablet

### Test Contact Form
1. Fill in all fields
2. Submit the form
3. Check your email for the message
4. Verify success message appears

---

## 💾 Important Files Summary

| File | Purpose |
|------|---------|
| `Sidebar.js` | Your name and title |
| `Introduction.js` | Your bio and social links |
| `Experience.js` | Work history |
| `Skills.js` | Technical skills |
| `Projects.js` | Your projects showcase |
| `Contact.js` | Contact info |
| `index.css` | Colors and theme |
| `.env` | Email and database config |

---

## 🎨 Design Tips

1. **Keep Consistency** - Use 2-3 main colors
2. **Whitespace** - Don't overcrowd content
3. **Typography** - Use 2-3 font sizes maximum
4. **Images** - Use high-quality screenshots
5. **Icons** - Use consistent icon styles
6. **Animation** - Keep smooth, not distracting
7. **Mobile** - Always test on mobile devices
8. **Performance** - Optimize images before upload

---

## 🚀 After Customization

1. **Test Everything Locally**
   ```bash
   npm run dev
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Personalized portfolio"
   git push
   ```

3. **Deploy Frontend**
   - Push to GitHub
   - Deploy to Vercel/Netlify (auto-deploys from GitHub)

4. **Deploy Backend**
   - Deploy to Render/Railway (auto-deploys from GitHub)

5. **Test Production**
   - Visit your deployed site
   - Test contact form
   - Check all links

---

## 📞 Quick Help

- **Syntax Error?** - Check for missing commas or quotes
- **Styling Wrong?** - Check CSS class names match
- **Email Not Working?** - Verify App Password in `.env`
- **Port Already In Use?** - Change `PORT` in `.env`
- **Blank Page?** - Check F12 console for errors

---

## 🎓 Ready to Deploy?

See the deployment guides:
- **Full Guide**: `DEPLOYMENT.md`
- **Quick Steps**: `QUICK_REFERENCE.md`
- **Complete Docs**: `README.md`

---

**Happy customizing! 🎉**

Your portfolio is now personalized and ready to impress!
