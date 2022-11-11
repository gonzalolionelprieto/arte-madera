import React from "react";


export default function Welcome() {
  return (
    <div  className="welcome container bg-light  my-5  d-flex justify-content-center aling-items-center" id="welcome">
      <div className="row " data-aos="fade-up">
        <div  className="col-12 col-md-6 d-flex   justify-content-center align-items-center ">
          <div className="vr"></div>
          <h1 className="col-11 fw-bold text-center lh-sm m-0 p-0 subtitulo text-uppercase">
            fabricacion & diseño <br />
            de Muebles a medida
          </h1>
          <div className="vr"></div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-3">
          <p className="col-12 col-lg-8 me-lg-auto my-auto fw-light">
            Dedicados al diseño y fabricación a medida de amoblamientos de
            cocina, placards, vestidores y muebles en general.
            <br />
            <br />
            Nuestra misión es brindarle al cliente calidad en los productos,
            atención personalizada y cumplimiento de los plazos de entrega.
          </p>
        </div>
      </div>
    </div>
  );
}
