import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace these with your EmailJS credentials
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');

      // Simulate sending
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "ansari.rizwan3459@gmail.com",
      link: "ansari.rizwan3459@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 7717778105",
      link: "tel:+91 7717778105",
    },
    { icon: "📍", label: "Location", value: "Bangalore Karnataka", link: "#" },
    {
      icon: "💼",
      label: "Available",
      value: "Freelance / Full-time",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/yourusername",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      url: "https://linkedin.com/in/yourusername",
      color: "#0077B5",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/yourusername",
      color: "#1DA1F2",
    },
    {
      name: "LeetCode",
      icon: "⚡",
      url: "https://leetcode.com/yourusername",
      color: "#FFA116",
    },
    {
      name: "Stack Overflow",
      icon: "📚",
      url: "https://stackoverflow.com/users/yourusername",
      color: "#F48024",
    },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">04.</span> GET IN TOUCH
            <span className="title-line"></span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-grid">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="info-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-details">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                  <div className="info-glow"></div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    style={{ "--social-color": social.color }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="availability"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="availability-indicator">
                <span className="pulse-dot"></span>
                <span>Available for work</span>
              </div>
              <p>Currently accepting new projects and opportunities.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-header">
                <h3>Send a Message</h3>
                <div className="form-decoration"></div>
              </div>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name Please"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <div className="input-wrapper">
                  <span className="input-icon">💬</span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={status === "sending"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === "idle" && "Send Message →"}
                {status === "sending" && "Sending... ✈️"}
                {status === "success" && "Message Sent! 🎉"}
                {status === "error" && "Try Again 🔄"}
              </motion.button>

              {status === "success" && (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  className="form-error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <div className="contact-background">
        <div className="floating-shapes">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                background: `radial-gradient(circle, ${i % 2 ? "#64ffda" : "#ff6b6b"}20, transparent)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
