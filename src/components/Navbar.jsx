import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (item) => {
    setActive(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = ["home", "about", "projects", "skills", "contact"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-brand">
        <motion.div
          className="logo"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          ✦
        </motion.div>
        <span>RIZWAN ANSARI</span>
      </div>

      <div className="nav-links desktop-nav">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            className={active === item ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActive(item);
              scrollToSection(item);
            }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            {active === item && (
              <motion.div
                className="active-indicator"
                layoutId="activeIndicator"
              />
            )}
          </motion.a>
        ))}
      </div>

      <motion.button
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="mobile-nav-header">
                <div className="mobile-logo">✦</div>
                <span>Menu</span>
              </div>
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={active === item ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                    scrollToSection(item);
                  }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="mobile-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <motion.span
                    className="mobile-nav-arrow"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}

              <div className="mobile-nav-footer">
                <p>Let's work together</p>
                <motion.button
                  className="mobile-contact-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleLinkClick("contact");
                    scrollToSection("contact");
                  }}
                >
                  Get in touch
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
