"use client";
import React from "react";
import { MdMail,MdLocationPin, MdPhoneEnabled, MdWork, MdCake } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { User } from "@/interfaces/user";
import Image from "next/image";

type PropsType = {
    user: User;
  };
  

export default function PersonalInfo({user}:PropsType){
  const pStyle = "w-[295px] lg:w-[310px] font-primary-roboto pl-3 flex border-b-2 border-[#AAAAAA] h-[32px] text-[16px]";
  return(
    <>
      <div className="min-w-[361px] w-fit shadow-md items-center m-auto p-2 lg:p-10 pb-0 rounded-xl border-4 border-[#7FCEFF]">
        <header className="w-[331px] lg:w-full mb-8 border-b border-[#7FCEFF] flex justify-center">
          <h1 className="font-bold font-primary-roboto text-[20px] lg:text-[30px] mb-3">Datos Personales</h1>
        </header>
        <div className="flex items-center">
          <FaUserAlt size={17} color="#2E2E2E" className="m-2"/>
          <span className="relative">
            <Image
              height={60}
              width={60}
              className="rounded-full"
              src={user?.avatar as string}
              alt={user?.firstName as string}
            />
            <button className="absolute bottom-0 right-0 transform -translate-y-2 bg-white rounded-full"><RiEditCircleFill size={15} color="#2E2E2E" /></button>
          </span>
          <div className="flex flex-col lg:flex-row h-[45px]">
            <h1 className="text-[16px] flex flex-wrap ml-5 w-fit m-auto font-bold font-primary-roboto lg:text-[25px]">{user.firstName} {user.surName}</h1> 
            <span className="flex pl-2 lg:m-auto lg:justify-center font-primary-roboto">
              <MdCake size={25} color="#2E2E2E" className="items-center m-2"/>
              <p className="my-auto lg:m-auto text-[16px] text-center">{user.birthday?.toLocaleDateString().split("T")[0]}</p>
            </span>
          </div>
        </div>
      
        <div className="flex flex-col mt-8 space-y-4 lg:space-y-0 lg:space-x-40 lg:flex-row">
          <div className="space-y-4">
            <span className="flex items-center">
              <MdMail size={25} color="#2E2E2E"/> <p className={pStyle}>{user.email}</p>
            </span>
            <span  className="flex items-center">
              <MdLocationPin size={25} color="#2E2E2E"/> <p className={pStyle}>{user.address?.city}</p>
            </span>
          </div>
          <div className="space-y-4">
            <span className="flex items-center">
              <MdPhoneEnabled size={25} color="#2E2E2E"/> <p className={pStyle}>{user.phone?.phone}</p>
            </span>
            {user.rol!=="professional" ? <span className="flex items-center">
              <MdWork size={25} color="#2E2E2E" /> <p className={pStyle}>{user.rolContent===null && "Profesora de Inglés"}</p>
            </span> : null}
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button className="rounded-md my-10 w-full lg:my-0 lg:w-[180px] h-[40px] text-white font-bold bg-sixnary">Botones</button>
        </div>
        
      </div>
    </>
  );}