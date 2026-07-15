import { useEffect, useRef } from "react";
import "./customcursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = target.closest(
        "a, button, input, textarea, select, .change-theme, .portfolio__scroll, .about__bento-card, .skills__pill, .services__button"
      );
      
      if (isInteractive) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot"></div>
      <div ref={outlineRef} className="custom-cursor-outline"></div>
    </>
  );
}
