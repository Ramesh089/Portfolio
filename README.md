# Ramesh | Interactive 3D Developer Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r165-black?style=flat&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An immersive, futuristic, interactive 3D developer portfolio built with **React**, **Three.js**, **React Three Fiber**, **Drei**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features

- **Immersive 3D Landing Experience**:
  - Interactive cyber sphere with outer wireframe icosahedron, distorted metallic core, dual glowing orbital rings, and dynamic orbiting energy nodes.
  - Smooth mouse-tracking parallax rotation and responsive camera geometry.
  - 900+ floating particle starfield in 3D space with additive blending.
  - Automatic WebGL fallback for low-power or non-WebGL environments.
- **Glassmorphic Navigation**:
  - Floating sticky glass navbar with active section observer, smooth scrolling, and mobile responsive navigation drawer.
- **About Me Section**:
  - Holographic 3D framed profile showcase, educational overview (MCA & BCA), internship highlights, and key competencies.
- **Categorized Technical Matrix**:
  - Programming (Python, JavaScript), Frontend (React, HTML5, CSS3/Tailwind), Backend (Node.js, Express, Django), Database (MySQL, SQL), Data Science (Pandas, NumPy, Power BI, ML), and Tools (Git, GitHub, VS Code, AWS).
  - Filterable tabs, verified practical tags, and zero fake percentage bars.
- **Project Showcase**:
  - **Flagship Project**: **Tourist AI Hub** (A–Z AI-Powered Intelligent Travel Companion) with interactive screenshot gallery, architecture details, and multi-transport booking overview.
  - Academic & Full-Stack Projects: Cyber Crime Awareness Portal, Brain Tumor Detection (Deep Learning), Rice Prediction Model, React Todo App, API Data Fetching App, and Crypto Image Steganography.
  - Interactive deep-dive modal for detailed engineering insights.
- **Education & Experience Timeline**:
  - Verified chronological roadmap detailing MCA at Kristu Jayanti University, Software Development Internship at LYD Technologies (Algorithmic Trading & OpenAlgo), and BCA at Koshys Group of Institutions (8.78 CGPA).
- **Verified Certifications Gallery**:
  - Microsoft Azure Fundamentals (AZ-900).
  - Microsoft Power BI Data Analyst.
  - Data Science with Python (NASSCOM Foundation / Capgemini – Gold Category, 76%, ID: `FSP/2026/9/10378473`).
  - Interactive modal with direct credential verification and PDF preview.
- **Futuristic Contact Portal**:
  - Real-time client-side validation, direct email transmission to `rameshkorabar89@gmail.com`, and celebratory particle confetti feedback.

---

## 🛠️ Technology Stack

| Layer | Tools & Libraries |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **3D Graphics & Canvas** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Styling & Design System**| [Tailwind CSS](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Animations & FX** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📁 Project Architecture

```
Portfolio/
├── legacy/                  # Preserved legacy HTML/CSS/JS portfolio
├── public/                  # Static assets & verified documents
│   ├── projects/            # Tourist Hub & project screenshots
│   ├── Ramesh_Resume.pdf    # Downloadable resume
│   ├── Ramesh_Cert.pdf      # NASSCOM Data Science certificate
│   ├── ramesh.png           # Original profile photograph
│   └── ramesh.webp          # High-performance optimized WebP
├── src/
│   ├── animations/          # Custom transition variants & helpers
│   ├── assets/              # Bundled image assets
│   ├── components/          # Reusable UI elements (Navbar, CustomCursor, Modals)
│   ├── data/                # Verified portfolio content & data objects
│   ├── hooks/               # Custom React hooks
│   ├── sections/            # Section components (Hero, About, Skills, Projects, etc.)
│   ├── styles/              # Global CSS & Tailwind utilities
│   ├── three/               # React Three Fiber 3D Canvas scenes & particles
│   ├── utils/               # Helper routines
│   ├── App.jsx              # Main application shell
│   └── main.jsx             # Entry point
├── index.html               # Vite HTML template
├── package.json             # NPM dependencies & scripts
├── tailwind.config.js       # Tailwind theme extensions
└── vite.config.js           # Vite bundle configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

```bash
# Clone the repository (if not already cloned)
git clone https://github.com/Ramesh089/Portfolio.git

# Navigate into the project folder
cd Portfolio

# Switch to the 3D redesign branch
git checkout 3d-portfolio-redesign

# Install dependencies
npm install
```

### Development Server

Run the local Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploying to GitHub Pages (Automated via Actions)

1. In `vite.config.js`, configure `base: '/Portfolio/'` (or `'/'` if using custom domain or user page).
2. Install `gh-pages` if deploying manually:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add `"deploy": "gh-pages -d dist"` to `scripts` in `package.json`, then run:
   ```bash
   npm run build && npm run deploy
   ```

### Deploying to Vercel / Netlify

1. Connect your GitHub repository `Ramesh089/Portfolio`.
2. Set Build Command: `npm run build`.
3. Set Output Directory: `dist`.
4. Deploy instantly with zero configuration!

---

## 👤 Author

**Ramesh Korabar**
- **Email**: [rameshkorabar89@gmail.com](mailto:rameshkorabar89@gmail.com)
- **LinkedIn**: [linkedin.com/in/ramesh089](https://www.linkedin.com/in/ramesh089)
- **GitHub**: [github.com/Ramesh089](https://github.com/Ramesh089)
