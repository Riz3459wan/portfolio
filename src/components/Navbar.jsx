import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "projects", "skills", "contact"];

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

      <div className="nav-links">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
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

      <motion.button className="nav-toggle" whileTap={{ scale: 0.9 }}>
        <span></span>
        <span></span>
        <span></span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
