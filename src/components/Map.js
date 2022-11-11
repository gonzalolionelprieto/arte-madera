import React from "react";

export default function Map() {
  return (
    <div className="container-fluid col-12  ">
      <hr className=" bg-dark col-12 col-md-12 mx-auto py-1" />

      <div className="col-12 d-flex justify-content-center mx-auto">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.0168995603185!2d-58.2946433!3d-34.7299684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32de84e008a71%3A0xa85d9f4f20104cac!2sCatamarca%202782%2C%20Quilmes%20Oeste%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668045618504!5m2!1ses-419!2sar"
          width="1000"
          height="350"
          loading="lazy"
          title="map"
        ></iframe>
      </div>

      <hr className=" bg-dark col-12 col-md-12 mx-auto py-1" />
    </div>
  );
}
