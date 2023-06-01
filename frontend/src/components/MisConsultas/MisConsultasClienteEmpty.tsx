"use client";

import React from "react";
import { HeaderMisConsultas } from "./HeaderMisConsultas";
import CardApplicationEmpty from "../Cards/CardApplicationEmpty";
import { CardBuscar } from "../Cards/CardBuscar";
import Header from "../Header/Header";
import Drawer from "../Header/Drawer";
import Sidebar from "../Header/Sidebar";

export const MisConsultasClienteEmpty = () => {
  return (
    <div className='items-center justify-between w-auto h-auto lg:relative lg:items-center lg:justify-between lg:w-auto lg:h-auto'>
      <div className='hidden md-flex lg:flex'>
        <Drawer />
      </div>
      <div>
        <HeaderMisConsultas />
      </div>
      {/* las colsultan van a ser dinamicas */}
      <span className='flex p-5 lg:ml-[21.5rem]'>Tienes, 0 consultas</span>
      {/* <CardApplicationEmpty /> */}
      <CardBuscar />
    </div>
  );
};
