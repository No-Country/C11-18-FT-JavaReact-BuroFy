"use client";
import Image from "next/image";
import React from "react";
import StarsCalification from "../StarsCalification";

export default function CardReviewProfileResult({e}:any){
  return(
    <>
      <div className=" rounded-lg w-fit p-1 bg-gradient-to-b from-[#C600E0] to-[#7FCEFF]">
        <div className="w-[268px] rounded-lg bg-white p-2 font-primary-roboto">
          <header className="flex justify-between">
            <div className="flex ">
              <Image src={e.img} alt="profile" width={34} height={34} className="bg-white rounded-full w-9 h-9"/>
              <span className="ml-2">
                <h1 className="font-bold text-[15px] ">{e.name}</h1>
                <StarsCalification prom={false} extended={false} value={e.rate}/>
              </span>
            </div>
            <p className="text-[10px]">{e.date}</p>
          </header>
          <p className="text-[12px] mt-2">{e.review}</p>
        </div>
      </div>
    </>
  );
}