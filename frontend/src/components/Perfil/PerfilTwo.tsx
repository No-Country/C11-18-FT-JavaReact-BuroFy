import Image from "next/image";
import React from "react";
import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocalPhone, MdOutlineLocationOn, MdOutlineWorkOutline } from "react-icons/md";

export default function PerfilTwo() {
  return (
    <div>
      <section className='flex lg:ml-[40rem]'>
        <div className="">
          <Image
            src='/perfilcliente.png'
            alt='logo-perfil'
            width={126}
            height={126}
            className='m-5 relative'
          />
          <AiOutlineEdit className="absolute ml-32 top-[13.5rem] text-xl z-50"/>
        </div>
        <div className='relative w-[102px] h-[48px] ml-[7rem] mt-4 '>
          <Image
            src='/perfilcliente.png'
            alt='logo-perfil'
            width={50}
            height={50}
            className='hidden absolute m-5 lg:flex'
          />
          
          <p className="font-bold">Hola, Andrea</p>
          <p className="text-xs">Mi perfil</p>
        </div>
      </section>
      <section className="flex ring-offset-2 ring-2 w-[327.68px] h-[579.98] ml-9">
        <form >
        <h1 className='flex relative font-bold text-2xl mt-6 text-black ml-[3rem] lg:mt-8'>Andrea Gonzalez</h1>
        <AiOutlineEdit className="absolute  top-[18.5rem] ml-[15.5rem] text-xl z-50"/>
        <div className='ml-7 mt-11 font-bold relative z-0 w-full mb-6 group'>
          <label htmlFor='' className='mt-2'>
           
          </label>
          <input
            type='email'
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <AiOutlineMail className='absolute bottom-0 text-lg' />
        </div>
        <div className='ml-7 mt-4 font-semibold relative z-0 w-full mb-6 group'>
          <label htmlFor='' className='mt-2'>
            
          </label>
          <input
            type=''
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <MdOutlineLocationOn className='absolute bottom-0 text-lg' />
        </div>
        <div className='ml-7 mt-4 font-semibold relative z-0 w-full mb-6 group'>
          <label htmlFor='' className='mt-2'>
            
          </label>
          <input
            type='numbre'
            placeholder=''
            className='block py-2.5 ml-5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
          />
          <MdOutlineLocalPhone className='absolute bottom-0 text-lg' />
        </div>
        <div className='ml-7 mt-4 font-semibold relative z-0 w-full mb-6 group'>
          <label htmlFor='' className='mt-2'>
            
          </label>
          <select className="className='block py-2.5 ml-5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
          <MdOutlineWorkOutline className='absolute bottom-0 text-lg' />
        </div>
        <div className='ml-16 mt-12 font-semibold relative z-0 w-full mb-6 group'>
          <button
            className='bg-primary w-[220px] h-10 mr-16 mt-8 text-lg font-bold text-white rounded-xl  md:w-96 md:h-14'>  
             {/* onClick={Next}  */}
            Guardar
          </button>
        </div>
        </form>
      </section>
      <section className="flex  flex-col ring-offset-2 ring-2 w-[327.68px] h-[579.98] ml-9 mt-8 items-center justify-center">
        <h2 className="font-bold text-xl mt-5">Método de pago</h2>
        <p>Método de pago existente</p>
        <input type="number" placeholder="*** *** 4242"/>
      </section>
    </div>
  );
}
