import Image from "next/image";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export const SelecRol = () => {
  return (
    <div className='flex '>
      <div className='hidden lg:flex lg:flex-col'>
        <Image src='/hero-image-burofy.png' alt='logo' width={713} height={1024} className='flex' />
        <h2 className='lg:w-[521px] lg:h-[119px] lg:top-[70%] lg:ml-[16.5rem] lg:text-white lg:font-bold lg:text-[50px] lg:absolute'>
          Burofy genera
        </h2>
        <h2 className='lg:w-[521px] lg:h-[119px] lg:top-[74%] lg:ml-[18rem] lg:text-white lg:font-bold lg:text-[50px] lg:absolute'>
          conexiones.
        </h2>
        <p className='lg:w-[572px] lg:h-[99px] lg:top-[81%] lg:ml-[16rem] lg:absolute lg:text-white lg:text-[25px]lg:font-bold'>
          Tu aliado legal digital para resolver tus
        </p>
        <p className='lg:w-[572px] lg:h-[99px] lg:top-[83%] lg:ml-[15rem] lg:absolute lg:text-white lg:text-[25px]lg:font-bold'>
          consultas y recibir asesoramiento experto de
        </p>
        <p className='lg:w-[572px] lg:h-[99px] lg:top-[85%] lg:ml-[19rem] lg:absolute lg:text-white lg:text-[25px]lg:font-bold'>
          manera rápida y confiable.
        </p>
      </div>
      <div className='flex flex-col w-[353px] h-auto lg:flex'>
        <div>
          <Image
            src='/header-burofy.svg'
            alt='logo'
            width={119.7}
            height={30}
            className='flex mt-6 ml-[7.5rem] lg:ml-[-26rem] lg:mt-14 '
          />
        </div>
        <section className='w-[353px] h-[134px] lg:w-[653px] lg:h-[138px] '>
          <h1 className='font-bold text-2xl ml-7 mt-14 lg:ml-48'>¿Cómo deseas registrarte?</h1>
          <h2 className='font-bold text-base ml-24 mt-4 lg:ml-[17rem]'>Nosotros ajustamos</h2>
          <h2 className='font-bold text-base ml-14  lg:ml-56'>la experiencia a tus nesecidades.</h2>
        </section>

        <section className='lg:flex lg:ml-32 lg:w-[426px] lg:h-[138px]'>
          <button className='w-[312px] h-[100px] border-solid border-2 border-black ml-5 mt-12 rounded-lg relative cursor-pointer lg:w-[238px] lg:h-[138px]'>
            <BsFillPersonFill className='text-5xl text-gray-800 ml-14 gap-4 lg:text-4xl lg:top-[12%] lg:absolute lg:ml-[5rem]' />
            <aside className='fex fex-col absolute top-[28%] ml-[50%] lg:ml-[50%] lg:absolute'>
              <h2 className='font-bold text-lg lg:absolute lg:top-[1.5rem] lg:ml-[-1.8rem]'>
                Usuario
              </h2>
              <h4 className='font-normal ml-3 text-sm lg:absolute lg:top-[3.5rem] lg:ml-[-1.3rem]'>
                Cliente
              </h4>
            </aside>
          </button>
          <button className='w-[312px] h-[100px] border-solid border-2 border-black ml-5 mt-2 rounded-lg relative cursor-pointer lg:w-[238px] lg:h-[138px] lg:mt-12'>
            <Image
              src='/icon-legal.png'
              alt='logo'
              width={70}
              height={50}
              className='ml-12 gap-4 lg:hidden'
            />
            <Image
              src='/icon-legal.png'
              alt='logo'
              width={55}
              height={35}
              className='hidden lg:flex lg:absolute lg:top-[13%] lg:ml-[4rem]'
            />
            <aside className='fex fex-col absolute top-[25%] ml-[48%] lg:ml-[50%] lg:absolute'>
              <h2 className='font-bold text-lg lg:w-[338px] lg:top-[2rem] lg:absolute lg:ml-[-10.5rem]'>
                Asesor Legal
              </h2>
              <h4 className='font-normal ml-[-1.5rem] text-sm lg:w-[338px] lg:top-[4rem] lg:absolute lg:ml-[-10.5rem]'>
                Abogado, contador, etc
              </h4>
            </aside>
          </button>
        </section>
        <section>
          <button className='w-[312px] h-[45px] bg-[#f0bff7] mt-12 ml-5 text-white font-bold rounded-lg lg:ml-[12.3rem] lg:mt-[6rem] lg:absolute'>
            Crear usuario
          </button>
        </section>
        <section className='w-[279px] h-[66px] ml-20 mt-24 lg:absolute lg:w-[400px] lg:ml-[13rem] lg:mt-[34rem] lg:flex'>
          <h3 className='font-bold text-lg lg:text-base'>¿Ya estas registrado?</h3>
          <button className='text-[#c600e0] ml-12 mt-8 cursor-pointer lg:cursor-pointer lg:mt-[-2.5rem]'>
            Inicia sesión
          </button>
        </section>
      </div>
    </div>
  );
};
