import type { CSSProperties } from "react";

const projects = [
  {
    title: "NLP Text-to-Braille Conversion",
    description:
      "Context-aware converter that applies correct Braille indicators for domain-specific terms using NLP.",
    link: "https://github.com/Sujith-Kulal/NLP-text-to-braille-conversion-using-context-awareness",
  },
  {
    title: "Kannada Spell Check",
    description:
      "Real-time spell checker with edit-distance, transliteration, and Windows app integration.",
    link: "https://github.com/Sujith-Kulal/NLP-Based-Kannada-Spell-Check",
  },
  {
    title: "Bhumi Real Estate",
    description:
      "Listing platform for land and apartments with filters, maps, and nearby transport detection.",
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

const skills = [
  { title: "Java", icon: "code" },
  { title: "Spring Boot", icon: "server" },
  { title: "React", icon: "spark" },
  { title: "Node.js", icon: "stack" },
  { title: "NLP", icon: "brain" },
  { title: "Android", icon: "device" },
];

const socials = [
  {
    title: "GitHub",
    link: "https://github.com/Sujith-Kulal",
    icon: "github",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sujith-kulal-09a888322/",
    icon: "linkedin",
  },
  {
    title: "Email",
    link: "mailto:sujithkulal909@gmail.com",
    icon: "mail",
  },
];

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/sujith-portfolio" : "");

function Icon({ name }: { name: string }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2c-5.52 0-10 4.58-10 10.24 0 4.5 2.86 8.32 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.63-3.36-1.16-3.36-1.16-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.06-.64.06-.64 1.02.08 1.56 1.08 1.56 1.08.9 1.6 2.36 1.13 2.94.86.1-.67.36-1.13.65-1.4-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.02-2.76-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.76 1.06a9.2 9.2 0 0 1 2.5-.35c.86 0 1.72.12 2.5.35 1.92-1.34 2.76-1.06 2.76-1.06.54 1.4.2 2.44.1 2.7.64.72 1.02 1.64 1.02 2.76 0 3.93-2.34 4.8-4.58 5.06.38.34.72 1 .72 2.02v2.98c0 .26.18.58.68.48 3.98-1.34 6.84-5.16 6.84-9.66C22 6.58 17.52 2 12 2z"
        />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h3.96V21H3zM9.16 8.98H13v1.64h.06c.54-1.02 1.86-2.1 3.82-2.1 4.08 0 4.84 2.72 4.84 6.26V21h-3.96v-5.54c0-1.32-.02-3-1.84-3-1.86 0-2.14 1.48-2.14 2.9V21H9.16z"
        />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 5.2 8-5.2V7H4zm16 10V9.6l-7.4 4.8a1 1 0 0 1-1.2 0L4 9.6V17h16z"
        />
      </svg>
    );
  }
  if (name === "server") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm2-6h2v2H6V7zm0 8h2v2H6v-2z"
        />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2l2.4 5.4L20 10l-5.6 2.6L12 18l-2.4-5.4L4 10l5.6-2.6L12 2z"
        />
      </svg>
    );
  }
  if (name === "brain") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9.2 4a3.2 3.2 0 0 0-3.1 2.4A3 3 0 0 0 4 9.2a3 3 0 0 0 1.6 2.6A3.6 3.6 0 0 0 9.2 16H10v-2H9.2a1.6 1.6 0 0 1 0-3.2h.8V8.8H9.2a1.6 1.6 0 1 1 0-3.2h.8V4h-.8zm5.6 0H14v1.6h.8a1.6 1.6 0 0 1 0 3.2H14v2h.8a1.6 1.6 0 0 1 0 3.2H14v2h.8a3.6 3.6 0 0 0 3.6-4.2A3 3 0 0 0 20 9.2a3 3 0 0 0-2.1-2.8A3.2 3.2 0 0 0 14.8 4z"
        />
      </svg>
    );
  }
  if (name === "device") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 18a1.2 1.2 0 1 0 0-2.4A1.2 1.2 0 0 0 12 20z"
        />
      </svg>
    );
  }
  if (name === "stack") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 6.5L12 2l8 4.5-8 4.5-8-4.5zm0 5.5l8 4.5 8-4.5v3l-8 4.5-8-4.5v-3zm0 6l8 4.5 8-4.5v3l-8 4.5-8-4.5v-3z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="6" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">SK</span>
            <span className="brand-text">Sujith Kulal</span>
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">
            Hire me
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-content reveal" style={{ "--delay": "0s" } as CSSProperties}>
              <p className="eyebrow">Portfolio</p>
              <h1>
                Full Stack Developer focused on clean, practical, and intelligent
                software.
              </h1>
              <p className="lede">
                I am a Computer Science graduate and aspiring Full Stack Developer
                with hands-on experience in Java, Spring Boot, and React. I build
                real-world web and NLP systems with a focus on clarity, usability,
                and impact.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View Projects
                </a>
                <a className="button ghost" href="#contact">
                  Contact
                </a>
              </div>
              <div className="socials">
                {socials.map((social) => (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.title}
                  >
                    <Icon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-card reveal" style={{ "--delay": "0.1s" } as CSSProperties}>
              <div className="avatar">
                <img
                  src={`${basePath}/profile.png`}
                  alt="Portrait of Sujith Kulal"
                  width={160}
                  height={160}
                  className="avatar-image"
                />
              </div>
              <div>
                <h2>Sujith Kulal</h2>
                <p>Full Stack Developer | Java | React | NLP</p>
              </div>
              <div className="stats">
                <div>
                  <span className="stat-value">7+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div>
                  <span className="stat-value">3+</span>
                  <span className="stat-label">Domains</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head reveal" style={{ "--delay": "0s" } as CSSProperties}>
              <p className="eyebrow">About</p>
              <h2>Building useful products with thoughtful engineering</h2>
            </div>
            <div className="about-grid">
              <p className="card reveal" style={{ "--delay": "0.1s" } as CSSProperties}>
                I enjoy solving practical problems using technology and have a
                strong interest in AI and backend development. I am eager to
                learn, grow, and contribute to innovative software solutions in a
                dynamic environment.
              </p>
              <div className="card highlight reveal" style={{ "--delay": "0.2s" } as CSSProperties}>
                <h3>Focus Areas</h3>
                <ul>
                  <li>Backend systems with Spring Boot</li>
                  <li>Interactive web apps with React</li>
                  <li>Natural language and automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head reveal" style={{ "--delay": "0s" } as CSSProperties}>
              <p className="eyebrow">Projects</p>
              <h2>Selected work with real-world impact</h2>
            </div>
            <div className="grid">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="card project-card reveal"
                  style={{ "--delay": `${0.1 + index * 0.04}s` } as CSSProperties}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View repository
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head reveal" style={{ "--delay": "0s" } as CSSProperties}>
              <p className="eyebrow">Skills</p>
              <h2>Tools and technologies I use</h2>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="card skill-card reveal"
                  style={{ "--delay": `${0.1 + index * 0.05}s` } as CSSProperties}
                >
                  <span className="skill-icon">
                    <Icon name={skill.icon} />
                  </span>
                  <span>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-card reveal" style={{ "--delay": "0s" } as CSSProperties}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Lets build something meaningful</h2>
              <p>
                Open to full stack and backend roles, internships, and
                collaborative projects.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:sujithkulal909@gmail.com">
                Email me
              </a>
              <a className="button ghost" href="https://github.com/Sujith-Kulal" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                className="button ghost"
                href="https://www.linkedin.com/in/sujith-kulal-09a888322/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span>Designed and built by Sujith Kulal.</span>
          <span>Powered by Next.js</span>
        </div>
      </footer>
    </div>
  );
}
