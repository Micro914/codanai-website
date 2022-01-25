import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Form from "../components/Form";
import Maps from "../components/Maps";
import Services from "../components/Services";
import Clientes from "../components/Clientes";
import { homeObjOne } from "../components/InfoSection/Data";
import { mapObjOne } from "../components/Maps/Data";
import { formOne } from "../components/Form/Data";
import Footer from "../components/Footer";
import Socios from "../components/Socios";
// import EasterEgg from '../components/EasterEgg/EasterEgg'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Maps {...mapObjOne} />
      <Socios />
      <Clientes />
      <Form {...formOne} />
      <Footer />
    </>
  );
};

export default Home;
