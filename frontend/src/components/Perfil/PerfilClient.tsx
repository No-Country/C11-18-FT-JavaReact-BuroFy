import Image from "next/image";
import React from "react";
import { Accordion } from "flowbite-react";
import { AiFillStar, AiOutlineEdit, AiOutlineMail, AiOutlineStar } from "react-icons/ai";
import { FaCcMastercard } from "react-icons/fa";
import {
  MdOutlineAddCard,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

export default function PerfilCliente() {
  return (
    <div className='h-auto w-[327px]'>
      <section className='flex lg:ml-[40rem]'>
        <div className=''>
          <Image
            src='/perfilcliente.png'
            alt='logo-perfil'
            width={80}
            height={80}
            className='m-5 relative lg:absolute lg:top-[22rem] lg:ml-[25rem] '
          />
          <AiOutlineEdit className='absolute ml-24 top-[10.5rem] text-base lg:absolute lg:ml-[33rem] lg:mt-[15rem] ' />
        </div>
        <div className='relative w-[102px] h-[48px] ml-[10rem] mt-4 lg:w-[250px] lg:h-[50px] lg:left-[140rem] top-[2rem] lg:absolute lg:text-lg text-white'>
          <Image
            src='/perfilcliente.png'
            alt='icon-perfil'
            width={50}
            height={50}
            className='hidden absolute m-5 lg:flex lg:top-[-1rem] '
          />

          <p className='font-bold lg:ml-20  '>Hola, Andrea</p>
          <p className='text-xs lg:ml-20  '>Mi perfil</p>
        </div>
      </section>
      <section className='flex ml-5 ring-offset-2 ring-2 w-[307.68px] h-[579.98]  items-center justify-center  lg:w-[1235px] lg:h-[425px] lg:ml-[60rem] lg:mt-16'>
        <form className='lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:mt-[-3rem]'>
          <div>
            <h2 className='hidden lg:flex lg:ml-40'>Datos personales</h2>
          </div>

          <h2 className='flex relative font-bold text-xl mt-6 text-black ml-[1rem] lg:mt-16 lg:items-center lg:justify-center lg:text-2xl lg:mb-16 lg:ml-[-4rem] lg:flex'>
            Andrea Gonzalez
          </h2>
          <h2 className='hidden lg:flex lg:text-xl lg:font-bold lg:relative lg:ml-[4rem] '>
            08/07/90
          </h2>
          <BsFillPersonFill className='hidden lg:flex lg:absolute lg:top-[26.3rem] lg:ml-[29rem] lg:text-xl' />

          <AiOutlineEdit className='absolute  top-[15.5rem] ml-[11.5rem] text-base  lg:hidden' />
          <div className='ml-7 mt-11 font-bold relative z-0 w-full mb-6 group'>
            <label htmlFor='' className='mt-2'></label>
            <input
              type='email'
              placeholder=''
              className='block py-2.5 px-0 ml-[-1.5rem] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
            />
            <AiOutlineMail className='absolute bottom-0 ml-[-2.5rem]  text-lg' />
          </div>
          <div className='ml-7 mt-4 font-semibold relative z-0 w-full mb-6 group'>
            <label htmlFor='' className='mt-2'></label>
            <input
              type=''
              placeholder=''
              className='block py-2.5 px-0 w-full text-sm ml-[-1.5rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
            />
            <MdOutlineLocationOn className='absolute ml-[-2.5rem] bottom-0 text-lg' />
          </div>
          <div className='ml-7 mt-4 font-semibold relative z-0 w-full mb-6 group'>
            <label htmlFor='' className='mt-2'></label>
            <input
              type='numbre'
              placeholder=''
              className='block py-2.5 ml-[-1.5rem] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
            />
            <MdOutlineLocalPhone className='absolute ml-[-2.5rem] bottom-0 text-lg' />
          </div>
          <div className='ml-7 mt-4 font-semibold relative z-0 w-full mb-6 group'>
            <label htmlFor='' className='mt-2'></label>
            <select className="className='block items-center text-center py-2.5 ml-[-1.5rem] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'">
              <option value='a'>a</option>
              <option value='b'>b</option>
              <option value='c'>c</option>
              <option value='d'>d</option>
            </select>
            <MdOutlineWorkOutline className='absolute ml-[-2.5rem] bottom-0 text-lg' />
          </div>
          <div className='font-semibold relative z-0 w-full mb-6 group  lg:mr-[7rem]'>
            <button className='bg-primary w-[220px] h-10  text-lg font-bold text-white rounded-xl lg:w-[320px] lg:h-10 lg:absolute lg:ml-60 lg:mt-[-1rem]'>
              {/* onClick={Next}  */}
              Guardar
            </button>
          </div>
        </form>
      </section>
      {/* <section className='flex  flex-col ring-offset-2 ring-2 w-[427.68px] h-[579.98] ml-7 mt-8 lg:w-[1235px] lg:h-[325px] lg:ml-[60rem] lg:mt-16 lg:flex'>
        <h2 className='font-bold text-xl ml-[8rem] mt-5 lg:ml-[35rem]'>Método de pago</h2>
        <p className='flex text-xs text-start ml-7 mt-5 lg:absolute lg:text-base lg:ml-24 lg:mt-28'>
          Método de pago existente
        </p>
        <div className='lg:grid lg:grid-flow-col'>
          <input
            type='number'
            placeholder='**** **** **** 4242'
            className='flex w-4/5 h-auto relative items-center justify-center mt-2 ml-7 text-center bg-gray-200 lg:ml-24 lg:h-16 lg:mt-24'
          />
          <FaCcMastercard className='flex ml-9 absolute top-[55.5rem] lg:absolute lg:top-[63.5rem] lg:ml-[8rem]' />
          <div className='w-[60%] h-32 bg-slate-700 text-white cursor-pointer ml-[4.5rem] mt-16 mb-8 lg:ml-60 lg:w-72 lg:cursor-pointer'>
            <MdOutlineAddCard className='flex m-auto mt-6 ml-[7.5rem] absolute lg:absolute lg:ml-32 ' />
            <p className='flex text-xs w-[30%] ml-20 mt-14 absolute lg:ml-6 lg:w-[10%] lg:text-sm'>
              Agregar tarjeta o Método de pago
            </p>
          </div>
        </div>
      </section>
      <div className='ring-offset-2 ring-2 w-[427.68px] h-auto ml-7 mt-8 lg:ml-[60rem] lg:w-[1235px]'>
        <h2 className='flex items-center justify-center font-bold mt-12 text-2xl lg:ml-[5rem] lg:font-extrabold lg:text-3xl'>
          Reseñas
        </h2>

        <div
          className='ring-offset-2 ring-2 m-8  '
          id='accordion-collapse'
          data-accordion='collapse '
        >
          <h2 id='accordion-collapse-heading-1'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-collapse-body-1'
              aria-expanded='true'
              aria-controls='accordion-collapse-body-1'
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-collapse-body-1'
            className='hidden'
            aria-labelledby='accordion-collapse-heading-1'
          >
            <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Flowbite is an open-source library of interactive components built on top of
                Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Check out this guide to learn how to{" "}
                <a
                  href='/docs/getting-started/introduction/'
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
        <div
          className='ring-offset-2 ring-2 m-8  '
          id='accordion-collapse'
          data-accordion='collapse'
        >
          <h2 id='accordion-collapse-heading-1'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-collapse-body-1'
              aria-expanded='true'
              aria-controls='accordion-collapse-body-1'
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-collapse-body-1'
            className='hidden'
            aria-labelledby='accordion-collapse-heading-1'
          >
            <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Flowbite is an open-source library of interactive components built on top of
                Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Check out this guide to learn how to{" "}
                <a
                  href='/docs/getting-started/introduction/'
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <section className="flex  flex-col ring-offset-2 ring-2 w-[427.68px] h-[579.98] ml-7 mt-8 ">
        <div className="flex items-center justify-between mx-8 mt-3">
          <p className="flex text-xs">N. de servicio:</p>
          <button className="flex bg-primary text-white rounded-xl w-20 h-7 items-center justify-center text-xs">576</button>
        </div>
        <div className="flex">
         <div>
         <Image
            src='/reseña1.png'
            alt='logo-reseña'
            width={80}
            height={80}
            className='m-5'
          />
         </div>
          <aside className="flex flex-col mt-4">
            <h3 className="font-extrabold text-sm mt-4">Juan Gutierrez</h3>
            <button className="flex w-36 bg-gray-700 h-9 text-white mt-3 rounded-xl items-center justify-center">Contratos</button>
            <button className="flex w-52 bg-gray-700 h-9 text-white mt-3 rounded-xl items-center justify-center">Derecho Migratorio</button>
          </aside>
        </div>
        <section className="flex items-center justify-between mx-8 mt-7">
        <p className="text-xs">Fecha:</p>
        <p className="text-sm rounded-xl w-[6rem] h-auto bg-gray-700 text-center  text-white">24/03/23</p>
        </section>
        <p className="mx-3 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae recusandae accusamus necessitatibus tempora, delectus ad corrupti deserunt facere praesentium incidunt expedita ipsam quis vel illum in est quod veritatis!</p>
        <div className="flex mt-10 ">
          <p className="flex item-center justify-center gap-2 ml-40 mb-5 text-xs">Mi calificación:<AiFillStar className="text-base"/><AiFillStar className="text-base"/><AiFillStar className="text-base"/><AiFillStar className="text-base"/><AiOutlineStar className="text-base"/></p>
        </div>
      </section> */}
      {/* <section className="flex  flex-col ring-offset-2 ring-2 w-[307.68px] h-[579.98] ml-3 mt-8 ">
        <div className="flex items-center justify-between mx-8 mt-3">
          <p className="flex text-xs">N. de servicio:</p>
          <button className="flex bg-primary text-white rounded-xl w-20 h-7 items-center justify-center text-xs">570</button>
        </div>
        <div className="flex">
         <div>
         <Image
            src='/reseña2.png'
            alt='logo-reseña'
            width={80}
            height={80}
            className='m-5'
          />
         </div>
          <aside className="flex flex-col mt-4">
            <h3 className="font-extrabold text-sm mt-4">Pedro Gonzalez</h3>
            <button className="flex w-36 bg-gray-700 h-9 text-white mt-3 rounded-xl items-center justify-center">Contratos</button>
            <button className="flex w-52 bg-gray-700 h-9 text-white mt-3 rounded-xl items-center justify-center">Derecho Migratorio</button>
          </aside>
        </div>
        <section className="flex items-center justify-between mx-8 mt-7">
        <p className="text-xs">Fecha:</p>
        <p className="text-sm rounded-xl w-[6rem] h-auto bg-gray-700 text-center  text-white">24/03/23</p>
        </section>
        <p className="mx-3 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae recusandae accusamus necessitatibus tempora, delectus ad corrupti deserunt facere praesentium incidunt expedita ipsam quis vel illum in est quod veritatis!</p>
        <div className="flex mt-10 ">
          <p className="flex item-center justify-center gap-2 ml-32 mb-5 text-xs">Mi calificación:<AiFillStar className="text-base"/><AiFillStar className="text-base"/><AiFillStar className="text-base"/><AiFillStar className="text-base"/><AiOutlineStar className="text-base"/></p>
        </div>
      </section> */}
      {/* <p className='text-xs font-extrabold text-black mt-20 ml-40 lg:ml-[95rem] lg:w-3/4 lg:text-base lg:text-black lg:font-extrabold'>
        Burofy genera conexiones
      </p> */}
    </div>
  );
}
