import "./about.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__bento container">
        {/* Main Bio Card */}
        <div className="about__bento-card about__bento-bio">
          <div className="about__status">
            <span className="about__status-dot animate-pulse"></span>
            <span className="about__status-text">Available for projects</span>
          </div>
          <h3 className="about__bento-title">Who I Am</h3>
          <p className="about__description">
            I’m a Frontend Developer skilled in building clean, responsive,
            and user-friendly websites. I specialize in turning complex
            designs into smooth, interactive web experiences. Eager to solve
            problems, learn new tech, and push visual boundaries.
          </p>
          <div className="about__buttons">
            <a
              download=""
              href="/assets/Mathan-resume.pdf"
              className="button button--flex"
            >
              Download CV<i className="fas fa-download button__icon"></i>
            </a>
          </div>
        </div>

        {/* Experience Card */}
        <div className="about__bento-card about__bento-exp">
          <div className="about__bento-icon">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className="about__bento-value">1.5</div>
          <div className="about__bento-label">Years Experience</div>
          <div className="about__bento-footer">Building interactive apps</div>
        </div>

        {/* Projects Card */}
        <div className="about__bento-card about__bento-projects">
          <div className="about__bento-icon">
            <i className="fa-solid fa-folder-open"></i>
          </div>
          <div className="about__bento-value">09+</div>
          <div className="about__bento-label">Projects Completed</div>
          <div className="about__bento-footer">Websites & Extensions</div>
        </div>

        {/* Education Card */}
        <div className="about__bento-card about__bento-edu">
          <div className="about__bento-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className="about__bento-value">8.50</div>
          <div className="about__bento-label">Aggregate CGPA</div>
          <div className="about__bento-footer">College journeys</div>
        </div>

        {/* Location Card */}
        <div className="about__bento-card about__bento-location">
          <div className="about__bento-icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="about__bento-value">Coimbatore</div>
          <div className="about__bento-label">Tamil Nadu, India</div>
          <div className="about__bento-footer">Ready to work</div>
        </div>

        {/* Focus Card */}
        <div className="about__bento-card about__bento-focus">
          <div className="about__bento-icon">
            <i className="fa-solid fa-bullseye"></i>
          </div>
          <div className="about__bento-value">React</div>
          <div className="about__bento-label">Current Focus</div>
          <div className="about__bento-footer">Modern CSS & JS</div>
        </div>
      </div>
    </section>
  );
}
