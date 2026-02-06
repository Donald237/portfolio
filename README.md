# Donald Mbouhom - Portfolio

A modern, animated portfolio website showcasing Full Stack AI Development projects and skills.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Smooth Animations**: Page transitions and interactive elements
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Theme**: Eye-friendly dark mode with blue/purple accents
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Manrope, Archivo Black, JetBrains Mono)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Step 1: Navigate to the project folder

```bash
cd portfolio
```

### Step 2: Install dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🌐 Deployment

### Option 1: Deploy on Vercel (Recommended - FREE)

Vercel is the easiest and fastest way to deploy your Next.js portfolio. It's **FREE** for personal projects!

#### Method A: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Upload your project to GitHub**
   - Create a new repository on GitHub
   - Push your portfolio code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Import to Vercel**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site is live!**
   - Vercel will give you a URL like: `your-portfolio.vercel.app`
   - You can add a custom domain later (optional)

#### Method B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy on Netlify (Also FREE)

1. **Create a Netlify account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect your repository**
   - Push code to GitHub (same as Vercel steps)
   - Click "New site from Git" in Netlify
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live at: `your-portfolio.netlify.app`

### Option 3: Deploy on GitHub Pages (FREE but requires extra setup)

Next.js can be deployed to GitHub Pages, but requires static export:

1. Add to `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build static site:
```bash
npm run build
```

3. Deploy to GitHub Pages using your preferred method

## 📝 Customization

### Update Content

1. **Personal Information**
   - Edit `app/page.tsx` - Hero section
   - Edit `app/about/page.tsx` - Biography, skills, education
   - Edit `app/projects/page.tsx` - Project details
   - Edit `app/contact/page.tsx` - Contact information

2. **Projects**
   - Add/edit projects in `app/projects/page.tsx`
   - Update project images in `public/` folder
   - Update demo links

3. **Colors & Theme**
   - Edit `tailwind.config.js` - Color palette
   - Edit `app/globals.css` - Custom styles and animations

4. **Fonts**
   - Edit `app/globals.css` - Google Fonts import
   - Edit `tailwind.config.js` - Font family configuration

### Add New Pages

```bash
# Create new page
mkdir app/blog
touch app/blog/page.tsx
```

## 🎨 Color Scheme

- **Background**: `#0a0a0f` (dark)
- **Secondary Background**: `#121218` (dark-lighter)
- **Card Background**: `#1a1a24` (dark-card)
- **Accent Blue**: `#00d4ff`
- **Accent Purple**: `#a855f7`
- **Accent Green**: `#10b981`

## 📱 Pages

- **Home** (`/`) - Hero section, featured projects, tech stack
- **Projects** (`/projects`) - Detailed project showcase
- **About** (`/about`) - Biography, skills, education, achievements
- **Contact** (`/contact`) - Contact form and information

## 🔧 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Type errors:**
```bash
# Check TypeScript
npx tsc --noEmit
```

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Fully responsive on all devices

## 🔒 Security

- No sensitive data exposed
- All external links use `rel="noopener noreferrer"`
- HTTPS enabled by default on Vercel/Netlify

## 📄 License

This portfolio is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Email: dmbouhom@gmail.com
- GitHub: [@Donald237](https://github.com/Donald237)
- LinkedIn: [Donald Mbouhom](https://www.linkedin.com/in/donald-mbouhom-729321251/)

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by Donald Mbouhom**

Full Stack AI Developer | Computer Vision | Industrial Automation
