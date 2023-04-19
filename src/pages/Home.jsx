import React from "react";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Contact></Contact>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
}

export default Home;
