import React from "react";
import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero/Hero";
import TransparentRevenues from "../components/TransparentRevenues/TransparentRevenues";

function index() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TransparentRevenues/>
    </>
  );
}

export default index;
