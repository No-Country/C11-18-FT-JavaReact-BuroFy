"use client";

import React from "react";
import { CardBuscar } from "../Cards/CardBuscar";

// import CardApplicationEmpty from "../Cards/CardApplicationEmpty";


export const MisConsultasCliente = () => {
  return (
    <div className='items-center justify-between w-auto h-auto lg:relative lg:items-center lg:justify-between lg:w-auto lg:h-auto'>
      {/* las colsultan van a ser dinamicas */}
      <span className='flex p-5 lg:ml-[21.5rem]'>Tienes, 0 consultas</span>
      {/* <CardApplicationEmpty /> */}
      <CardBuscar/>
    </div>
  );
};