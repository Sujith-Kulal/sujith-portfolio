const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/sujith-portfolio" : "");

const projects = [
  {
    title: "NLP Text-to-Braille Conversion",
    description:
      "Context-aware converter that applies correct Braille indicators for domain-specific terms using NLP.",
    link: "https://github.com/Sujith-Kulal/NLP-text-to-braille-conversion-using-context-awareness",
  },
  {
    title: "NLP-Based Kannada Spell Check",
    description:
      "Real-time Kannada spell checker with edit-distance, Unicode handling, and Windows app integration.",
    link: "https://github.com/Sujith-Kulal/NLP-Based-Kannada-Spell-Check",
  },
  {
    title: "Bhumi Real Estate",
    description:
      "Property listing platform with filters, maps, and nearby transport detection.",
    link: "https://github.com/Sujith-Kulal/real-estate-listing",
  },
  {
    title: "Smile Care",
    description:
      "Dental management system for appointments, records, and online services.",
    link: "https://github.com/Sujith-Kulal/SMILE-CARE",
  },
  {
    title: "React Node CRUD",
    description:
      "Full CRUD demo app for create, read, update, and delete workflows.",
    link: "https://github.com/Sujith-Kulal/React-node-curd-operations",
  },
  {
    title: "Android Auth App",
    description:
      "Android authentication flow with register and login activities.",
    link: "https://github.com/Sujith-Kulal/AndroidAuthApp",
  },
  {
    title: "DentalCare Mini Project",
    description:
      "Dental appointment booking with admin approval and status tracking.",
    link: "https://github.com/Sujith-Kulal/Dentalcare",
  },
];

const techCards = [
  "Python",
  "Java",
  "NLP",
  "React",
  "Next.js",
  "Git",
  "C",
];

const stats = [
  { value: "7+", label: "Projects" },
  { value: "3+", label: "Domains" },
  { value: "2026", label: "MCA" },
  { value: "2", label: "NLP Systems" },
];

const certifications = [
  "Java Spring Framework, Spring Boot, Spring AI – Udemy (2026)",
  "Practical Cyber Security – NPTEL (2025)",
  "Python Programming – Infosys Springboard (2025)",
];

function SocialIcon({ type }: { type: "github" | "linkedin" | "mail" }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2c-5.52 0-10 4.58-10 10.24 0 4.5 2.86 8.32 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.63-3.36-1.16-3.36-1.16-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.06-.64.06-.64 1.02.08 1.56 1.08 1.56 1.08.9 1.6 2.36 1.13 2.94.86.1-.67.36-1.13.65-1.4-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.02-2.76-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.76 1.06a9.2 9.2 0 0 1 2.5-.35c.86 0 1.72.12 2.5.35 1.92-1.34 2.76-1.06 2.76-1.06.54 1.4.2 2.44.1 2.7.64.72 1.02 1.64 1.02 2.76 0 3.93-2.34 4.8-4.58 5.06.38.34.72 1 .72 2.02v2.98c0 .26.18.58.68.48 3.98-1.34 6.84-5.16 6.84-9.66C22 6.58 17.52 2 12 2z"
        />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h3.96V21H3zM9.16 8.98H13v1.64h.06c.54-1.02 1.86-2.1 3.82-2.1 4.08 0 4.84 2.72 4.84 6.26V21h-3.96v-5.54c0-1.32-.02-3-1.84-3-1.86 0-2.14 1.48-2.14 2.9V21H9.16z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 5.2 8-5.2V7H4zm16 10V9.6l-7.4 4.8a1 1 0 0 1-1.2 0L4 9.6V17h16z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          {/* <a className="header-cta" href="#contact">
            
          </a> */}
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-lines" />
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="eyebrow"></p>
              <h1>Sujith Kulal</h1>
              <h2>Full Stack Developer | AI & NLP Enthusiast</h2>
              <p className="lede">
                Passionate about building intelligent systems and modern web
                applications.
              </p>
              <div className="hero-actions">
                {/* <a
                  className="button primary"
                  href={`${basePath}/Sujith_Kulal_CV.pdf`}
                >
                  Download CV
                </a> */}
                <a className="button ghost" href="#projects">
                  View Projects
                </a>
              </div>
              <div className="socials">
                <a href="https://github.com/Sujith-Kulal" target="_blank" rel="noreferrer">
                  <SocialIcon type="github" />
                </a>
                <a href="https://www.linkedin.com/in/sujith-kulal-09a888322/" target="_blank" rel="noreferrer">
                  <SocialIcon type="linkedin" />
                </a>
                <a href="mailto:sujithkulal909@gmail.com">
                  <SocialIcon type="mail" />
                </a>
              </div>
            </div>
            <div className="hero-profile">
              <div className="hero-image-frame">
                <img
                  src={`${basePath}/profile.png`}
                  alt="Portrait of Sujith Kulal"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">About</p>
              <h2>Motivated MCA student focused on AI, NLP, and full-stack.</h2>
              <p className="lede">
                I am a motivated MCA student with a strong interest in AI, NLP,
                and full-stack development. I enjoy solving real-world problems
                through clean architecture, scalable systems, and modern web
                experiences.
              </p>
            </div>
            <div className="card-grid">
              {techCards.map((tech) => (
                <div key={tech} className="chip-card">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Education</p>
              <h2></h2>
            </div>
            <div className="two-col">
              <div className="card">
                <h3>MCA – MITE Moodabidri</h3>
                <p className="muted">2024 – 2026</p>
              </div>
              <div className="card">
                <h3>BCA – St Mary’s College, Shirva</h3>
                <p className="muted">2021 – 2024</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Skills & Technologies</p>
              <h2></h2>
            </div>
            <div className="card-grid">
              {techCards.map((tech) => (
                <div key={tech} className="chip-card">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="internship" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Internship</p>
              <h2>MIT Manipal | Developer Intern</h2>
              <p className="muted">Sep 2025 – Dec 2025</p>
            </div>
            <div className="card">
              <h3>NLP-based Kannada Spell Checker</h3>
              <p className="lede">
                Developed a real-time Kannada spell checker using edit distance
                algorithm, dictionary lookup, Unicode processing, and
                transliteration. Integrated with Windows apps (Notepad & MS Word)
                using Win32 API and UI Automation. Implemented advanced NLP
                techniques for accurate error detection and correction.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Projects</p>
              <h2></h2>
            </div>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <article key={project.title} className="portfolio-card">
                  <div className="portfolio-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="portfolio-overlay">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View repository
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stats">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Certifications</p>
              <h2></h2>
            </div>
            <div className="card-grid">
              {certifications.map((cert) => (
                <div key={cert} className="card">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Lets build something premium together.</h2>
              <p className="lede">
                Open to full stack roles, internships, and collaborations.
              </p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
              <textarea rows={4} placeholder="Project details" />
              <button className="button primary" type="submit">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span>Designed and built by Sujith Kulal.</span>
          <span></span>
        </div>
      </footer>
    </div>
  );
}
