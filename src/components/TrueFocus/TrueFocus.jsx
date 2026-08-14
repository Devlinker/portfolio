import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.css";

export default function TrueFocus({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "var(--first-color, #5227FF)",
  glowColor = "hsla(var(--hue-color, 240), 69%, 61%, 0.4)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
}) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const updateFocusRect = useCallback(() => {
    if (
      currentIndex === null ||
      currentIndex === -1 ||
      !wordRefs.current[currentIndex] ||
      !containerRef.current
    ) {
      return;
    }

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  // Auto cycling when not manual mode and not hovering
  useEffect(() => {
    if (manualMode || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, isHovered, animationDuration, pauseBetweenAnimations, words.length]);

  // Measure and align focus frame
  useEffect(() => {
    // Run immediately and in next frame to guarantee refs are measured
    updateFocusRect();
    const rafId = requestAnimationFrame(updateFocusRect);
    const timeoutId = setTimeout(updateFocusRect, 50);

    const handleResize = () => {
      updateFocusRect();
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateFocusRect();
      });
      resizeObserver.observe(containerRef.current);
    }

    if (document.fonts) {
      document.fonts.ready.then(updateFocusRect);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [updateFocusRect, sentence]);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={`focus-container ${className}`}
      style={{
        "--border-color": borderColor,
        "--glow-color": glowColor,
      }}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, index) => {
        const isFocused = currentIndex === index;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={`focus-word ${isFocused ? "active" : ""}`}
            style={{
              filter: isFocused ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex !== null && currentIndex !== -1 && focusRect.width > 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
}
