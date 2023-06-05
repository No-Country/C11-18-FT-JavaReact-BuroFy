"use client";
import React from "react";
import AboutProfessional from "./AboutProfessional";
import MoreInfo from "./MoreInfo";
import AboutMe from "./AboutMe";
import ConsultProfessional from "./ConsultProfessional";
import ReviewsProfessional from "./ReviewsProfessional";
import ProfileHeaderView from "./ProfileHeaderView";



export default function ProfileSearchResult(){
  return(
    <>
      <div className=" md:absolute">
        <ProfileHeaderView/> 
        <div className="items-start xl:flex xl:flex-row-reverse">
          <div className="-mt-[62px] space-y-4">
            <div>
              <AboutProfessional/>
              <MoreInfo/>
              <div className="hidden xl:bg-[#2e2e2e20] xl:justify-center xl:items-center xl:border xl:border-[#ababab] xl:flex xl:h-[145px] w-[355px]">
                <button className="bg-sixnary font-bold font-primary-roboto w-[241px] text-white h-[48px]">Realizar reserva</button>
              </div>
            </div>
          </div>
          <div className="space-y-4 xl:overflow-y-scroll">
            <div className="max-w-[700px]">
              <AboutMe /> 
              <ConsultProfessional/>
              <ReviewsProfessional/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}