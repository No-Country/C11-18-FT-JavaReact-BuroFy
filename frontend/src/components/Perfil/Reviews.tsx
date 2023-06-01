import React from "react";
import CardReviewProfile from "../Cards/CardReviewProfile";

export default function Reviews() {
  return(
    <>
      <div className="w-[361px] lg:w-fit shadow-md items-center m-auto p-2 lg:p-10 rounded-xl border-4 border-[#7FCEFF]">
        <header className="mb-8 border-b border-[#7FCEFF] flex space-x-6 lg:space-x-0 lg:pl-40">
          <h1 className="font-bold font-primary-roboto text-[16px] lg:text-[30px] m-auto lg:mb-3">Mis reseñas</h1>
          <select className="w-[198px] lg:flex lg:flex-row-reverse  h-fit mb-2 border-b-2 border-[#AAAAAA] border-opacity-100 border-solid border-t-0 border-r-0 border-l-0">
            <option>Ordenar por</option>
          </select>
        </header>
        <CardReviewProfile/>
      </div>
    </>
  );
}