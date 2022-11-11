import React from "react";

export default function Banner({ url, children }) {
  return (
    <>
      <div className="banner d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${url})` }}>
      
        <h2 className="img-title text-light">{children}</h2>
      
      </div>
      
    </>
  );
}
