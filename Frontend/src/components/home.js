// import React from 'react'

// function home() {
//   return (
//     <div>
//       <div id="myCarousel" className="carousel slide  mb-6" data-bs-ride="carousel">
//     <div className="carousel-indicators">
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
//     </div>
//     <div className="carousel-inner">
//       <div className="carousel-item">
//       <img src="https://cdn.pixabay.com/photo/2017/11/20/08/12/babe-2964756_1280.jpg"className="d-block img-fluid w-100" alt="..."/>
//         <div className="container">
//           <div className="carousel-caption text-start">
//             <h1>Example headline.</h1>
//             <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
//             <p><a className="btn btn-lg btn-primary" href="/">Sign up today</a></p>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-item ">
//       <img src="https://cdn.pixabay.com/photo/2015/09/09/17/16/mixer-931965_640.jpg"className="d-block img-fluid w-100" alt="..."/>
//         <div className="container">
//           <div className="carousel-caption">
//             <h1>Another example headline.</h1>
//             <p>Some representative placeholder content for the second slide of the carousel.</p>
//             <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-item active">
//       <img src="https://cdn.pixabay.com/photo/2022/07/15/18/15/burgers-7323689_640.jpg"className="d-block img-fluid w-100" alt="..."/>
//         <div className="container">
//           <div className="carousel-caption text-end">
//             <h1>One more for good measure.</h1>
//             <p>Some representative placeholder content for the third slide of this carousel.</p>
//             <p><a className="btn btn-lg btn-primary" href="/">Browse gallery</a></p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>
//   </div>

//   )
// }

// export default home;
import React, { useState } from "react";
import img1 from "../images/selfimg.jpeg";
import img2 from "../images/selfimg2.png";
import img3 from "../images/Siance family.jpeg"
import img4 from "../images/hackingimg.jpg";
const carouselData = [
  {
    title: "First Slide",
    description: "This is the first slide description.",
    image: img2,
  },
  {
    title: "Second Slide",
    description: "This is the second slide description.",
    image: img3,
  },
  {
    title: "Third Slide",
    description: "This is the third slide description.",
    image: img4,
  },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { title, description, image } = carouselData[currentIndex];

  return (
    <div style={styles.container}>
      {/* Left Text Section */}
      <div style={styles.left}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {/* Right Carousel Section */}
      <div style={styles.right}>
        
          <img src={image} alt={title} style={styles.image} />
       

        <div style={styles.buttons}>
          <button onClick={prevSlide}>⟵</button>
          <button onClick={nextSlide}>⟶</button>
        </div>
      </div>
    </div>
  );
};

// Basic Inline Styles
const styles = {
  container: {
    display: "flex",
    width: "85%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  },
  left: {
    width: "40%",
    paddingRight: "20px",
  },
  right: {
    width: "75%",
    position: "relative",
    height:"500px",
    display:"flex",
    justifyContent:"center"

  },
  image: {
    // width: "100%",
    borderRadius: "10px",
    height:"480px"
  },
  buttons: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
    padding: "0 10px",
  },
};

export default CarouselComponent;
