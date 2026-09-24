import "./index.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Chandravathi</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="welcome">✨ WELCOME TO MY PORTFOLIO ✨</p>

          <h1>
            Hi, I'm <span>Chandravathi</span> 👋
          </h1>

          <h2>Data Analyst | Aspiring Data Science Student</h2>

          <p className="hero-text">
            I analyze data, discover meaningful insights and build
            data-driven solutions using modern analytical tools.
          </p>

          <a href="#projects" className="button">
            Explore My Work 🚀
          </a>

        </div>

        <div className="floating-shape shape-one">✦</div>
        <div className="floating-shape shape-two">✦</div>
        <div className="floating-shape shape-three">✦</div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">

        <p className="small-title">WHO I AM</p>

        <h2>About Me</h2>

        <div className="about-card">
          <div className="about-icon">👩‍💻</div>

          <div>
            <p>
              Hi! I'm Chandravathi, an aspiring Data Science student
              and passionate Data Analyst interested in transforming
              data into meaningful insights.
            </p>

            <p>
              I enjoy working with data, exploring patterns, creating
              visualizations and learning new tools and technologies
              to solve real-world problems.
            </p>
          </div>
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <p className="small-title">MY EXPERTISE</p>

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card python-card">
            <div className="skill-emoji">🐍</div>
            <h3>Python</h3>
            <p>Data Analysis & Programming</p>
          </div>

          <div className="skill-card sql-card">
            <div className="skill-emoji">🗄️</div>
            <h3>SQL</h3>
            <p>Database & Data Queries</p>
          </div>

          <div className="skill-card excel-card">
            <div className="skill-emoji">📊</div>
            <h3>Excel</h3>
            <p>Data Cleaning & Analysis</p>
          </div>

          <div className="skill-card powerbi-card">
            <div className="skill-emoji">📈</div>
            <h3>Power BI</h3>
            <p>Interactive Dashboards</p>
          </div>

          <div className="skill-card web-card">
            <div className="skill-emoji">🌐</div>
            <h3>HTML & CSS</h3>
            <p>Responsive Web Design</p>
          </div>

          <div className="skill-card js-card">
            <div className="skill-emoji">⚡</div>
            <h3>JavaScript</h3>
            <p>Interactive Web Development</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">

        <p className="small-title">MY WORK</p>

        <h2>Featured Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <div className="project-top">
              <div className="project-icon">📧</div>
              <span>01</span>
            </div>

            <h3>Spam Detection Email</h3>

            <p>
              An intelligent email spam detection project designed
              to identify unwanted and suspicious messages using
              data-driven techniques.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Science</span>
            </div>

            <button>View Project →</button>
          </div>

          <div className="project-card">
            <div className="project-top">
              <div className="project-icon">💻</div>
              <span>02</span>
            </div>

            <h3>Personal Portfolio</h3>

            <p>
              A modern responsive portfolio website created to
              showcase my skills, projects, achievements and
              professional journey.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <button>View Project →</button>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <p className="small-title">GET IN TOUCH</p>

        <h2>Let's Connect ✨</h2>

        <p className="contact-text">
          I'm open to opportunities, collaborations and interesting
          data-driven projects.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="button contact-button"
        >
          Send Me an Email 📩
        </a>
        <div className="social-links">

  <a
    href="https://www.linkedin.com/in/chandravathi-pepakayala-36a345376"
    target="_blank"
    rel="noreferrer"
  >
    💼 LinkedIn
  </a>

  <a
    href="https://github.com/chandupepakayala87"
    target="_blank"
    rel="noreferrer"
  >
    🐙 GitHub
  </a>

</div>

      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Chandravathi • Built with React ❤️</p>
      </footer>

    </div>
  );
}

export default App;