# 🚀 React Website - Quick Start Guide

## What You Have

A complete React.js version of the Premium Solutions website with:
- ✅ All 3 functionalities (Phone, WhatsApp, Email Form)
- ✅ All 6 sections (Banner, Features, About, Testimonials, Contact, Footer)
- ✅ Green and white design
- ✅ Fully responsive
- ✅ Production-ready

## 🎯 Setup in 3 Steps

### Step 1: Install Node.js (If Not Already Installed)

1. Download from: https://nodejs.org
2. Download LTS version
3. Run the installer
4. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

Open PowerShell in the `amora` folder and run:

```powershell
npm install
```

This installs React and other required packages.

### Step 3: Start Development Server

Still in the `amora` folder, run:

```powershell
npm start
```

Website automatically opens at `http://localhost:3000` ✅

---

## 📝 Quick Customization

### Change Phone Number

**File:** `src/components/Banner.js` (Line ~8)
```javascript
const phoneNumber = '+919891235060';  // Change this
```

And `src/components/Footer.js`
```javascript
<a href="tel:+919891235060">+91-9891235060</a>  // Change this
```

### Change Email Address

**File:** `src/components/Contact.js` (Line ~61)
```javascript
const formSubmitEndpoint = 'https://formsubmit.co/your-email@gmail.com';  // Change this
```

### Change Company Name

**File:** `src/components/Navbar.js` (Line ~15)
```javascript
<h1>Premium Solutions</h1>  // Change to your company name
```

### Change Colors

**File:** `src/App.css` (Lines 7-13)
- Update green hex colors
- All colors change at once

---

## 🌐 Run Website

### Development Mode
```powershell
npm start
```
- Opens dev server at `http://localhost:3000`
- Auto-reloads on file changes
- Great for development

### Production Build
```powershell
npm run build
```
- Creates optimized `build/` folder
- Ready for deployment
- Much smaller file size

---

## 📱 Test on Mobile

### Same Network
1. Find your PC's IP:
   ```powershell
   ipconfig
   ```
   Look for IPv4 address (e.g., `192.168.x.x`)

2. On your phone, open:
   `http://YOUR_IP:3000`

### Different Network
Use deployment services (see below)

---

## 🚀 Deploy Online (Free Options)

### Option 1: Vercel (Recommended)

```powershell
npm install -g vercel
vercel
```

Follow prompts, website is live!

### Option 2: Netlify

1. ```powershell
   npm run build
   ```
2. Go to https://netlify.com
3. Drag & drop `build` folder
4. Done! Website is live

### Option 3: GitHub Pages

1. Create repository on GitHub
2. Update `package.json` with your repo URL
3. ```powershell
   npm run deploy
   ```

---

## 📁 File Structure Explained

```
amora/  (Your React project)
├── public/
│   └── index.html           ← Main HTML (don't edit)
├── src/
│   ├── components/          ← React components (edit these)
│   │   ├── Navbar.js
│   │   ├── Banner.js        ← Phone/WhatsApp buttons here
│   │   ├── Features.js
│   │   ├── About.js
│   │   ├── Testimonials.js  ← Customer reviews here
│   │   ├── Contact.js       ← Form here
│   │   └── Footer.js        ← Contact info here
│   ├── App.js               ← Main component
│   ├── App.css              ← Colors and styling here
│   └── index.js             ← Entry point
├── package.json             ← Dependencies
└── README.md                ← Full guide
```

---

## 🎨 Customization Checklist

- [ ] Update phone number (Banner.js + Footer.js)
- [ ] Update WhatsApp message (Banner.js)
- [ ] Update company name (Navbar.js)
- [ ] Update email address (Contact.js + Footer.js)
- [ ] Update testimonials (Testimonials.js)
- [ ] Update about text (About.js)
- [ ] Update footer address (Footer.js)
- [ ] Change colors if needed (App.css)
- [ ] Set up FormSubmit.co email
- [ ] Test all features locally
- [ ] Deploy online

---

## ✅ Test Locally

Once `npm start` is running:

1. ✅ **Phone Button** → Click "Call Us Now" (shows tel link on desktop)
2. ✅ **WhatsApp Button** → Click "Message on WhatsApp"
3. ✅ **Form** → Fill and submit contact form
4. ✅ **Navigation** → Click navbar links (smooth scroll)
5. ✅ **Mobile View** → Resize browser or press F12

---

## 🔧 Troubleshooting

### Port 3000 Already in Use
```powershell
npm start -- --port 3001
```

### npm install Fails
```powershell
npm install --legacy-peer-deps
```

### Build Fails
```powershell
npm cache clean --force
npm install
npm run build
```

### Can't Find npm Command
- Restart PowerShell
- Reinstall Node.js
- Verify with `npm --version`

---

## 📧 Email Setup

For contact form to send emails:

1. Go to https://formsubmit.co
2. Enter your email
3. Get verification email
4. Click verification link
5. Update Contact.js with your email
6. Test the form

---

## 🎯 Next Steps

1. **First:** Follow 3 steps above to run website
2. **Second:** Test all features in browser
3. **Third:** Make customizations
4. **Fourth:** Deploy online (Vercel/Netlify)

---

## 📚 Useful Commands

| Command | What it does |
|---------|------------|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run eject` | Advanced (don't use unless needed) |

---

## 💡 Tips

- Keep development server running while editing
- Changes auto-reload in browser
- Check browser console (F12) for errors
- Read full README.md for detailed customization

---

## 🆘 Still Stuck?

1. Check full `README.md` in amora folder
2. Check component files (they're well-commented)
3. Check React docs: https://react.dev
4. Google the error message

---

**You're ready!** Run `npm start` and enjoy! 🚀
