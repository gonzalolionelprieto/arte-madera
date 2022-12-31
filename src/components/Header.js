import React from "react";

export default function Header({a}) {
  return (
    <div className="header-container row d-flex    mx-auto ">
      <div className="header d-flex flex-column justify-content-center align-items-center col-6">
        <div className="centralized-box-logo">
          <div className="logo-container-box d-flex flex-column justify-content-center align-items-center   col-12">
            <h1 className="text-uppercase text-light text-logo animate__animated animate__backInLeft">
              AM
            </h1>

            <div className=" container-sub-text-logo col-10 mx-auto text-start">
              <h2 className=" text-uppercase text-light fw-light  mx-auto animate__animated animate__slideInLeft">
                &nbsp;  Arte &nbsp;&nbsp; Mad
              </h2>
              
            </div>

            <h3 className="text-uppercase text-light fw-light animate__animated animate__fadeInUp animate__delay-1s ">
              Muebles a medida
            </h3>
            <div className="d-flex justify-content-center align-items-center  mx-auto">
              <a href="https://api.whatsapp.com/send?phone=+5491157475059&text=Hola, vi tu web y queria hacerte una consulta!" target="blank" >
                <button
                  type="button "
                  className="btn btn-outline-light text-uppercase py-3 px-5  my-5 animate__animated animate__fadeInUp animate__delay-2s"
                >
                  <h5 className="fw-light"> Obtener Presupuesto</h5>
                </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>

      <div className="header-bg col-6"></div>
    </div>
  );
}
