import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: "3+", label: "Years Experience", icon: "⏳" },
    { value: "50+", label: "Projects Completed", icon: "🚀" },
    { value: "30+", label: "Happy Clients", icon: "🤝" },
    { value: "10+", label: "Technologies", icon: "⚡" },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Senior Developer",
      company: "Creative Studio",
      description: "Leading innovative web experiences",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Tech Innovators",
      description: "Built scalable applications",
    },
    {
      year: "2022",
      title: "Frontend Specialist",
      company: "Digital Agency",
      description: "Created responsive interfaces",
    },
    {
      year: "2022",
      title: "Started Journey",
      company: "Self Taught",
      description: "Began coding adventure",
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="section-number">01.</span> ABOUT ME
          <span className="title-line"></span>
        </h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>
              I craft digital <span className="gradient-text">experiences</span>{" "}
              that matter
            </h3>
            <p>
              With over 3 years of experience in web development, I specialize
              in creating immersive, performant, and user-centric applications.
              My approach combines technical excellence with creative
              problem-solving.
            </p>
            <p>
              I believe in writing clean, maintainable code while pushing the
              boundaries of what's possible on the web. Every project is an
              opportunity to innovate and create something extraordinary.
            </p>

            <motion.div className="signature" whileHover={{ scale: 1.1 }}>
              <span className="signature-text">Creative Developer</span>
              <div className="signature-line"></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-title">Journey So Far</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
