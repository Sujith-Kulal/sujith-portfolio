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
];

const skills = [
  { title: "Java", level: 88 },
  { title: "Spring Boot", level: 82 },
  { title: "React", level: 78 },
  { title: "Node.js", level: 72 },
  { title: "NLP", level: 76 },
  { title: "Android", level: 68 },
];

const testimonials = [
  {
    quote:
      "Sujith brings a practical mindset and ships clean solutions with strong attention to detail.",
    name: "Project Mentor",
    role: "Full Stack Engineer",
  },
  {
    quote:
      "He balances thoughtful backend design with user-focused front-end execution.",
    name: "Team Lead",
    role: "Software Architect",
  },
];

const stats = [
  { value: "7+", label: "Projects" },
  { value: "3+", label: "Domains" },
  { value: "2", label: "Major NLP Systems" },
  { value: "2026", label: "Graduate" },
];

const socials = [
  {
    title: "GitHub",
    link: "https://github.com/Sujith-Kulal",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sujith-kulal-09a888322/",
  },
  {
    title: "Email",
    link: "mailto:sujithkulal909@gmail.com",
  },
];

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/sujith-portfolio" : "");

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            Sujith Kulal
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">
            Hire me
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-shape shape-one" />
          <div className="hero-shape shape-two" />
          <div className="container hero-content">
            <p className="eyebrow">Developer Portfolio</p>
            <h1>
              Full Stack Developer crafting modern, high-impact software for the
              real world.
            </h1>
            <p className="lede">
              I am a Computer Science graduate specializing in Java, Spring Boot,
              React, and NLP systems. I build scalable products with clean
              architecture, strong usability, and measurable impact.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">
                Explore Work
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
                >
                  {social.title}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-ring" />
            <img
              src={`${basePath}/profile.png`}
              alt="Portrait of Sujith Kulal"
              className="hero-image"
            />
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">About</p>
              <h2>Focused on backend strength and polished user experiences.</h2>
              <p className="lede">
                I enjoy solving practical problems using technology and have a
                strong interest in AI, NLP, and backend development. I am eager
                to learn, grow, and contribute to innovative software solutions
                in dynamic environments.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.title} className="skill-row">
                  <div className="skill-label">
                    <span>{skill.title}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <span
                      className="skill-fill"
                      style={{ "--level": `${skill.level}%` } as CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Portfolio</p>
              <h2>Selected projects with measurable outcomes.</h2>
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

        <section id="testimonials" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Testimonials</p>
              <h2>Trusted by mentors and teammates.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="testimonial-card">
                  <p className="quote">“{testimonial.quote}”</p>
                  <div className="testimonial-meta">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.role}</span>
                  </div>
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
          <span>Based in India. Available worldwide.</span>
        </div>
      </footer>
    </div>
  );
}
