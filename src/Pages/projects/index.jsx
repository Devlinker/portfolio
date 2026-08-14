import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Eye,
  Sparkles,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import "./project.css";

// Helper GitHub SVG Icon component
const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Pure Front End & UI Developer project list
const projectsData = [
  {
    id: "01",
    title: "Aether UI Design System",
    category: "UI Design System",
    status: "Live Component Kit",
    description:
      "Production-ready Frontend component library with 50+ accessible components and Framer Motion micro-interactions.",
    fullDescription:
      "A comprehensive dark-mode UI design system built with React, Tailwind CSS, and Framer Motion. Engineered with 50+ accessible components, HSL design tokens, theme switching, and Storybook documentation.",
    features: [
      "50+ Accessible React & Tailwind UI components",
      "Custom HSL CSS design tokens & theme switcher",
      "Framer Motion micro-interactions & tab sliders",
      "Responsive grid, modals, and drawer components",
    ],
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metric: "⭐ 1.5k Stars",
    image: "/assets/img/projects/dashboard.jpg",
    liveUrl: "https://example.com/demo-aether-ui",
    githubUrl: "https://github.com/Devlinker/aether-ui-library",
  },
  {
    id: "02",
    title: "LuxNova Dashboard UI",
    category: "Web Applications",
    status: "Production Live",
    description:
      "Sleek frontend dashboard interface featuring responsive grid cards, dark glassmorphism, and Recharts analytics.",
    fullDescription:
      "Built a modern frontend web application interface featuring fluid responsive grid cards, glassmorphic dark-theme UI, interactive Recharts analytics, slide-over detail panels, and custom scroll triggers.",
    features: [
      "Responsive CSS Grid & Flexbox layout",
      "Interactive analytics chart visualizers",
      "Dark glassmorphism UI with ambient glowing accents",
      "Cross-browser pixel-perfect responsiveness",
    ],
    tags: ["React", "CSS3 / SCSS", "Recharts", "Vite"],
    metric: "⚡ 99/100 Lighthouse",
    image: "/assets/img/projects/ecommerce.jpg",
    liveUrl: "https://example.com/demo-luxnova-dashboard",
    githubUrl: "https://github.com/Devlinker/luxnova-dashboard-ui",
  },
  {
    id: "03",
    title: "CyberPulse 3D Landing Page",
    category: "CSS & 3D WebGL",
    status: "Featured UI",
    description:
      "High-impact landing page with WebGL particle canvas background, Lenis smooth scroll, and 3D card tilt.",
    fullDescription:
      "Engineered an animated frontend landing page showcasing dynamic Three.js canvas particle effects, Lenis smooth scrolling, 3D card hover tilt, and sleek neon gradient typography.",
    features: [
      "Interactive Three.js particle canvas background",
      "Smooth Lenis scroll & parallax transitions",
      "3D perspective card hover tilt interactions",
      "Fully responsive mobile navigation drawer",
    ],
    tags: ["JavaScript", "Three.js", "Framer Motion", "CSS3"],
    metric: "🔥 60fps Animation",
    image: "/assets/img/projects/ai_saas.jpg",
    liveUrl: "https://example.com/demo-cyberpulse",
    githubUrl: "https://github.com/Devlinker/cyberpulse-animated-ui",
  },
  {
    id: "04",
    title: "Lumina E-Commerce UI",
    category: "React / Next.js",
    status: "v2.0 Released",
    description:
      "Modern fashion shop user interface featuring animated product modal previews, filter bar, and cart drawer.",
    fullDescription:
      "Designed and built an intuitive frontend user experience for an online fashion shop. Features slide-over cart drawers, instant live search filtering, responsive product grids, and animated tab bars.",
    features: [
      "Slide-over cart drawer & filter drawer UI",
      "Instant live search & category tab filtering",
      "Responsive product gallery modal preview",
      "Pixel-perfect mobile-first web interface",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    metric: "📱 100% Mobile First",
    image: "/assets/img/projects/dashboard.jpg",
    liveUrl: "https://example.com/demo-lumina-shop",
    githubUrl: "https://github.com/Devlinker/lumina-ecommerce-ui",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Framer Motion Scroll-Driven Horizontal Translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal slide across the cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-54%"]);

  return (
    <div ref={containerRef} className="projects__scroll-container" id="projects">
      {/* Sticky Full-Screen Viewport */}
      <div className="projects__sticky-wrapper">
        {/* Top Scroll Progress Bar */}
        <div className="projects__progress-track">
          <motion.div
            className="projects__progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* Ambient glowing blobs */}
        <div className="projects__glow projects__glow-1"></div>
        <div className="projects__glow projects__glow-2"></div>

        {/* Sticky Section Header (max-width: 1000px) */}
        <div className="projects__sticky-header">
          <div className="projects__scroll-badge">
            <span className="projects__pulse-dot"></span>
            <span>Scroll Down to Slide Projects</span>
            <ArrowDown size={13} />
          </div>
          <h2 className="section__title">Front End Projects Showcase</h2>
          <span className="section__subtitle">
            Explore my interactive UI design systems, web dashboards, and frontend animations
          </span>
        </div>

        {/* Max-Width 1000px Viewport Frame */}
        <div className="projects__viewport-1000">
          {/* Scroll-Driven Moving Cards Track */}
          <motion.div style={{ x }} className="projects__motion-track">
            {projectsData.map((project) => (
              <div key={project.id} className="sticky__card">
                {/* Card Window Mockup Header - 175px */}
                <div className="sticky__img-box">
                  <div className="sticky__window-bar">
                    <div className="sticky__window-dots">
                      <span className="sticky__dot sticky__dot-red"></span>
                      <span className="sticky__dot sticky__dot-yellow"></span>
                      <span className="sticky__dot sticky__dot-green"></span>
                    </div>
                    <span className="sticky__category-tag">{project.category}</span>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="sticky__img"
                  />

                  <div className="sticky__overlay">
                    <button
                      className="sticky__action-btn"
                      onClick={() => setSelectedProject(project)}
                      title="Quick View Details"
                    >
                      <Eye size={17} />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="sticky__action-btn"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={17} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="sticky__action-btn"
                      title="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>

                {/* Card Content Body - 225px */}
                <div className="sticky__body">
                  <div>
                    <div className="sticky__status-row">
                      <span className="sticky__status-badge">
                        <span className="status__dot"></span>
                        {project.status}
                      </span>
                      <span className="sticky__metric">{project.metric}</span>
                    </div>

                    <h3 className="sticky__title">{project.title}</h3>
                    <p className="sticky__desc">{project.description}</p>
                  </div>

                  <div>
                    <div className="sticky__tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="sticky__tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="sticky__footer">
                      <span
                        className="sticky__details-link"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details & Preview <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Interactive Detail Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal__glass-box"
              initial={{ scale: 0.88, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 35 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal__close-btn"
                onClick={() => setSelectedProject(null)}
                title="Close"
              >
                <X size={20} />
              </button>

              <div className="modal__img-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal__img"
                />
              </div>

              <h3 className="modal__title">{selectedProject.title}</h3>

              <div className="modal__tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="sticky__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="modal__desc">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              {selectedProject.features && (
                <>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "0.85rem",
                      color: "var(--title-color)",
                    }}
                  >
                    Frontend Architectural Features
                  </h4>
                  <div className="modal__features-grid">
                    {selectedProject.features.map((feat, idx) => (
                      <div key={idx} className="modal__feature-item">
                        <CheckCircle2
                          size={16}
                          style={{ color: "var(--first-color)", flexShrink: 0 }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="modal__actions">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex"
                >
                  Live Demo <ExternalLink size={16} style={{ marginLeft: "0.5rem" }} />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex button--white"
                >
                  Source Code <GithubIcon size={16} style={{ marginLeft: "0.5rem" }} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
