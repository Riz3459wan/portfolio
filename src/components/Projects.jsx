import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FITNESS MANAGEMENT SYSTEM",
      category: "Full Stack",
      description:
        "Complete fitness platform with workout plans, nutrition tracking, and progress monitoring",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      technologies: ["React", "Spring Boot", "MySQL", "JWT"],
      color: "#64ffda",
      features: [
        "Workout Planning",
        "Nutrition Tracking",
        "Progress Analytics",
        "User Authentication",
      ],
    },
    {
      id: 2,
      title: "E-COMMERCE PLATFORM",
      category: "Full Stack",
      description:
        "Scalable e-commerce solution with real-time inventory and payment integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "Redis"],
      color: "#ff6b6b",
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Gateway",
        "Order Tracking",
      ],
    },
    {
      id: 3,
      title: "TASK COLLABORATION SUITE",
      category: "Enterprise",
      description:
        "Team collaboration tool with real-time updates and project management features",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["React", "Java", "Spring Cloud", "MongoDB", "WebSocket"],
      color: "#ffb86b",
      features: [
        "Task Assignment",
        "Real-time Chat",
        "File Sharing",
        "Analytics Dashboard",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="section-number">03.</span> PROJECTS
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <motion.button
                    className="view-project"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Project →
                  </motion.button>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: `${selectedProject.color}20`,
                        color: selectedProject.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.features && (
                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span
                          className="feature-bullet"
                          style={{ color: selectedProject.color }}
                        >
                          →
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <motion.button
                className="modal-action-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: selectedProject.color }}
              >
                View Live Project
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
