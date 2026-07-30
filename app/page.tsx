"use client";

import { useState, useEffect } from "react";
import BackgroundCanvas from "./BackgroundCanvas";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  BrainCircuit,
  Sparkles,
  Laptop,
  Briefcase,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Menu,
  X,
  ChevronUp,
  Terminal,
  Layers,
  Cpu,
  GraduationCap,
  MapPin,
  Send,
  Check,
  BookOpen,
} from "lucide-react";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/sujith-portfolio" : "");

// Projects Data
const projects = [
  {
    id: "nlp-braille",
    title: "AI Text-to-Braille Conversion",
    category: "ai-nlp",
    categoryLabel: "AI & NLP",
    description:
      "Context-aware converter that applies correct Braille indicators for domain-specific terms using Natural Language Processing techniques.",
    highlights: [
      "Context-aware rule engine for domain terms",
      "Automated Braille indicator mapping",
      "NLP text processing pipeline",
    ],
    tags: ["Python", "NLP", "Rule Engine", "Braille Standard"],
    link: "https://github.com/Sujith-Kulal/NLP-text-to-braille-conversion-using-context-awareness",
    featured: true,
  },
  {
    id: "nlp-kannada",
    title: "NLP-Based Kannada Spell Check",
    category: "ai-nlp",
    categoryLabel: "AI & NLP",
    description:
      "Real-time Kannada spell checker developed during internship at MIT Manipal. Integrates with Notepad & MS Word via Win32 API and UI Automation.",
    highlights: [
      "Edit-distance algorithm & dictionary lookup",
      "Win32 API & UI Automation integration",
      "Unicode handling & transliteration support",
    ],
    tags: ["Python", "Win32 API", "UI Automation", "Unicode", "Edit Distance"],
    link: "https://github.com/Sujith-Kulal/NLP-Based-Kannada-Spell-Check",
    featured: true,
  },
  {
    id: "bhumi-real-estate",
    title: "Bhumi Real Estate Platform",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Modern property listing platform with multi-criterion search filters, interactive location maps, and nearby transport node detection.",
    highlights: [
      "Property search & advanced filters",
      "Nearby public transport calculation",
      "Responsive UI & property gallery",
    ],
    tags: ["React", "JavaScript", "Node.js", "CSS3", "Maps API"],
    link: "https://github.com/Sujith-Kulal/real-estate-listing",
    featured: true,
  },
  {
    id: "smile-care",
    title: "Smile Care Dental System",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Comprehensive dental clinic management system for patient appointments, medical history records, and online service scheduling.",
    highlights: [
      "Appointment scheduling workflow",
      "Patient medical history tracking",
      "Admin dashboard management",
    ],
    tags: ["React", "Web Stack", "REST API", "Database"],
    link: "https://github.com/Sujith-Kulal/SMILE-CARE",
    featured: false,
  },
  {
    id: "react-crud",
    title: "React Node CRUD Platform",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Full stack CRUD application demonstrating complete create, read, update, and delete operations with clean state management.",
    highlights: [
      "RESTful API integration",
      "Form validation & modal dialogues",
      "Responsive data table layout",
    ],
    tags: ["React.js", "Node.js", "Express", "REST API"],
    link: "https://github.com/Sujith-Kulal/React-node-curd-operations",
    featured: false,
  },
  {
    id: "android-auth",
    title: "Android Auth Mobile App",
    category: "mobile",
    categoryLabel: "Mobile & System",
    description:
      "Native Android authentication application featuring secure user registration, credential validation, and session management.",
    highlights: [
      "User registration & login activities",
      "Secure credential validation",
      "Session state preservation",
    ],
    tags: ["Java", "Android SDK", "XML", "Mobile Auth"],
    link: "https://github.com/Sujith-Kulal/AndroidAuthApp",
    featured: false,
  },
  {
    id: "dental-care-mini",
    title: "DentalCare Booking Portal",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Streamlined dental booking mini project featuring appointment submission, admin approval status tracking, and notification feedback.",
    highlights: [
      "Appointment booking forms",
      "Admin approval interface",
      "Real-time status updates",
    ],
    tags: ["Web Development", "HTML/CSS", "JavaScript"],
    link: "https://github.com/Sujith-Kulal/Dentalcare",
    featured: false,
  },
];

// Skills Data
const skills = [
  {
    category: "ai-nlp",
    title: "AI & Natural Language Processing",
    icon: BrainCircuit,
    items: [
      { name: "Python", level: "Advanced" },
      { name: "Natural Language Processing (NLP)", level: "Specialist" },
      { name: "Context-Aware Braille Rules", level: "Specialist" },
      { name: "Edit Distance & Spell Checkers", level: "Advanced" },
      { name: "Unicode & Text Analytics", level: "Advanced" },
    ],
  },
  {
    category: "web",
    title: "Frontend & Web Development",
    icon: Laptop,
    items: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "TypeScript / JavaScript", level: "Advanced" },
      { name: "HTML5 / Modern CSS3", level: "Advanced" },
      { name: "Responsive UI Design", level: "Advanced" },
    ],
  },
  {
    category: "backend",
    title: "Backend & Systems",
    icon: Cpu,
    items: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Framework & Spring Boot", level: "Certified" },
      { name: "Spring AI Integration", level: "Intermediate" },
      { name: "C Programming", level: "Foundational" },
      { name: "RESTful APIs", level: "Advanced" },
    ],
  },
  {
    category: "tools",
    title: "Tools & OS Automation",
    icon: Terminal,
    items: [
      { name: "Win32 API & UI Automation", level: "Practical" },
      { name: "Git & GitHub Version Control", level: "Advanced" },
      { name: "Node.js Environment", level: "Intermediate" },
      { name: "VS Code & IDE Workflows", level: "Advanced" },
    ],
  },
];

// Certifications Data
const certifications = [
  {
    title: "Java Spring Framework, Spring Boot, Spring AI",
    issuer: "Udemy",
    year: "2026",
    badge: "Certified Developer",
    icon: Code2,
  },
  {
    title: "Practical Cyber Security",
    issuer: "NPTEL",
    year: "2025",
    badge: "NPTEL Verified",
    icon: Award,
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    year: "2025",
    badge: "Infosys Certified",
    icon: Terminal,
  },
];

// Research Publications & Patent Data
const publicationsData = [
  {
    year: "2026",
    title: "Kannada Spell Checker Using Natural Language Processing",
    venue: "AI-HCSST 2026, ABV-IIITM Gwalior Campus, India · March 2026",
    type: "Conference Publication",
  },
];

// Work Experience Data
const experienceData = [
  {
    date: "Sep 2025 – Dec 2025",
    title: "Developer Intern",
    organization: "MIT Manipal",
    description:
      "Developed a real-time NLP-based Kannada spell correction system for Notepad to address the absence of advanced spell-check support for Kannada, utilizing morphological analysis and Unicode–WX transliteration for accurate error detection and correction.",
    bulletPoints: [
      "Processed and analyzed large-scale Kannada text datasets for spell correction and language processing tasks.",
      "Performed data preprocessing, validation, and consistency of linguistic data.",
      "Worked with NLP techniques such as tokenization, morphological analysis, POS tagging, and Unicode–WX transliteration for Kannada text processing.",
      "Automated data preprocessing and validation workflows using Python scripts, improving efficiency and ensuring high-quality linguistic datasets.",
    ],
    skills: [
      "Python",
      "NLP",
      "Morphological Analysis",
      "Unicode–WX Transliteration",
      "POS Tagging",
      "Automation",
    ],
  },
];

// Education Data
const educationData = [
  {
    date: "2024 – 2026",
    title: "Master of Computer Applications (MCA)",
    organization: "MITE Moodabidri",
    description:
      "Pursuing advanced studies in software architecture, artificial intelligence, NLP, web application design, and enterprise application development.",
    skills: ["AI / NLP", "Full Stack", "Data Structures", "Spring Boot"],
  },
  {
    date: "2021 – 2024",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "St Mary’s College, Shirva",
    description:
      "Built strong foundation in computer science core principles, database management systems, object-oriented programming, and web technology.",
    skills: ["Java", "C", "Web Basics", "Database Systems"],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track active section on scroll according to the specified sequence
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "research",
        "certifications",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sujithkulal909@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  return (
    <div className="page">
      {/* Background Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Ambient Aurora Glow Orbs */}
      <div className="ambient-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-pattern" />

      {/* Site Header Navigation */}
      <header className="site-header">
        <div className="container header-inner" style={{ justifyContent: "center" }}>
          {/* Desktop Navigation in exact requested order: About, Experience, Skills, Projects, Research, Certifications, Education, Contact */}
          <nav className="nav-desktop">
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
            <a
              href="#research"
              className={activeSection === "research" ? "active" : ""}
            >
              Research
            </a>
            <a
              href="#certifications"
              className={activeSection === "certifications" ? "active" : ""}
            >
              Certifications
            </a>
            <a
              href="#education"
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{ position: "absolute", right: "20px" }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation in exact requested order */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
            Experience
          </a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)}>
            Research
          </a>
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>
            Certifications
          </a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)}>
            Education
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              {/* Status Pill */}
              <div className="status-pill">
                <span className="status-dot" />
                <span>MCA Student (2024–2026) • Open for Roles</span>
              </div>

              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text-accent">Sujith Kulal</span>
              </h1>

              <h2 className="hero-subtitle">
                Full Stack Developer & AI / NLP Enthusiast
              </h2>

              <p className="hero-description">
                Passionate about engineering context-aware NLP tools, building responsive full-stack web applications, and delivering high-performance software solutions.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  <span>Explore Work</span>
                  <ArrowUpRight size={18} />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="social-links">
                <a
                  className="social-icon-btn"
                  href="https://github.com/Sujith-Kulal"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  className="social-icon-btn"
                  href="https://www.linkedin.com/in/sujith-kulal-09a888322/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  className="social-icon-btn"
                  href="mailto:sujithkulal909@gmail.com"
                  title="Send Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Profile Photo Display */}
            <div className="profile-wrapper">
              <div className="profile-ring">
                <div className="profile-inner">
                  <img
                    src={`${basePath}/profile.png`}
                    alt="Portrait of Sujith Kulal"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. ABOUT ME SECTION */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">01. ABOUT ME</span>
              <h2 className="section-title">Driven by Curiosity, Powered by Code.</h2>
            </div>

            <div className="about-grid">
              <div className="glass-card about-card">
                <h3 style={{ fontSize: "1.4rem", marginBottom: "16px", color: "var(--accent-cyan)" }}>
                  Who I Am
                </h3>
                <p style={{ color: "var(--text-sub)", lineHeight: "1.7", marginBottom: "16px" }}>
                  I am an MCA student at MITE Moodabidri with a passion for software development, language technologies, and modern web frameworks.
                </p>
                <p style={{ color: "var(--text-sub)", lineHeight: "1.7" }}>
                  My expertise spans from designing real-time Kannada spell checkers with Win32 OS integration during my internship at MIT Manipal, to publishing research papers in NLP and engineering context-aware full-stack web applications.
                </p>

                {/* Highlights Counter Grid */}
                <div className="highlight-box">
                  <div className="stat-item">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">Projects Built</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1</div>
                    <div className="stat-label">Research Paper</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">MIT</div>
                    <div className="stat-label">Manipal Intern</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2026</div>
                    <div className="stat-label">MCA Candidate</div>
                  </div>
                </div>
              </div>

              <div className="glass-card about-card" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "var(--accent-purple)" }}>
                  Core Competencies
                </h3>

                <div style={{ display: "grid", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div className="skill-icon-wrapper" style={{ flexShrink: 0 }}>
                      <BrainCircuit size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: "600" }}>NLP & Text Intelligence</h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-sub)", marginTop: "4px" }}>
                        Edit distance algorithms, Unicode processing, transliteration, and rule-based Braille translation.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div className="skill-icon-wrapper" style={{ flexShrink: 0, borderColor: "rgba(99, 102, 241, 0.3)", color: "var(--accent-indigo)" }}>
                      <Code2 size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: "600" }}>Full Stack Web Applications</h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-sub)", marginTop: "4px" }}>
                        Building scalable UIs with React, Next.js, and backend integration with Node.js & Spring Boot.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div className="skill-icon-wrapper" style={{ flexShrink: 0, borderColor: "rgba(168, 85, 247, 0.3)", color: "var(--accent-purple)" }}>
                      <Terminal size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: "600" }}>OS & Automation Tools</h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-sub)", marginTop: "4px" }}>
                        Win32 API integration, UI Automation, and desktop utility development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">02. WORK EXPERIENCE</span>
              <h2 className="section-title">Professional Experience</h2>
              <p className="section-description">
                Hands-on development experience in industry-grade software research and engineering.
              </p>
            </div>

            <div className="timeline">
              {experienceData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="glass-card timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-org">{item.organization}</div>
                    <p style={{ color: "var(--text-sub)", lineHeight: "1.6", marginBottom: "16px" }}>
                      {item.description}
                    </p>
                    {item.bulletPoints && (
                      <ul style={{ listStyle: "none", margin: "0 0 20px 0", padding: 0 }}>
                        {item.bulletPoints.map((bp, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "0.92rem",
                              color: "var(--text-sub)",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              marginBottom: "8px",
                              lineHeight: "1.6",
                            }}
                          >
                            <span style={{ color: "var(--accent-cyan)", flexShrink: 0, marginTop: "2px" }}>▹</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="tech-tags">
                      {item.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">03. SKILLS</span>
              <h2 className="section-title">Technical Expertise</h2>
              <p className="section-description">
                Technologies and tools I work with to turn complex ideas into functional products.
              </p>
            </div>

            <div className="grid-2">
              {skills.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.category} className="glass-card skill-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div className="skill-icon-wrapper">
                        <Icon size={24} />
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{group.title}</h3>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          style={{
                            padding: "8px 14px",
                            borderRadius: "10px",
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <CheckCircle2 size={14} style={{ color: "var(--accent-cyan)" }} />
                          <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{item.name}</span>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              color: "var(--text-muted)",
                              fontFamily: "var(--font-mono)",
                              marginLeft: "4px",
                            }}
                          >
                            • {item.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">04. PORTFOLIO</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-description">
                Explore a selection of my NLP systems, full-stack web applications, and desktop integrations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="skill-tabs">
              <button
                className={`tab-btn ${projectFilter === "all" ? "active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                All Projects ({projects.length})
              </button>
              <button
                className={`tab-btn ${projectFilter === "ai-nlp" ? "active" : ""}`}
                onClick={() => setProjectFilter("ai-nlp")}
              >
                AI & NLP (2)
              </button>
              <button
                className={`tab-btn ${projectFilter === "web" ? "active" : ""}`}
                onClick={() => setProjectFilter("web")}
              >
                Web Applications (4)
              </button>
              <button
                className={`tab-btn ${projectFilter === "mobile" ? "active" : ""}`}
                onClick={() => setProjectFilter("mobile")}
              >
                Mobile & Apps (1)
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid-3">
              {filteredProjects.map((project) => (
                <div key={project.id} className="glass-card project-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="project-badge">{project.categoryLabel}</span>
                    {project.featured && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--accent-cyan)",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          fontWeight: "600",
                        }}
                      >
                        <Sparkles size={14} /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {/* Highlights Bullet List */}
                  <ul style={{ listStyle: "none", margin: "0 0 16px 0", padding: 0 }}>
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-sub)",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "4px",
                        }}
                      >
                        <span style={{ color: "var(--accent-indigo)" }}>▹</span> {h}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Github size={16} />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. RESEARCH PUBLICATIONS & PATENT SECTION */}
        <section id="research" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">05. PUBLICATIONS & PATENTS</span>
              <h2 className="section-title">Research Publications & Patent</h2>
              <p className="section-description">
                Academic contributions and research papers in Natural Language Processing and AI.
              </p>
            </div>

            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
              {publicationsData.map((pub, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "32px", position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        color: "var(--accent-cyan)",
                        background: "rgba(6, 182, 212, 0.12)",
                        border: "1px solid rgba(6, 182, 212, 0.3)",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontWeight: "600",
                      }}
                    >
                      {pub.year}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--accent-purple)",
                        background: "rgba(168, 85, 247, 0.12)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <BookOpen size={14} /> {pub.type}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "10px", lineHeight: "1.3" }}>
                    {pub.title}
                  </h3>

                  <div style={{ color: "var(--accent-indigo)", fontWeight: "600", fontSize: "0.98rem" }}>
                    {pub.venue}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CERTIFICATIONS SECTION */}
        <section id="certifications" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">06. CREDENTIALS</span>
              <h2 className="section-title">Certifications & Achievements</h2>
              <p className="section-description">
                Continuous learning and formal certifications in software development and security.
              </p>
            </div>

            <div className="grid-3">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="glass-card" style={{ padding: "28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                      <div className="skill-icon-wrapper">
                        <Icon size={24} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--accent-cyan)",
                          background: "rgba(6, 182, 212, 0.1)",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontWeight: "600",
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", lineHeight: "1.3" }}>
                      {cert.title}
                    </h3>
                    <p style={{ color: "var(--text-sub)", fontSize: "0.95rem", marginBottom: "16px" }}>
                      Issued by <strong style={{ color: "var(--text-main)" }}>{cert.issuer}</strong>
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.82rem",
                        color: "var(--accent-emerald)",
                        fontWeight: "600",
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>{cert.badge}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. EDUCATION SECTION */}
        <section id="education" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">07. EDUCATION</span>
              <h2 className="section-title">Academic Background</h2>
              <p className="section-description">
                My formal academic degrees in computer applications and technology.
              </p>
            </div>

            <div className="timeline">
              {educationData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: "var(--accent-purple)", boxShadow: "0 0 15px var(--accent-purple)" }} />
                  <div className="glass-card timeline-content">
                    <span className="timeline-date" style={{ color: "var(--accent-purple)", background: "rgba(168, 85, 247, 0.1)", borderColor: "rgba(168, 85, 247, 0.25)" }}>
                      {item.date}
                    </span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-org" style={{ color: "var(--accent-cyan)" }}>{item.organization}</div>
                    <p style={{ color: "var(--text-sub)", lineHeight: "1.6", marginBottom: "16px" }}>
                      {item.description}
                    </p>
                    <div className="tech-tags">
                      {item.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">08. CONTACT</span>
              <h2 className="section-title">Let's Connect</h2>
              <p className="section-description">
                Have a project idea, job opportunity, or collaboration in mind? Feel free to drop a message!
              </p>
            </div>

            <div className="contact-container">
              {/* Info Card */}
              <div className="glass-card contact-info-card">
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>
                  Get In Touch
                </h3>
                <p style={{ color: "var(--text-sub)", lineHeight: "1.6" }}>
                  Open for full-stack developer roles, NLP engineering opportunities, and software projects.
                </p>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-sub)" }}>Email Address</div>
                    <div style={{ fontWeight: "600", fontSize: "1rem", marginTop: "2px" }}>
                      sujithkulal909@gmail.com
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      marginLeft: "auto",
                      background: "transparent",
                      border: "none",
                      color: "var(--accent-cyan)",
                      cursor: "pointer",
                      padding: "6px",
                    }}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={18} /> : <Send size={18} />}
                  </button>
                </div>

                <div className="info-item">
                  <div className="info-icon" style={{ borderColor: "rgba(168, 85, 247, 0.3)", color: "var(--accent-purple)" }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-sub)" }}>Location</div>
                    <div style={{ fontWeight: "600", fontSize: "1rem", marginTop: "2px" }}>
                      Karnataka, India
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon" style={{ borderColor: "rgba(6, 182, 212, 0.3)", color: "var(--accent-cyan)" }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-sub)" }}>Status</div>
                    <div style={{ fontWeight: "600", fontSize: "1rem", marginTop: "2px" }}>
                      MCA Candidate (MITE Moodabidri)
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "12px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "12px" }}>
                    Social Profiles
                  </div>
                  <div className="social-links">
                    <a
                      className="social-icon-btn"
                      href="https://github.com/Sujith-Kulal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      className="social-icon-btn"
                      href="https://www.linkedin.com/in/sujith-kulal-09a888322/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      className="social-icon-btn"
                      href="mailto:sujithkulal909@gmail.com"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="glass-card contact-form-card">
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "20px" }}>
                  Send a Message
                </h3>

                {formSubmitted ? (
                  <div
                    style={{
                      padding: "24px",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(16, 185, 129, 0.12)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: "var(--accent-emerald)",
                      textAlign: "center",
                    }}
                  >
                    <CheckCircle2 size={36} style={{ margin: "0 auto 12px" }} />
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Message Sent!</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-sub)", marginTop: "6px" }}>
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="form-control"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="form-control"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="form-control"
                        placeholder="Hi Sujith, I'd like to discuss a project..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--text-sub)" }}>
              © {new Date().getFullYear()} Sujith Kulal. Built with Next.js & React.
            </span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="back-to-top"
            title="Back to Top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
