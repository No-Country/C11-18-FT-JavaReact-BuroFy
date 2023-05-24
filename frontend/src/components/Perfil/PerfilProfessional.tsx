"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocalPhone, MdOutlineLocationOn, MdOutlinePersonOutline } from "react-icons/md";


export default function PerfilOne() {
  // const Next = () =>{
    
  // }
   
  return (
    <div className=' flex w-[327.68px] h-[579.98] items-center ml-4 lg:flex lg:w-[327.68px] lg:h-[579.98] ld:items-center lg:ml-[43rem]'>
      <form className=''>
        <h1 className='flex font-bold text-3xl ml-3 mt-16 lg:absolute lg:font-bold lg:text-5xl lg:top-[3.5rem]' >Mi Perfil</h1>
        <h2 className='flex text-lg font-bold text-gray-700 mt-11 ml-7 lg:mt-8'>Datos Personales</h2>
        <div className='relative z-0 w-full mb-6 font-semibold ml-7 mt-11 group'>
          <label htmlFor='nombre' className='mt-2'>
            Nombre y Apellidos
          </label>
          <input
            type='text'
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <MdOutlinePersonOutline className='absolute bottom-0 text-lg' />
        </div>
        <div className='relative z-0 w-full mt-4 mb-6 font-semibold ml-7 group'>
          <label htmlFor='correo' className='mt-2'>
            Correo
          </label>
          <input
            type='email'
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <AiOutlineMail className='absolute bottom-0 text-lg' />
        </div>
        <div className='relative z-0 w-full mt-4 mb-6 font-semibold ml-7 group'>
          <label htmlFor='ubicacion' className='mt-2'>
            Ubicacion
          </label>
          <input
            type=''
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <MdOutlineLocationOn className='absolute bottom-0 text-lg' />
        </div>
        <div className='relative z-0 w-full mt-4 mb-6 font-semibold ml-7 group'>
          <label htmlFor='telefono' className='mt-2'>
            Telefono
          </label>
          <input
            type='number'
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <MdOutlineLocalPhone className='absolute bottom-0 text-lg' />
        </div>
        <div className='relative z-0 w-full mt-12 mb-6 ml-16 font-semibold group'>
          <button
            className='bg-primary w-[220px] h-10  mt-12 text-lg font-bold text-white flex- items-center justify-center 
            rounded-xl mx-auto md:w-96 md:h-14'>  
            {/* onClick={Next}  */}
            Guardar
          </button>
        </div>
        <p className='w-full mt-24 ml-24 text-xs group lg:text-xs lg:ml-44 lg:mt-11'>Burofy genera conexiones</p>
      </form>
    </div>
  );
}
