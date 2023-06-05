"use client";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";

export default function ProfileHeaderView(){
  return(
    <>
      <div className="font-primary-roboto">
        <header className="h-[71px] xl:h-[100px] bg-gradient-to-r from-[#8527c48d] to-[#265e9dc1]"></header>
        <div  className="px-4 md:px-12">
          <Image src="/mocks/imgprofile.png" alt="profile" width={92} height={92} className="absolute bg-white border-2 border-white rounded-full top-4 xl:top-16"/>
          <div className="pl-20">
            <span className="flex items-center justify-center w-fit">
              <h1 className="pl-5 text-left flex mt-2 min-w-[246px] text-[23px] font-bold">Carlos Fernandez <MdVerified size={28} color="green" className="mx-2"/></h1> 
            </span>
            <ul className="text-[12px] md:pl-4 flex flex-wrap space-x-4">
              <li className="bg-[#D0D0D0] px-4 rounded-lg">Derecho migratorio</li>
              <li className="bg-[#D0D0D0] px-4 rounded-lg">Contratos</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}