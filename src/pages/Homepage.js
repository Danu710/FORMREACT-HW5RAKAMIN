import React from "react";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../component/Home";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Carousel from "../component/Carousel";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Carousel /> */}
      <Footer />
    </>
  );
};

export default Homepage;
