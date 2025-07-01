import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Navber.css";
import img1 from "../images/selfimg.jpeg"; // Assuming you have an image for the logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <div className="logo">
        <span><img src={img1} style={{width:"40px",height:"40px", borderRadius:"100%"}}/></span>
        <span>Akash Shaikh</span>
        
        </div>

      <div className="desktop-links">
        {navLinks.map((link, index) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            whileHover={{ scale: 1.1, color: "#00bfff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Hamburger for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
