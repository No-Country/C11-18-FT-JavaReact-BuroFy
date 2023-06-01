import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const HeaderMisConsultas = () => {
  return (
    <header className='w-full h-[100px] flex p-6 justify-between items-center bg-header-img object-cover object-center md:h-[250px] md:object-cover md:object-center md:py-8 md:px-20  gap-4 bg-no-repeat bg-cover mg:flex md:items-center md:justify-end  lg:flex lg:items-center lg:justify-end lg:object-cover lg:object-center lg:h-[250px] '>
      <RxHamburgerMenu className='w-8 h-8 text-white cursor-pointer md:hidden' />
      <div className='md:hidden lg:hidden'>
        <Image
          src='/assets/title-burofy-white.svg'
          alt='title-burofy-white'
          width={100}
          height={52}
          className='md:hidden'
        />
      </div>
      <div className='flex items-center justify-end'>
        <Image
          //   la imagen va a ser dinamica
          src='/mocks/perfilcliente.png'
          alt='title-burofy-white'
          width={50}
          height={50}
          className=''
        />
        <div className='lg:flex lg:flex-col text-xs text-white m-3 hidden  '>
          <p className=' mx-1 py-2'>Hola, Andrea</p>
          <p className='flex cursor-pointer mx-1 gap-2'>
            Mi perfil<p>|</p>Salir
          </p>
        </div>
      </div>
    </header>
  );
};
