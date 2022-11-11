import React from "react";
import wsp from "../src/media/wsp.png";

export default function FixedIcon() {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=+5491157475059&text=Hola, vi tu web y queria hacerte una consulta!" target="_blank" rel="noreferrer">
        <img className="fixed-icon" src={wsp} alt="whatsapp" />
      </a>
    </div>
  );
}
