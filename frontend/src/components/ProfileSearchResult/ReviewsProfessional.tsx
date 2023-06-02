"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carrousel from "./Carrousel";

export default function ReviewsProfessional(){

  const example = [{name:"Carolina Mendez", rate:4, img:"/mocks/imgprofile2.png",review:"Muy buen abogado, me explicó de manera comprensible los requisitos y trámites necesarios para lograr mi objetivo de forma legal.", date:"hace 1 hora"},
    {name:"Carolino Mendez", rate:2, img:"/mocks/imgprofile3.png",review:"Muy buen abogado, me explicó de manera comprensible los requisitos y trámites necesarios para lograr mi objetivo de forma legal.", date:"hace 1 hora"},
    {name:"Micaela Mendez", rate:4, img:"/mocks/imgprofile4.png",review:"Muy buen abogado, me explicó de manera comprensible los requisitos y trámites necesarios para lograr mi objetivo de forma legal.", date:"hace 1 hora"}];

  return(
    <>
      <div className="p-4 font-primary-roboto">
        <header className="flex">
          <h1 className="font-bold text-[18px] pr-4">Reseñas</h1>
          <button className="text-[#949494] flex text-[12px] items-center justify-center"> 
            <span className="px-2 underline">Dejar reseña acá </span>
            <MdKeyboardArrowRight size={22}/>
          </button>
        </header>
        <div>
          <div className="hidden xl:block"><Carrousel perView={2.1} example={example}/></div>
          <div className="hidden md:block xl:hidden"><Carrousel perView={1} example={example}/></div>
          <div className="md:hidden"><Carrousel perView={1.5} example={example}/></div>
          <div className="hidden sm:block md:hidden"><Carrousel perView={1} example={example}/></div>
        </div>
      </div>
    </>
  );
}