import React from 'react';
import '../Styles/Project.css';
import eecommerceImg from "../images/eesouq.png";
import Quiz from "../images/Quiz_app.png";
import Todo from "../images/Todo.png";


const projectData = [
  {
    title: 'E-commerce Website',
    img: eecommerceImg,
    desc: 'A Online Electronics Delivery Website',
    link:"https://eesouq.com",
  },
  {
    title: 'Quiz Game',
    img: Quiz,
    desc: 'A Quiz Game with me where you can justify your friendship level. ',
    link:"https://quiz-app-1-mo17.onrender.com/",
  },
  {
    title: 'Todo List Application',
    img: Todo,
    desc: 'By this Web App you can add , Delete ,Edit Your Regular Task List ',
    link:"https://todo-app-frontend-zz8u.onrender.com",
  },
];

function Projects() {
  return (
    <div id='projects' className="projects-container m-4">
      <h3 className="text-center mb-3">Projects</h3>
      <hr className="featurette-divider mb-4" />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project, index) => (
          <div className="col" key={index}>
            <div className="project-card position-relative overflow-hidden">
              <img src={project.img} className="card-img" alt={project.title} />
              <div className="overlay d-flex flex-column justify-content-between">
                <div className="p-3">
                  <h5 className="card-title text-white">{project.title}</h5>
                  <p className="card-text text-white">{project.desc}</p>
                </div>
                <div className="text-center mb-3">
                  <button className="btn btn-primary view-btn"  onClick={() => window.open(project.link, '_blank')}>View</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
