import React from "react";
import Image from "next/image";

import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

export default function CardReview() {
  return (
    <>
      <motion.div
        className='bg-white border-2 border-[#7FCEFF] rounded-lg drop-shadow-xl lg:border-[3px] w-[363px]  lg:w-[459px] lg:h-[431px]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex justify-between rounded-tr-lg rounded-tl-lg bg-[#EBEBEB] lg:w-[453px] lg:h-[60px] lg:items-center'>
          <h1 className=' lg:font-bold lg:text-[20px] m-5 lg:leading-[26px]'>Reseñas recibidas</h1>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>Your Email</label>
          <button
            id='dropdown-button'
            data-dropdown-toggle='dropdown'
            className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-normal text-center text-gray-900  border-none border-b-2 border-gray-400 w-[140px]'
            type='button'
          >
            Ordernar por{" "}
            <svg
              aria-hidden='true'
              className='w-4 h-4 ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            id='dropdown'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
          >
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdown-button'
            >
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  Fecha
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  T
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  Design
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  Logos
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='p-3 mt-2 '>
          <div className='bg-[#EBEBEB] rounded-lg w-[337px] h-[106px] lg:w-[423px] lg:h-[74px] lg:mb-3 lg:p-1.5'>
            <div className='flex-row lg:flex lg:[423px] lg:[126px] lg:p-2 lg:gap-2 p-3 mt-1 '>
              <div className='flex gap-2 items-center lg:'>
                <Image src='/stub/imgprofile3.png' width={50} height={50} alt='profile' />
                <div className='flex-col'>
                  <p className='lg:font-bold lg:text-sm'>Pedro Guitierrez Lazo</p>
                  <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
                    Abogado Migratorío
                  </span>
                </div>
              </div>
              <div className='flex lg:flex-col gap-2 lg:gap-0 '>
                <p className='lg:font-normal lg:text-sm lg:text-end lg:mb-2 mb-3 text-xs mt-3 lg:mt-0'>
                  Mi puntuación
                </p>
                <div className='flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>First star</title>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Second star</title>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Third star</title>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Fourth star</title>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-300 dark:text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Fifth star</title>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <p className='ml-2 text-sm font-normal text-gray-500'>
                    <strong className='text-black'>4</strong> estrellas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end mt-5'>
            <button
              type='button'
              className='text-white bg-[#24292F] justify-center rounded-md w-[380px] h-[40px] lg:w-[136px] lg:h-[30px] lg:font-bold lg:text-smlg: px-5 lg:py-1.5 text-center inline-flex items-center mr-1  gap-1'
            >
              <AiFillEye />
              Ver todos
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
