"use client";
import React from "react";
import { MdLocationPin, MdPhoneEnabled, MdWork, MdCake , MdMail } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";

export default function PersonalInfo() {
  const pStyle =
    "w-[310px] font-primary-roboto pl-3 flex border-b-2 border-[#AAAAAA] h-[32px] text-[16px]";
  return (
    <>
      <div className='w-fit shadow-md items-center m-auto p-10 pb-0 rounded-xl border-4 border-[#7FCEFF]'>
        <header className='mb-8 border-b border-[#7FCEFF] flex justify-center'>
          <h1 className='font-bold font-primary-roboto text-[30px] mb-3'>Datos Personales</h1>
        </header>
        <div className='flex items-center'>
          <FaUserAlt size={17} color='#2E2E2E' className='m-2' />
          <span className='relative'>
            <Image
              height={60}
              width={60}
              className='rounded-full'
              src="/mocks/imgprofile3.png"
              alt="asd"
              // src={user?.avatar as string}
              // alt={user?.firstName as string}
            />
            <button className='absolute bottom-0 right-0 transform -translate-y-2 bg-white rounded-full'>
              <RiEditCircleFill size={15} color='#2E2E2E' />
            </button>
          </span>

          <h1 className='ml-5 w-fit m-auto font-bold font-primary-roboto text-[25px]'>
            {/* {user.firstName} {user.surName} */}
          </h1>
          <span className='flex justify-center m-auto font-primary-roboto'>
            <MdCake size={25} color='#2E2E2E' className='items-center m-2' />
            <p className='m-auto text-center'>
              {/* {user.birthday?.toLocaleDateString().split("T")[0]} */}
              21-04-1987
            </p>
          </span>
        </div>

        <div className='flex mt-8 space-x-40'>
          <div className='space-y-4'>
            <span className='flex items-center'>
              <MdMail size={25} color='#2E2E2E' /> 
              {/* <p className={pStyle}>{user.email}</p> */}
              <p className={pStyle}>alan@gmail.com</p>

            </span>
            <span className='flex items-center'>
              <MdLocationPin size={25} color='#2E2E2E' />{" "}
              {/* <p className={pStyle}>{user.address?.city}</p> */}
              <p className={pStyle}>Capital Federal, Buenos Aires</p>
            </span>
          </div>
          <div className='space-y-4'>
            <span className='flex items-center'>
              <MdPhoneEnabled size={25} color='#2E2E2E' />{" "}
              {/* <p className={pStyle}>{user.phone?.phone}</p> */}
              <p className={pStyle}>11-4426-7278</p>
            </span>
            <span className='flex items-center'>
              <MdWork size={25} color='#2E2E2E' />{" "}
              {/* <p className={pStyle}>{user.rolContent?.occupation}</p> */}
              <p className={pStyle}>Abogado</p>
            </span>
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <button className='rounded-md  w-[180px] h-[40px] text-white font-bold bg-sixnary'>
            Botones
          </button>
        </div>
      </div>
    </>
  );
}
