import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar.js"; 
import Home from "./components/home.js";
import About from "./components/about.js";
import Skill from "./components/skill.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
// import Dark from "./components/brightness.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
