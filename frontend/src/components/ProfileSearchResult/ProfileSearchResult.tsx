"use Client";
import React from "react";
import AboutProfessional from "./AboutProfessional";
import MoreInfo from "./MoreInfo";
import AboutMe from "./AboutMe";
import ConsultProfessional from "./ConsultProfessional";
import ReviewsProfessional from "./ReviewsProfessional";



export default function ProfileSearchResult(){
  return(
    <>
      <div>
        <div>
          <AboutProfessional/>
          <MoreInfo/>
        </div>
        <div>
          <AboutMe />
          <ConsultProfessional/>
          <ReviewsProfessional/>
        </div>
      </div>
    </>
  );
}