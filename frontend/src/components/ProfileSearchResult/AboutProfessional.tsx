"use Client";
import React from "react";



export default function AboutProfessional(){
  return(
    <>
      <div className="p-3 font-primary-roboto">
        <header>
          <h1 className="text-[20px] font-bold">Sobre el profesional</h1>
        </header>
        <div className="flex m-3 space-x-5">
          <span className="min-w-[135px]">
            <h1 className="text-[16px] font-bold">Ubicacion</h1>
            <p className="text-[14px] ">Capital Federal, Buenos Aires</p>
          </span>
          <span>
            <h1 className="text-[16px] min-w-[198px] font-bold">Modalidad de consulta</h1>
            <ul className="flex flex-wrap space-x-5">
              <li className="text-[12px] py-1 bg-[#2E2E2E] text-white px-3 w-fit rounded-2xl">Presencial</li>
              <li className="text-[12px] py-1 bg-[#2E2E2E] text-white px-3 w-fit rounded-2xl">Remoto</li>
            </ul>
          </span>
        </div>
        <span className="flex justify-center space-x-5">
          <h1 className="text-[16px] font-bold">Precio</h1>
          <span className="flex">
            <p className="text-[16px] font-bold">$6000 </p><p> / consulta</p>
          </span>
          
        </span>
      </div>      
    </>
  );
}