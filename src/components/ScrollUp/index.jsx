import { useEffect, useState } from "react";
import "./scrollup.css";

export default function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`scrollup ${show ? "show-scroll" : ""}`}
      id="scroll-up"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
