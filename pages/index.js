import React from "react";
import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero/Hero";
import TransparentRevenues from "../components/TransparentRevenues/TransparentRevenues";
import InvestAndGovern from "../components/InvestAndGovern/InvestAndGovern";

function index() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TransparentRevenues/>
      <InvestAndGovern/>
    </>
  );
}

export default index;
