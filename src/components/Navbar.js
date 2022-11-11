import React from "react";

export default function Navbar() {
  return (
    <div className="fixed-top w-100 bg-dark">
      <nav className="  mx-auto nav navbar navbar-expand-lg  navbar-dark d-flex space-around ">
        <div className=" navbar-brand top-header  bg-dark text-center col-4 me-auto mx-lg-auto">
          <img
            src="https://i.postimg.cc/FKKXZ7vj/20.png"
            alt="20"
            id="logo"
          ></img>
        </div>

        <button
          className="navbar-toggler fixed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className=" navbar-collapse collapse text-light col-12 col-md-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex justify-content-center  text-center  text-uppercase col-12">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Inicio
              </a>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link " href="#Servicios">
              Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#Galeria">
                Galeria
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link " href="#Contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 d-none d-lg-flex ">
          <a
            className="nav-link"
            href="https://api.whatsapp.com/send?phone=1157475059&text=Hola, vi tu web y queria hacerte una consulta!"
            target="_blank"
            rel="noreferrer"
          >
            <p className="m-3 text-light text-uppercase">obtener presupuesto</p>
          </a>

          <a
            className="nav-link"
            href="tel:+541157475059"
            target="_blank"
            rel="noreferrer"
          >
             <p className="m-3 text-light text-uppercase">Llamar</p>
          </a>

          <a
            className="nav-link"
            href="https://www.google.com/maps/dir//Catamarca+2782+Quilmes+Oeste+Provincia+de+Buenos+Aires/@-34.7299684,-58.2946433,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95a32de84e008a71:0xa85d9f4f20104cac!2m2!1d-58.2946433!2d-34.7299684"
            target="_blank"
            rel="noreferrer"
          >
             <p className="m-3 text-light text-uppercase">Como llegar</p>
          </a>
         

          

        </div>
      </nav>
    </div>
  );
}
