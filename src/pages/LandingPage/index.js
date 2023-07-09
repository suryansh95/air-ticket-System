import React from "react";
import { HeaderComp } from "../../components/HeaderComp";
import { LowestFareComp } from "../../components/LowestFareComp";
import { ProfessionalExpComp } from "../../components/ProfessionalExpComp";
import { ServicesComp } from "../../components/ServicesComp";
import { WorldTourComp } from "../../components/WorlTourComp";

export const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <HeaderComp />
      <ServicesComp />
      <LowestFareComp />
      <ProfessionalExpComp />
      <WorldTourComp />
    </div>
  );
};
