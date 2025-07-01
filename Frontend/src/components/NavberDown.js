import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../Styles/NavberDown.css";
import img1 from "../images/selfimg2.png";

const NavberDown = () => {
  return (
    <div  className="home-container dark-theme">
      <motion.div
        className="home-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm Akash 👋</h1>
        <h2>
          <span style={{ color: "#00bfff" }}>
            <Typewriter
              words={[
                "Expert in Frontend Development 💻",
                "React Enthusiast ⚛️",
                "Medium-Level MERN Stack Developer 👨‍💻",
                "Creative Coder 🎨",
                "Problem Solver 🧠",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p>
          I'm a passionate MERN Stack Developer with experience in building modern, responsive websites using MongoDB, Express.js, React.js, Node.js. I love bringing creative ideas to life in the browser!
        </p>
        <button className="vibrant-resume-btn"   onClick={() => window.open("https://drive.google.com/file/d/1w2FJrqOSu4F9CajIJ4RM6ilsAGxwBiX-/view?usp=drive_link", '_blank')}>📄 Download Resume</button>
      </motion.div>

      <motion.div
        className="home-image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={img1} alt="Akash" />
      </motion.div>
    </div>
  );
};

export default NavberDown;
