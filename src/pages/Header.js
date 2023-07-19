import React from "react";
import Hero from "../components/hero";
import Navigation from "../components/Nav";

const Header = () => {
  return (
    <div className="bg-red">
      <Navigation/>
      <Hero />
    </div>
  );
};

export default Header;
