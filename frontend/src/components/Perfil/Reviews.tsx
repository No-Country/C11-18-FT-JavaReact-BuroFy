import React from "react";
import CardReviewProfile from "../Cards/CardReviewProfile";

export default function Reviews() {
  return (
    <>
      <div className='w-fit shadow-md items-center m-auto p-10 rounded-xl border-4 border-[#7FCEFF]'>
        <header className='mb-8 border-b border-[#7FCEFF] flex  justify-between'>
          <h1 className='font-bold font-primary-roboto text-[30px] mb-3'>Mis reseñas</h1>
          <select className='h-fit border-b-2 border-[#AAAAAA] border-opacity-100 border-solid border-t-0 border-r-0 border-l-0'>
            <option>Ordenar por</option>
          </select>
        </header>
        <CardReviewProfile />
      </div>
    </>
  );
}
