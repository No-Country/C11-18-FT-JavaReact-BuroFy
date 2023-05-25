"use client";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { MdOutlineAddCard } from "react-icons/md";

export default function Payment() {
  return (
    <>
      <div className='w-fit shadow-md items-center m-auto p-10 pb-0 rounded-xl border-4 border-[#7FCEFF]'>
        <header className='mb-8 border-b border-[#7FCEFF] flex justify-center'>
          <h1 className='font-bold font-primary-roboto text-[30px] mb-3'>Método de pago</h1>
        </header>
        <div className='flex flex-row m-5 space-x-72'>
          <span>
            <p className='mb-3 text-[12px]'>Método de pago existente</p>
            <span className='w-[328px] h-[50px] space-x-5 m-auto flex pl-5 rounded-md items-center bg-[#F8F8FA]'>
              <AiFillCaretDown size={25} />
              <p> **** 1234</p>
            </span>
          </span>
          <span>
            <button className='bg-[#2E2E2E] w-[174px] h-[85px] rounded-md'>
              <MdOutlineAddCard size={25} color='white' className='m-auto' />
              <p className='flex  m-auto text-white flex-wrap w-[134px]'>
                Agregar tarjeta o método de pago
              </p>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
