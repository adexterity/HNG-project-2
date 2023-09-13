import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movies from "../components/Movies";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Movies />
      <Footer />
    </div>
  );
};

export default HomePage;
