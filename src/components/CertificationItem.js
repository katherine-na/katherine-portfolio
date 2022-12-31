import React from "react";
import Certifications from "./Certifications";

const certificationImage = require.context("../assets/certification", true);

const CertificationItem = () => {
  return (
    <div className="certification-wrap">
      <Certifications
        certLink="https://www.coursera.org/account/accomplishments/verify/NP4AMAFV3LXE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        certImage={certificationImage(`./cert-html.png`)}
      />
      <Certifications
        certLink="https://www.coursera.org/account/accomplishments/verify/LAJKVHPMLVFY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        certImage={certificationImage(`./cert-css.png`)}
      />
      <Certifications
        certLink="https://www.coursera.org/account/accomplishments/verify/M5VPPRTG3SRK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        certImage={certificationImage(`./cert-js.png`)}
      />
      <Certifications
        certLink="https://www.coursera.org/account/accomplishments/verify/HQEN6SLXFFWE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        certImage={certificationImage(`./cert-rd.png`)}
      />
    </div>
  );
};

export default CertificationItem;
