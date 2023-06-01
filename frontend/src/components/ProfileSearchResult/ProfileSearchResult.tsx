"use Client";
import React from "react";
import AboutProfessional from "./AboutProfessional";
import MoreInfo from "./MoreInfo";
import AboutMe from "./AboutMe";

export default function ProfileSearchResult(){
  return(
    <>
      <div>
        <div>
          <AboutMe/>
        </div>
        <div>
          <AboutProfessional/>
          <MoreInfo/>
          <button>Realizar reserva</button>
        </div>
      </div>
    </>
  );
}