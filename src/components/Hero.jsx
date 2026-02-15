import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={textVariants}
        >
          <span className="hero-subtitle">✦ WELCOME TO MY UNIVERSE</span>
          <h1 className="hero-title">
            CREATIVE
            <span className="gradient-text"> DEVELOPER</span>
          </h1>
          <p className="hero-description">
            I craft digital experiences that blend <br />
            <span className="highlight">innovation</span> with
            <span className="highlight"> elegance</span>
          </p>

          <div className="hero-cta">
            <motion.button
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </motion.button>
            <motion.button
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>↓</span>
        </motion.div>
      </div>

      <div className="hero-background">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
