// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Vishal Gorule
        <span className="hero-dot">●</span>
      </motion.h1>

      <motion.h2
        className="hero-subtitle"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        AI Systems Engineer
      </motion.h2>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Building intelligent systems that{" "}
        <span>reason</span>, <span>see</span>, <span>speak</span>, and{" "}
        <span>make decisions</span>.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#projects" className="btn-primary">
          View Projects
        </a>

        <a
          href="/assets/resume/Vishal_Vilas_Gorule_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
