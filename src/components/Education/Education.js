import { React, useState } from "react";
import schoolcolbach from "../../assets/school/colbach.png";
import schoolcoursera from "../../assets/school/coursera.png";
import schooludemy from "../../assets/school/udemy.png";
import certhtml from "../../assets/certification/cert-html.png";
import certcss from "../../assets/certification/cert-css.png";
import certjs from "../../assets/certification/cert-js.png";
import certrd from "../../assets/certification/cert-rd.png";
import certudemy from "../../assets/certification/cert-udemy.jpeg";
import certga from "../../assets/certification/GACERTF.jpg";
import certgtm from "../../assets/certification/GTMCERT.jpg";
import certcolbach from "../../assets/certification/certcolbach.png";
import certciberse from "../../assets/certification/cert-ciberse.png";
import vtex from "../../assets/certification/vtex.png"

const Education = () => {
  const [cert, setCert] = useState(2);

  const showCert = (imgs) => {
    setCert(imgs);
  };

  const colBach = (
    <div className="colbach-text">
      <img className="certification-colbach" src={certcolbach} />
    </div>
  );

  const coursera = (
    <div className="cert-coursera-wrap">
      <div>
        <img className="certification-image" src={certhtml} alt="" />
        <p className="cert-text">Introduction HTML5</p>
      </div>
      <div>
        <img className="certification-image" src={certcss} alt="" />
        <p className="cert-text">Introduction CSS3</p>
      </div>
      <div>
        <img className="certification-image" src={certjs} alt="" />
        <p className="cert-text">Interactivity Javascript</p>
      </div>
      <div>
        <img className="certification-image" src={certrd} alt="" />
        <p className="cert-text">Responsive Design</p>
      </div>
    </div>
  );

  const udemy = (
    <div className="cert-coursera-wrap">
      <div>
        <img className="certification-image" src={certudemy} alt="" />
        <p className="cert-text">ReactJs</p>
      </div>
      <div>
        <img className="certification-image" src={certga} alt="" />
        <p className="cert-text">Google Analytics</p>
      </div>
      <div>
        <img className="certification-image" src={certgtm} alt="" />
        <p className="cert-text">Google tag mannager</p>
      </div>
      <div>
        <img className="certification-image" src={certciberse} alt="" />
        <p className="cert-text">Ciberseguridad</p>
      </div>
      <div>
        <img className="certification-image" src={vtex} alt="" />
        <p className="cert-text">VTEX</p>
      </div>
    </div>
  );

  return (
    <section>
      <div className="wrap-schools">
        <img
          className="school-img"
          src={schoolcolbach}
          alt=""
          onClick={() => showCert(1)}
          style={{opacity: cert === 1 ? 1 : 0.5}}
        />
        <img
          className="school-img"
          src={schoolcoursera}
          alt=""
          onClick={() => showCert(2)}
          style={{opacity: cert === 2 ? 1 : 0.5}}
        />
        <img
          className="school-img"
          src={schooludemy}
          alt=""
          onClick={() => showCert(3)}
          style={{opacity: cert === 3 ? 1 : 0.5}}
        />
      </div>

      {cert === 1 && colBach}
      {cert === 2 && coursera}
      {cert === 3 && udemy}
    </section>
  );
};

export default Education;
