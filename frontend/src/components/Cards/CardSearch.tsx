"use client";

import React from "react";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Consultation } from "@/interfaces/consultation";
import AvatarProfile from "../Avatars/AvatarProfile";
import { useAppSelector } from "@/hooks";
import { Rol } from "@/interfaces/user";

export const CardSearch = ({ consult }: { consult: Consultation }) => {
  const { rol } = useAppSelector((state) => state.user);

  return (
    <div className=' m-auto mt-7 items-center justify-center flex-col border border-[#C600E0] w-full h-auto rounded-lg drop-shadow-xl text-center lg:border-2 lg:w-full lg:h-auto xl:w-full xl:h-auto'>
      <header className='flex text-xs items-center justify-between bg-[#A6ACAF] rounded-t-lg lg:w-full lg:items-center lg:justify-between'>
        <p className=' flex m-3 mx-2 text-xs lg:items-center lg:justify-center xl:items-center xl:justify-center'>
          N° del servicio:
          <span className='mx-2 bg-[#2e2e2e] items-center justify-center text-white text-xs rounded-lg p-2 lg:items-center lg:justify-center lg:px-4 xl:items-center xl:justify-center xl:px-4'>
            {consult.id}
          </span>
        </p>
        <p className='mx-2  text-xs '>
          Fecha:
          <span className='mx-2 bg-[#2e2e2e] items-center justify-center text-white text-xs rounded-lg p-2'>
            {consult.date}
          </span>
        </p>
      </header>
      <div className='lg:grid lg:grid-cols-2'>
        <section>
          <div className='flex m-3'>
            <AvatarProfile
              avatar={consult.avatar as string}
              fullName={consult.fullName as string}
            />
            <div className='flex flex-col mx-auto '>
              <h5 className='font-bold text-sm m-2'>{consult.fullName}</h5>
              {(rol as Rol) === "professional" && (
                <p className='font-normal text-xs mx-auto bg-[#c7c7c7] w-[149px] rounded-lg'>
                  {consult?.experience}
                </p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-2 items-center justify-between '>
            <div className='flex flex-col m-3 items-center justify-center '>
              <p className='mt-3 flex text-xs items-center justify-center'>
                <ImMobile className='text-sm flex mx-auto' />
                {consult.phone}
              </p>
              <p className='mt-3 flex text-xs items-center justify-center'>
                {/* p dinamico */}
                <MdEmail className='text-sm mx-1 ' />
                {consult.email}
              </p>
              <p className='mt-3 flex text-xs items-center justify-center ml-[-4rem] mx-2'>
                {/* p dinamico */}
                <HiLocationMarker className='text-sm mx-1 ' />
                {consult.location}
              </p>
            </div>
            <div>
              <button className='flex text-xs w-[120px] hover:scale-110 active:hover-95 transition h-[26px] p-2 bg-[#2e2e2e] text-white items-center justify-center rounded-lg mx-2'>
                <AiOutlineStar className='mx-1 text-white' />
                Deja tu reseña
              </button>
            </div>
          </div>
          <hr className='h-px my-4 bg-gray-300 border-0 dark:bg-gray-700 lg:hidden' />
        </section>

        <section>
          <div>
            <h5 className='font-bold text-left mx-3'>Consultas</h5>
            <p className='font-normal text-xs bg-slate-400 m-3 p-1 rounded-lg relative'>
              {consult.comments}
              <IoIosArrowDropdownCircle className='absolute left-[90%] top-3/4 text-3xl cursor-pointer' />
            </p>
          </div>

          <footer className='flex m-3 items-center justify-end mt-8'>
            <p className='text-xs mx-2 items-center justify-center'>
              Estatus:
              <span className='bg-blue-200 text-xs text-blue-800 px-2 rounded-lg mx-1'>
                {consult.status}
              </span>
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};
