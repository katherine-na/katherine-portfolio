import React from "react";

const Education = ({images}) => {

const schoolImages = [require('../assets/school/colbach.png'), require('../assets/school/coursera.png'), require('../assets/school/udemy.png')]

  return(
    <section id="education">
      <div className="education-images">
        {schoolImages.map((image, index) => (
            <img className="school-img" key={index} src={image} alt={`Image ${index}`}/>
        ))}
      </div>
    </section>
  )
};

export default Education;
