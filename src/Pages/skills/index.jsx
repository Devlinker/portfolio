import "./skills.css";

const skillsData = [
  { name: "HTML5", icon: "fa-brands fa-html5", pct: "90%", pillClass: "html-pill", category: "frontend" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", pct: "85%", pillClass: "css-pill", category: "frontend" },
  { name: "Sass", icon: "fa-brands fa-sass", pct: "75%", pillClass: "sass-pill", category: "frontend" },
  { name: "Tailwind", icon: "fa-solid fa-wind", pct: "80%", pillClass: "tailwind-pill", category: "frontend" },
  { name: "JavaScript", icon: "fa-brands fa-js", pct: "85%", pillClass: "js-pill", category: "frontend" },
  { name: "React.js", icon: "fa-brands fa-react", pct: "80%", pillClass: "react-pill", category: "frontend" },
  { name: "Redux", icon: "fa-solid fa-atom", pct: "70%", pillClass: "redux-pill", category: "frontend" },
  { name: "PHP", icon: "fa-brands fa-php", pct: "75%", pillClass: "php-pill", category: "backend" },
  { name: "Laravel", icon: "fa-brands fa-laravel", pct: "75%", pillClass: "laravel-pill", category: "backend" },
  { name: "Git", icon: "fa-brands fa-git-alt", pct: "85%", pillClass: "git-pill", category: "backend" },
  { name: "GitHub", icon: "fa-brands fa-github", pct: "85%", pillClass: "github-pill", category: "backend" },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container">
        <div className="skills__pills">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`skills__pill ${skill.pillClass}`}
              data-category={skill.category}
            >
              <i className={`${skill.icon} skills__pill-icon`}></i>
              <span className="skills__pill-name">{skill.name}</span>
              <span className="skills__pill-pct">{skill.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
