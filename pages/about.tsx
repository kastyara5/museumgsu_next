import React from "react";
import Image from "next/image";

import logo from "@/static/img/logo.png";

const About = () => (
  <div className="row">
    <div className="col-lg-2 col-md-2">
      <div className="padded-div">
        <Image alt={String(logo)} src={logo} className="img-fluid" />
      </div>
    </div>
    <div className="col-lg-10 col-md-10">
      <div className="padded-div">
        <h1>Музей находится:</h1>
        <p>
          Учреждение образования &quot;Гомельский государственный университет имени
          Франциска Скорины&quot; 246019, г. Гомель, ул.Советская, 104, аудитория
          2-30
        </p>
      </div>
    </div>
  </div>
);

export default About;
