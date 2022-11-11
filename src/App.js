import React from "react";
import Artist from "./components/Artist";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

import Gallery from "./components/Gallery";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import FixedIcon from "./FixedIcon";
import Footer from "./components/Footer";

AOS.init();

function App() {
  const bg1 =
    "https://images.pexels.com/photos/5973987/pexels-photo-5973987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
  
  const bg2="https://images.pexels.com/photos/3926793/pexels-photo-3926793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


  return (
    <>
      <FixedIcon />
      <Navbar />
      <Header />
      <main>
        <Welcome />
      <Banner url={bg2} children={"SERVICIOS"}></Banner>
      <article>
         <Artist />
      </article>
     
      <Banner url={bg1} children={"GALERIA"}></Banner>
      <article>
        <Gallery />
      </article>
      
      <article>
        <Contact />
      </article>
      
      </main>
      
      <Footer/>

    </>
  );
}

export default App;
