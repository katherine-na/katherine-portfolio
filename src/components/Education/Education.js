// import { React, useState } from "react";
// import CertificationItem from "../Certifications/CertificationItem";

// const Education = () => {
//   const schoolImages = [
//     require("../../assets/school/colbach.png"),
//     require("../../assets/school/coursera.png"),
//     require("../../assets/school/udemy.png"),
//   ];
//   const [opacidad, setOpacidad] = useState(0.5);

//   const handleClick = () => {
//     setOpacidad(1);
//   };

//   return (
//     <section id="education">
//       <div className="education-images">
//         {schoolImages.map((image, index) => (
//           <img
//             className="school-img"
//             onClick={handleClick}
//             key={index}
//             src={image}
//             alt={`Image ${index}`}
//           />
//         ))}
//         {opacidad === 1 && <CertificationItem />}
//       </div>
//     </section>
//   );
// };

// export default Education;
import { React, useState } from "react";
import CertificationItem from "../Certifications/CertificationItem";

const Education = () => {
  const schoolImages = [
    require("../../assets/school/colbach.png"),
    require("../../assets/school/coursera.png"),
    require("../../assets/school/udemy.png"),
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section id="education">
      <div className="education-images">
        {schoolImages.map((image, index) => (
          <img
            className={`school-img ${selectedImageIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
            key={index}
            src={image}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <CertificationItem image={schoolImages[selectedImageIndex]} />
      )}
    </section>
  );
};

export default Education;
