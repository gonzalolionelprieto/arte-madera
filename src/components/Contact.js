import React from "react";
import Map from "./Map";

export default function Contact() {
  return (
    <div
      className="container d-flex flex-column justify-content-center text-center"
      id="Contacto"
    >
      <div className="col-12 d-flex  justify-content-center pt-5">
        <img
          src="https://i.postimg.cc/qvHdb8yH/carpintero.png"
          alt="19"
          border="0"
        ></img>
      </div>
      <h1 className="text-center mx-auto   text-uppercase">Contactanos</h1>
      <div className="col-12">
        <h4 className="text-center fw-bold mt-5">Direccion</h4>
        <p>Catamarca 2782, Quilmes</p>
        <Map />
        <br />
      </div>
      <div className="col-12 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-4 my-3  ">
          <h4 className="text-center fw-bold ">MAIL</h4>
          <p className="text-center">
            <strong>angelantonioperey@gmail.com</strong>{" "}
          </p>
        </div>
        <div className="col-12 col-lg-4 my-3   ">
          <h4 className="text-center fw-bold ">TELEFONOS</h4>
          <div className="col-8 d-flex justify-content-center align-items-center mx-auto">
            <a
              className="nav-link"
              href="tel:1158158883"
              target="_blank"
              rel="noreferrer"
            >
              <strong>
                <p className=" text-dark text-uppercase"> 1158158883 </p>
              </strong>
            </a>

            <a
              className="nav-link"
              href="tel:1157475059"
              target="_blank"
              rel="noreferrer"
            >
              <strong>
                <p className=" text-dark text-uppercase"> 1157475059 </p>
              </strong>
            </a>

            <a
              className="nav-link"
              href="tel:1153777159"
              target="_blank"
              rel="noreferrer"
            >
              <strong>
                <p className=" text-dark text-uppercase"> 1153777159 </p>
              </strong>
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-4 my-5 my-md-3 ">
          <h4 className="text-center fw-bold ">HORARIOS</h4>
          <div className="col-12 mx-auto p-0">
            <p>
              Lunes - Viernes: <strong>08:00 hs - 19:00 hs</strong>
              <br />
              Sabados: <strong>08:00 hs - 15:00 hs</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
