"use client";
import { User } from "@/interfaces/user";
import React from "react";
import { SiMastercard } from "react-icons/Si";
import { MdOutlineAddCard } from "react-icons/md";

type PropsType = {
  user: User;
};

export default function Payment({user}:PropsType) {
  return( 
    <>
      <div className=" w-[361px] lg:w-fit lg:max-w-[918px] shadow-md items-center m-auto py-3 lg:p-10 lg:pb-0 rounded-xl border-4 border-[#7FCEFF]">
        <header className="mb-8 w-[331px] lg:w-full m-auto border-b border-[#7FCEFF] flex justify-center">
          {user?.rol!=="professional" ? <h1 className="font-bold font-primary-roboto text-[20px] lg:text-[30px] mb-3">Método de pago</h1> : <h1 className="font-bold font-primary-roboto text-[20px] lg:text-[30px] mb-3">Recepción de pago</h1>}
        </header>
        <div className="flex flex-col items-center pb-5 space-y-5 lg:pb-0 lg:space-y-0 lg:m-5 lg:flex-row lg:space-x-64">
          <span>
            {user?.rol!=="professional" ? <p className="mb-3 text-[12px]">Método de pago existente</p> : <p className="mb-3 text-[12px]">Elemento vinculado existente</p>}
            <span className="w-[328px] h-[50px] space-x-5 lg:m-auto flex lg:pl-5 rounded-md items-center bg-[#F8F8FA]">
              <SiMastercard size={25}/>
              <p> **** 1234</p>
            </span>
          </span>
          <span className="m-auto lg:m-0">
            <button className="bg-[#2E2E2E] flex lg:flex-col w-[333px] lg:w-fit h-[65px] lg:h-[85px] rounded-md">
              <MdOutlineAddCard size={25} color="white" className="m-auto mx-6 lg:m-auto"/>
              {user?.rol!=="professional"? <p className="flex text-[16px] lg:flex  m-auto text-white lg:flex-wrap w-[333px] lg:w-[174px]">Agregar tarjeta o método de pago </p> : <p className="flex text-[16px] lg:flex  m-auto text-white lg:flex-wrap w-[333px] lg:w-[250px]">Agregar tarjeta o método de recepción de pago </p>}
            </button>
          </span>
        </div>
      </div>
    </>
  );}