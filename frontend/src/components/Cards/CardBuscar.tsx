import React from "react";
import { CardBuscarCliente } from "./CardBuscarCliente";
import { AiOutlineArrowDown } from "react-icons/ai";

export const CardBuscar = () => {
  return (
    <div className='p-5 m-3 items-center justify-center flex-col w-auto h-auto rounded-lg drop-shadow-xl text-center  lg:h-[249px] lg:p-12 lg:space-y-6 lg:ml-[20.5rem] lg:w-auto'>
      <div className='grid grid-cols-2 gap-5 mb-3'>
        <label htmlFor='underline_select' className='sr-only'>
          Underline select
        </label>
        <select
          id='underline_select'
          className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        >
          <option className='text-xs' selected>
            Fecha
          </option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
        <label htmlFor='underline_select' className='sr-only'>
          Underline select
        </label>
        <select
          id='underline_select'
          className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        >
          <option className='text-xs' selected>
            Status
          </option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
      <label htmlFor='underline_select' className='sr-only'>
        Underline select
      </label>
      <select
        id='underline_select'
        className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
      >
        <option className='text-xs' selected>
          Status
        </option>
        <option value='US'>United States</option>
        <option value='CA'>Canada</option>
        <option value='FR'>France</option>
        <option value='DE'>Germany</option>
      </select>
      <CardBuscarCliente />
      <CardBuscarCliente />
      <button className='flex p-2 mt-10 gap-4 bg-[#2e2e2e] text-white hover:bg-[#d3d3d3] hover:text-black items-center w-full justify-center text-xs rounded-lg'>
        <AiOutlineArrowDown />
        Cargar más
      </button>
    </div>
  );
};
