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
      <img className="certification-image" src={certhtml} alt="" />
      <img className="certification-image" src={certcss} alt="" />
      <img className="certification-image" src={certjs} alt="" />
      <img className="certification-image" src={certrd} alt="" />
    </div>
  );

  const udemy = (
    <div>
      <div>
        <p>
          Activities and societies: Intensive course covering modern web
          development practice on front-end.
        </p>
      </div>
      <img className="certification-image" src={certudemy} alt="" />
      <img className="certification-image" src={certga} alt="" />
      <img className="certification-image" src={certgtm} alt="" />
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
