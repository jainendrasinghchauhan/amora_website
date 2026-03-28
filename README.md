# Premium Solutions - React Version

A modern, responsive React.js website with green and white color scheme featuring banner, features, about section, testimonials, contact form, and footer.

## Features

### ✨ Built-In Functionality

1. **Phone Dialer Button**
   - Opens phone dialer with pre-configured number
   - Works on mobile devices
   - Desktop shows tel: link

2. **WhatsApp Integration**
   - Opens WhatsApp with pre-filled message
   - Direct customer communication
   - Works instantly

3. **Email Form Submission**
   - Contact form collects inquiries
   - Sends details to your email
   - Form validation included

### ✅ Website Sections

- **Navigation** - Sticky navbar with smooth scrolling
- **Banner/Hero** - Eye-catching header with CTAs
- **Features** - 3 key benefits
- **About Us** - Company information
- **Testimonials** - 3 customer reviews with ratings
- **Contact Form** - Lead capture with validation
- **Footer** - Contact info and social media

### ✅ Design

- **Green & White Colors** - Professional look
- **Fully Responsive** - All devices supported
- **React Components** - Modular and reusable
- **Smooth Scrolling** - Enhanced user experience
- **Modern UI** - Clean and appealing

## Project Structure

```
amora/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Navigation bar
│   │   ├── Banner.js           # Hero section
│   │   ├── Features.js         # Features section
│   │   ├── About.js            # About section
│   │   ├── Testimonials.js     # Testimonials section
│   │   ├── Contact.js          # Contact form
│   │   └── Footer.js           # Footer
│   ├── App.js                  # Main app component
│   ├── App.css                 # App styling
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── package.json                # Dependencies and scripts
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone/Extract the project**
   ```bash
   cd amora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Automatically opens `http://localhost:3000`
   - Or open manually in your browser

### Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## Configuration

### Update Phone Number

**File:** `src/components/Banner.js`

Find this line:
```javascript
const phoneNumber = '+919891235060';
```

Replace `919891235060` with your phone number.

Also update in `src/components/Footer.js`:
```javascript
<a href="tel:+919891235060">+91-9891235060</a>
```

### Update WhatsApp

**File:** `src/components/Banner.js`

Change:
```javascript
const phoneNumber = '919891235060';
const message = encodeURIComponent('Your custom message');
```

### Update Email Address

**File:** `src/components/Contact.js`

Find:
```javascript
const formSubmitEndpoint = 'https://formsubmit.co/your-email@gmail.com';
```

Replace `your-email@gmail.com` with your actual email.

**Also update Footer:**
File: `src/components/Footer.js`
```javascript
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

### Customize Colors

**File:** `src/App.css`

Edit `:root` variables (lines 7-13):
```css
:root {
  --primary-green: #2ecc71;      /* Main color */
  --dark-green: #27ae60;         /* Dark variant */
  --light-green: #d5f4e6;        /* Light background */
  --white: #ffffff;
  --dark-gray: #333333;
  --light-gray: #f8f9fa;
  --text-gray: #555555;
}
```

### Update Company Info

**File:** `src/components/Navbar.js`
```javascript
<h1>Your Company Name</h1>
```

**File:** `src/components/About.js`
- Update title and descriptions

**File:** `src/components/Footer.js`
- Update company name
- Update contact information
- Update address

### Customize Testimonials

**File:** `src/components/Testimonials.js`

Edit the `testimonials` array:
```javascript
const testimonials = [
  {
    rating: 5,
    text: "Your testimonial text",
    name: "Customer Name",
    title: "Job Title",
    initials: "CN"
  },
  // ... more testimonials
];
```

### Update Features

**File:** `src/components/Features.js`

Edit the `features` array:
```javascript
const features = [
  {
    icon: '🌿',
    title: 'Feature Name',
    description: 'Feature description'
  },
  // ... more features
];
```

## Email Setup

For form submissions to work, set up FormSubmit.co (recommended):

1. Visit https://formsubmit.co
2. Enter your email address
3. Check your email for verification link
4. Click verification link
5. Update `src/components/Contact.js` line with your email

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Then deploy:
```bash
npm run deploy
```

## Available Scripts

### `npm start`
Runs the development server on `http://localhost:3000`

### `npm run build`
Creates optimized production build

### `npm test`
Runs the test suite

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** 480px - 767px
- **Small Mobile:** Below 480px

## Customization Examples

### Add New Section

1. Create new component in `src/components/NewSection.js`
2. Import in `src/App.js`
3. Add to JSX in App.js

### Add Custom CSS

Edit `src/App.css` or create component-specific CSS files.

### Add More Features

Edit arrays in component files and render using `.map()`.

## Technologies Used

- **React 18** - UI library
- **CSS3** - Styling
- **JavaScript ES6+** - Logic
- **FormSubmit.co** - Email service (optional)

## Common Issues

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Dependencies won't install
```bash
npm install --legacy-peer-deps
```

### Build fails
```bash
npm cache clean --force
npm install
npm run build
```

## Performance Tips

1. Images are optimized with placeholder gradients
2. CSS is modular and organized
3. Components are reusable
4. No unnecessary dependencies

## SEO

The website includes basic SEO:
- Semantic HTML
- Meta descriptions
- Responsive design
- Fast loading

For more SEO:
- Add Helmet library
- Create sitemap
- Add robots.txt
- Increase performance score

## Future Enhancements

- Multi-language support
- Blog section
- Product catalog
- User authentication
- Database integration
- Analytics
- PWA capability
- Dark mode

## Support

For React documentation: https://react.dev

For deployment help:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

## License

Free to use and modify.

## Version

1.0.0 - Initial React version

---

**Happy coding!** 🚀

If you need help, refer to React docs or check component files for inline comments.
