import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../Styles/About.css";
import aboutImg from "../images/hackingimg.jpg"; // Replace with your image

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Git", level: 80 },
  { name: "Responsive Design", level: 95 },
];

const About = () => {
  return (
    <section id="about" className="about-container">
      {/* Animated Image */}
      <motion.div
        className="about-image"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={aboutImg}
          alt="About Akash"
          whileHover={{ scale: 1.05 }}
          animate={{ rotate: [0, 2, -2, 0], transition: { repeat: Infinity, duration: 4 } }}
        />
      </motion.div>

      {/* About Text & Skills */}
      <motion.div
        className="about-text"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I'm Akash, a MERN Stack Developer passionate about building elegant and scalable interfaces using React and modern web technologies.
        </p>
        <p>
          I enjoy learning new tools, creating smooth user experiences, and collaborating on impactful projects.
        </p>

        {/* Skill Circles */}
        <h2>Skills</h2>
        <div className="skills-circles">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="circle-skill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#00bfff",
                  trailColor: "#333",
                })}
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
