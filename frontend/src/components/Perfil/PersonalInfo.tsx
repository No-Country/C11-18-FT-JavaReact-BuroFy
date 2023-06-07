"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { MdLocationPin, MdPhoneEnabled, MdWork, MdCake , MdMail } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import AvatarProfile from "../Avatars/AvatarProfile";


export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const pStyle =
    "w-[310px] font-primary-roboto pl-3 flex border-b-2 border-[#AAAAAA] h-[32px] text-[16px]";
  return (
    <>
      <div className='w-fit shadow-md items-center m-auto p-10 pb-0 rounded-xl border-4 border-[#7FCEFF]'>
        <header className='mb-8 border-b border-[#7FCEFF] flex justify-center'>
          <h1 className='font-bold font-primary-roboto text-[30px] mb-3'>Datos Personales</h1>
        </header>
        <div className='flex items-center'>
          <FaUserAlt size={25} color='#2E2E2E' className='' />
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
              <RiEditCircleFill size={20} color='#2E2E2E' />
            </button>
          </span>
     
          <h1 className='ml-5 w-fit m-auto font-bold font-primary-roboto text-[25px]'>
            <p> Alan Telo</p>
            
          </h1>
          <span className='flex justify-center m-auto font-primary-roboto ml-10'>
            <MdCake size={25} color='#2E2E2E' className='items-center m-2' />
            <p className='m-auto text-center'>
              {/* {user.birthday?.toLocaleDateString().split("T")[0]} */}
              21-04-1987
            </p>
          </span>
        </div>

        <div className='flex mt-8 space-x-40'>
          <div className='space-y-4'>
            <span className='flex items-center mt-3'>
              <MdMail size={25} color='#2E2E2E' /> 
              <p className={pStyle}>alan@gmail.com</p>

            </span>
            <span className='flex items-center'>
              <MdLocationPin size={25} color='#2E2E2E' />{" "}
              <p className={pStyle}>Capital Federal, Buenos Aires</p>
            </span>
          </div>
          <div className='space-y-4'>
            <span className='flex items-center'>
              <MdPhoneEnabled size={25} color='#2E2E2E' />{" "}
              <div className='relative z-0 w-[310px] h-[32px] group items-center'>
                <input
                  type='text'
                  id='name'
                  className=' placeholder:text-black placeholder:text-[16px] block py-2.5 pr-0 pl-4 w-full lg:w-[310px] text-sm text-gray-900 border-0 border-b-2 border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-none focus:bg-transparent'
                  placeholder='11-4426-7278'
                  required
                  {...register("displayName", {
                    required: "Phone is required.",
                  })}
                />
        
                {errors.displayName && <ErrorMsg>{errors.displayName?.message as string}</ErrorMsg>}
              </div>
              {/* <p className={pStyle}>{user.phone?.phone}</p> */}
              
            </span>
            <span className='flex items-center'>
              <MdWork size={25} color='#2E2E2E' />{" "}
              {/* <p className={pStyle}>{user.rolContent?.occupation}</p> */}
              <div className='relative z-0 w-[310px] group'>
                <input
                  type='text'
                  id='name'
                  className=' placeholder:text-black placeholder:text-[16px] block py-2.5 pr-0 pl-4 w-full lg:w-[310px] text-sm text-gray-900 border-0 border-b-2 border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-none focus:bg-transparent'
                  placeholder='Profesor de Inglés'
                  required
                  {...register("displayName", {
                    required: "Name is required.",
                  })}
                />
        
                {errors.displayName && <ErrorMsg>{errors.displayName?.message as string}</ErrorMsg>}
              </div>
            </span>
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <button className='rounded-md  w-[180px] h-[40px] text-white font-bold bg-sixnary'>
            Guardar cambios
          </button>
        </div>
      </div>
    </>
  );
}
