import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import ButtonAuth from "../Buttons/ButtonAuth";

const WelcomeApp = () => {
  return (
    <section className='w-[394px] h-[480px] flex-col lg:w-[504] lg:h-[480] lg:ml-[35rem] '>
      <h2 className='items-end ml-[6rem] mt-10 font-bold text-lg lg:text-3xl'>
        ¡Bienvenida Andrea!
      </h2>
      <div className='ml-[8.5rem] mt-20  lg:mr-[15rem]'>
        <BsCheckCircleFill className=' text-[6.5rem] text-[#C600E0]' />
      </div>
      <div className='w-[303px] h-[74px] ml-8 text-sm font-medium mt-20 lg:ml-24 lg:text-sm'>
        <p className='ml-9'>Tú perfil ha sido creado con éxito.</p>
        <p className='ml-9'>Encuentra tu match con un profecional</p>
      </div>
      <div className='ml-[4.7rem] mt-20'>
        <ButtonAuth >Ir a tu perfil</ButtonAuth>
      </div>
      <div className='w-[200px] h-[14px] ml-[4rem] mt-20'>
        <p className='text-[.5rem] font-semibold ml-[5rem] lg:hidden'>Burofy genera conexiones</p>
      </div>
    </section>
  );
};
export default WelcomeApp;
