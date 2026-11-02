export const personalInfo = {
  name: "Ramesh",
  fullName: "Ramesh Korabar",
  title: "Full Stack Developer | Data Science Enthusiast | MCA Student",
  headline: "Hi, I'm Ramesh",
  subheading: "I build interactive digital experiences, intelligent applications and scalable solutions through technology.",
  bio: [
    "I am currently pursuing my Master of Computer Applications (MCA) at Kristu Jayanti University, having graduated with a Bachelor of Computer Applications (BCA) with an 8.78 CGPA (Grade A+).",
    "With a passion for modern web architecture and data intelligence, I build full-stack applications using React, Node.js, and Python/Django, while exploring Machine Learning and Data Science to extract actionable insights from data.",
    "I completed a Software Development Internship at LYD Technologies working on algorithmic trading features and live API integrations. I am eager to contribute to forward-thinking engineering teams and solve complex digital challenges."
  ],
  email: "rameshkorabar89@gmail.com",
  phone: "+91 83107 15318",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/Ramesh089",
  linkedin: "https://www.linkedin.com/in/ramesh089",
  resumeUrl: "/Ramesh_Resume.pdf",
  certPdfUrl: "/Ramesh_Cert.pdf",
  profileImage: "/ramesh.webp",
  profileImagePng: "/ramesh.png",
  stats: [
    { label: "Post Graduate", value: "MCA", detail: "Kristu Jayanti Univ" },
    { label: "BCA Foundation", value: "8.78", detail: "CGPA Grade A+" },
    { label: "Industry Certs", value: "3+", detail: "Azure, Power BI, NASSCOM" },
    { label: "Projects Built", value: "10+", detail: "Full Stack & AI" }
  ]
};

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages powering application logic & backend pipelines",
    skills: [
      { name: "Python", level: "Advanced", icon: "python", tags: ["OOP", "Data Analysis", "Automation", "Django"] },
      { name: "JavaScript", level: "Advanced", icon: "javascript", tags: ["ES6+", "Async/Await", "DOM", "TypeScript basics"] }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Responsive, component-driven user interfaces & experiences",
    skills: [
      { name: "React", level: "Proficient", icon: "react", tags: ["Hooks", "Context API", "Components", "State Mgmt"] },
      { name: "HTML5", level: "Expert", icon: "html", tags: ["Semantic Web", "Accessibility", "SEO structure"] },
      { name: "CSS3 / Tailwind", level: "Advanced", icon: "css", tags: ["Flexbox", "CSS Grid", "Glassmorphism", "Animations"] }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server architecture, microservices & RESTful API endpoints",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "nodejs", tags: ["Event Loop", "NPM", "Async I/O"] },
      { name: "Express.js", level: "Proficient", icon: "express", tags: ["Middleware", "Routing", "JWT Auth", "REST API"] },
      { name: "Django", level: "Proficient", icon: "django", tags: ["MVT Architecture", "Django ORM", "Admin Dashboard", "Security"] }
    ]
  },
  {
    id: "database",
    title: "Database",
    description: "Data modeling, relational schemas & query optimization",
    skills: [
      { name: "MySQL", level: "Advanced", icon: "mysql", tags: ["Relational Schema", "Joins", "Indexing", "Stored Procs"] },
      { name: "SQL", level: "Advanced", icon: "sql", tags: ["DDL/DML", "Aggregations", "Query Optimization"] }
    ]
  },
  {
    id: "datascience",
    title: "Data Science & Analytics",
    description: "Data wrangling, machine learning models & business intelligence",
    skills: [
      { name: "Pandas", level: "Advanced", icon: "pandas", tags: ["DataFrames", "Cleaning", "Transformations", "Aggregations"] },
      { name: "NumPy", level: "Advanced", icon: "numpy", tags: ["Array Operations", "Linear Algebra", "Vectorization"] },
      { name: "Power BI", level: "Certified", icon: "powerbi", tags: ["DAX", "Interactive Dashboards", "Data Modeling"] },
      { name: "Machine Learning", level: "Intermediate", icon: "brain", tags: ["Classification", "Regression", "Model Evaluation"] },
      { name: "Data Science", level: "Certified", icon: "chart", tags: ["EDA", "Data Visualization", "Statistical Analysis"] }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Development environment, version control & cloud deployment",
    skills: [
      { name: "Git", level: "Advanced", icon: "git", tags: ["Branching", "Merge workflows", "Commit hygiene"] },
      { name: "GitHub", level: "Advanced", icon: "github", tags: ["Collaboration", "PRs", "CI/CD Workflows", "Pages"] },
      { name: "VS Code", level: "Expert", icon: "vscode", tags: ["Extensions", "Debugging", "Terminal Integration"] },
      { name: "AWS Fundamentals", level: "Foundational", icon: "aws", tags: ["EC2", "S3", "IAM", "Cloud Architecture"] }
    ]
  }
];

export const projects = [
  {
    id: "tourist-ai-hub",
    title: "Tourist AI Hub",
    headline: "A–Z AI-Powered Intelligent Travel Companion",
    description: "An all-in-one comprehensive tourism web ecosystem featuring AI-generated travel itineraries, cross-modal booking for trains, buses & cabs, interactive real-time seat matrices, unified payment simulations, and instant e-ticket boarding passes.",
    category: "Full Stack & AI",
    featured: true,
    image: "/projects/01_Tourist_Hub_Home_Dashboard.png",
    gallery: [
      "/projects/01_Tourist_Hub_Home_Dashboard.png",
      "/projects/02_Destination_Exploration_Places.png",
      "/projects/06_Train_Booking_Card_Details.png",
      "/projects/07_Interactive_Seat_Layout_Grid.png",
      "/projects/08_Unified_Payment_Gateway_Modal.png",
      "/projects/09_Confirmed_E_Ticket_Boarding_Pass.png"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Gemini AI", "REST API"],
    github: "https://github.com/Ramesh089/turistHub-Ai",
    demo: null,
    metrics: [
      { label: "Booking Modes", value: "3 (Train/Bus/Cab)" },
      { label: "AI Integration", value: "Custom Prompt Itineraries" },
      { label: "Ticket Engine", value: "Dynamic QR & E-Pass" }
    ],
    highlights: [
      "AI trip planner generating personalized day-by-day itineraries based on travel style and budget.",
      "Multi-transport booking engine supporting live seat grid selection for trains and coaches.",
      "Unified payment gateway checkout modal with automated e-boarding pass PDF generation.",
      "Clean modular backend with decoupled route handlers for AI, auth, transport, and bookings."
    ]
  },
  {
    id: "cyber-crime-portal",
    title: "Cyber Crime Awareness Portal",
    headline: "Public Safety & Threat Reporting Platform",
    description: "A full-stack cybersecurity portal developed as a BCA final year project to spread awareness of modern attack vectors, deliver emergency advisory broadcasts, and facilitate citizen incident reporting.",
    category: "Full Stack",
    featured: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    tech: ["Django", "Python", "HTML5", "CSS3", "JavaScript", "SQLite"],
    github: "https://github.com/Ramesh089",
    demo: null,
    metrics: [
      { label: "Project Level", value: "BCA Capstone" },
      { label: "Backend", value: "Django MVT" },
      { label: "Security", value: "CSRF & Role-Based" }
    ],
    highlights: [
      "Real-time emergency cyber threat alerts and safety countermeasures feed.",
      "Structured threat reporting system storing incident logs in database via Django ORM.",
      "Interactive knowledge base breaking down ransomware, phishing, and identity theft."
    ]
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection",
    headline: "Deep Learning Medical Computer Vision",
    description: "An intelligent medical diagnosis system leveraging Convolutional Neural Networks (CNN) to detect and classify brain tumors from magnetic resonance imaging (MRI) scans.",
    category: "Data Science & AI",
    featured: false,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    github: "https://github.com/Ramesh089",
    demo: null,
    metrics: [
      { label: "Domain", value: "Medical AI" },
      { label: "Model Type", value: "Deep CNN" },
      { label: "Evaluation", value: "Precision & Recall" }
    ],
    highlights: [
      "Automated image normalization, morphological filtering, and contour localization on MRI scans.",
      "Deep feature extraction detecting gliomas, meningiomas, and pituitary abnormalities.",
      "Evaluation visualizations including confusion matrices, ROC curves, and prediction confidence."
    ]
  },
  {
    id: "rice-prediction",
    title: "Rice Yield & Quality Prediction",
    headline: "Agricultural Data Intelligence & Modeling",
    description: "Machine learning research model evaluating agricultural metrics—soil quality, precipitation, humidity, and nutrient indices—to predict crop yield and quality classifications.",
    category: "Data Science & AI",
    featured: false,
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Seaborn"],
    github: "https://github.com/Ramesh089/Python-Data-Analysis",
    demo: null,
    metrics: [
      { label: "Data Pipeline", value: "NumPy / Pandas" },
      { label: "Algorithm", value: "Ensemble Trees" },
      { label: "Application", value: "Smart Agriculture" }
    ],
    highlights: [
      "Exploratory data analysis identifying correlation heatmaps among micro-climate variables.",
      "Trained Regression & Random Forest classifiers for yield estimation and crop health categorization.",
      "Provides actionable data recommendations for optimized irrigation and fertilizer cycles."
    ]
  },
  {
    id: "react-todo-app",
    title: "React Todo Application",
    headline: "Component Architecture & State Persistence",
    description: "A fast, responsive productivity tool engineered with modern React Hooks, local storage synchronization, dynamic task categorization, and fluid animated transitions.",
    category: "Frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage API"],
    github: "https://github.com/Ramesh089",
    demo: null,
    metrics: [
      { label: "State Engine", value: "React Hooks" },
      { label: "Storage", value: "Persistent Offline" },
      { label: "Design", value: "Fluid Responsive" }
    ],
    highlights: [
      "Modular functional components utilizing useState, useEffect, and custom hooks.",
      "Real-time filtering by status (All, Completed, Active) and full CRUD support.",
      "Zero page reloads with seamless local storage persistence across sessions."
    ]
  },
  {
    id: "api-data-fetching",
    title: "API Data Fetching Application",
    headline: "Asynchronous Data Handling & UI Feedback",
    description: "Dynamic React application connecting to live third-party REST APIs, featuring debounced searching, dynamic pagination, asynchronous error boundary handling, and skeleton loaders.",
    category: "Frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "JavaScript", "Axios", "REST APIs", "CSS Grid"],
    github: "https://github.com/Ramesh089",
    demo: null,
    metrics: [
      { label: "Protocol", value: "REST API / Axios" },
      { label: "Data Handling", value: "Async / Await" },
      { label: "UX Pattern", value: "Skeleton Loaders" }
    ],
    highlights: [
      "Robust error handling and network status monitoring with graceful UI states.",
      "Debounced search bar reducing redundant HTTP queries during fast typing.",
      "Responsive card grid displaying parsed JSON payloads with clean formatting."
    ]
  },
  {
    id: "crypto-image-steganography",
    title: "Crypto Image Generator",
    headline: "Python Cryptographic Steganography Tool",
    description: "Security utility that encodes and conceals confidential textual data within the bitplanes of digital images using Least Significant Bit (LSB) steganography.",
    category: "Security & Python",
    featured: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "Pillow (PIL)", "Steganography", "Cryptography"],
    github: "https://github.com/Ramesh089/cryptoImage",
    demo: null,
    metrics: [
      { label: "Algorithm", value: "LSB Bitplane Encoding" },
      { label: "Output", value: "Lossless PNG" },
      { label: "Security", value: "Payload Obfuscation" }
    ],
    highlights: [
      "Imperceptible payload hiding inside 24-bit RGB pixel color components.",
      "Validation checksums ensuring extracted messages match original encrypted contents.",
      "CLI interface for fast image encoding, decoding, and capacity calculation."
    ]
  }
];

export const educationAndExperience = [
  {
    type: "education",
    period: "2025 – 2027 (Expected)",
    title: "Master of Computer Applications (MCA)",
    institution: "Kristu Jayanti University (Deemed to be University)",
    location: "Bengaluru, India",
    description: "Specializing in Advanced Software Engineering, Cloud Computing, Full Stack Web Architecture, and Data Science. Actively building scalable applications and deepening expertise in distributed systems.",
    tags: ["Full Stack", "Data Science", "Advanced DB", "Cloud"]
  },
  {
    type: "experience",
    period: "2024",
    title: "Student Intern – Software Development",
    institution: "LYD Technologies",
    location: "Bengaluru, India",
    description: "Developed stock market prediction features using OpenAlgo by analyzing real-time market trends and historical data. Integrated REST APIs to fetch and display live market feeds. Utilized Python for backend data processing pipelines and automated trading logic under Agile methodologies.",
    tags: ["OpenAlgo", "Python", "REST APIs", "Algorithmic Trading", "Agile"]
  },
  {
    type: "education",
    period: "2022 – 2025",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Koshys Group of Institutions",
    location: "Bengaluru, India",
    description: "Graduated with an outstanding CGPA of 8.78 (Grade A+). Developed foundational strength in Data Structures, Relational Databases, Web Technologies, and developed the Cyber Crime Awareness Portal as the final year capstone.",
    tags: ["CGPA 8.78", "Grade A+", "Data Structures", "Django", "MySQL"]
  },
  {
    type: "experience",
    period: "2024",
    title: "Data Science with Python Training",
    institution: "NASSCOM Foundation powered by Capgemini",
    location: "Credentialed Program",
    description: "Intensive government-aligned industry competency certification covering Python for data analysis, statistical methods, Pandas, NumPy, and machine learning foundations. Certified with Gold Category distinction (76%).",
    tags: ["Data Science", "Python", "Pandas", "NumPy", "NASSCOM Gold"]
  }
];

export const certifications = [
  {
    id: "azure-az900",
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    year: "2024",
    status: "Verified Credential",
    badgeColor: "cyan",
    description: "Validated fundamental cloud computing concepts, core Azure services, security, privacy, compliance, and cloud pricing models.",
    skillsCovered: ["Cloud Concepts", "Azure Architecture", "Virtual Networks", "Cloud Security", "Cost Management"],
    verifyUrl: "https://www.linkedin.com/in/ramesh089"
  },
  {
    id: "power-bi-analyst",
    title: "Microsoft Power BI Data Analyst",
    code: "Power BI",
    issuer: "Microsoft / Micro Power",
    year: "2024",
    status: "Verified Credential",
    badgeColor: "amber",
    description: "Hands-on data visualization, interactive business dashboard creation, DAX calculations, data modeling, and business intelligence reporting.",
    skillsCovered: ["DAX Formulas", "Data Modeling", "Dashboard Design", "ETL Pipelines", "Business Intelligence"],
    verifyUrl: "https://www.linkedin.com/in/ramesh089"
  },
  {
    id: "nasscom-python-ds",
    title: "Data Science with Python Certification",
    code: "FSP/2026/9/10378473",
    issuer: "NASSCOM Foundation (powered by Capgemini)",
    year: "2024",
    status: "Verified Gold Category (76%)",
    badgeColor: "violet",
    description: "Cleared the official assessment aligned to Competency Standards developed by IT-ITeS Sector Skills Council NASSCOM in collaboration with Industry and approved by Government.",
    skillsCovered: ["Python Data Science", "Pandas & NumPy", "Statistical Analysis", "EDA", "Machine Learning Foundations"],
    verifyUrl: "/Ramesh_Cert.pdf"
  }
];
