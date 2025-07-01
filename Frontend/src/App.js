import React from 'react'
import './App.css';
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Skill from "./components/skill.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import NavberDown from './components/NavberDown.js';
import ScrollToTop from './components/ScrollToTop.jsx';
import PopupMessage from './components/PopupMessage.jsx';
// import Dark from "./components/brightness.js";


function App() {

    return (
    <div className='m-2' style={{position:"relative"}}>
        < Navbar />
        {/* <Home /> */}
        <NavberDown />
        <About />
        {/* <Skill /> */}
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop/>
        <PopupMessage/>
        {/* <Dark/> */}
    </div>
)
}

export default App;
