import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h4 className="footer__title">Mathan</h4>
            <span className="footer__subtitle">Front End Development</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#qualification" className="footer__link">Qualification</a>
            </li>
            <li>
              <a href="#skills" className="footer__link">Skills</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact-Me</a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/madhann._____/"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://github.com/Devlinker"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Mathan. All right reserved</p>
      </div>
    </footer>
  );
}
