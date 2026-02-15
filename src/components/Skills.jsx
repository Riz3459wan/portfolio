import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "HTML5/CSS3", level: 95, color: "#E34F26" },
        { name: "Redux", level: 85, color: "#764ABC" },
        { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
      ],
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Java", level: 90, color: "#007396" },
        { name: "Spring Boot", level: 85, color: "#6DB33F" },
        { name: "Spring Security", level: 80, color: "#6DB33F" },
        { name: "Hibernate", level: 80, color: "#59666C" },
        { name: "REST APIs", level: 90, color: "#FF6C37" },
        { name: "Microservices", level: 75, color: "#2496ED" },
      ],
    },
    {
      name: "Database & Cloud",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 85, color: "#4479A1" },
        { name: "PostgreSQL", level: 80, color: "#336791" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "Redis", level: 70, color: "#DC382D" },
        { name: "AWS", level: 70, color: "#FF9900" },
        { name: "Docker", level: 75, color: "#2496ED" },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "IntelliJ IDEA", icon: "🟨" },
    { name: "Postman", icon: "📮" },
    { name: "Git", icon: "📦" },
    { name: "Maven", icon: "📊" },
    { name: "JUnit", icon: "✅" },
    { name: "Jenkins", icon: "🔧" },
    { name: "Jira", icon: "📊" },
    { name: "Linux", icon: "🐧" },
    { name: "Kafka", icon: "⚡" },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">02.</span> SKILLS & EXPERTISE
            <span className="title-line"></span>
          </h2>
        </motion.div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.name}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-info">
                        <span
                          className="skill-name"
                          style={{ color: skill.color }}
                        >
                          {skill.name}
                        </span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                            boxShadow: `0 0 10px ${skill.color}80`,
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="tools-section"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="tools-title">Development Tools</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="tool-item"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="tool-icon">{tool.icon}</div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-quote"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="quote-content">
              <span className="quote-icon">✦</span>
              <p>
                Java powers the backend, React brings it to life. Full stack
                development is my craft.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
