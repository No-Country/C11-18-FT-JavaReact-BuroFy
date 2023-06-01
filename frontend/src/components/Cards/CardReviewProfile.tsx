"use client";
import Image from "next/image";
import React from "react";

export default function CardReviewProfile(){
  return(
    <>
      <div className="p-2 border-2 lg:p-4 rounded-2xl border-lilac">
        <div className="w-[311px] lg:w-full flex space-x-2 lg:flex-row lg:space-x-32 ">
          <span className="flex text-[12px] justify-center space-x-3 lg:space-x-5">
            <p>No. de servicio:</p>
            <p className="bg-[#2E2E2E] px-4 text-white rounded-3xl h-[20px] text-center">576</p>
          </span>
          <span className="flex text-[12px] justify-center space-x-3 lg:space-x-5">
            <p>Fecha:</p>
            <p className="bg-[#2E2E2E] px-4 text-white rounded-3xl h-[20px] text-center">20/05/2023</p>
          </span>  
        </div>
        <div className="flex w-[311px] lg:w-full flex-col lg:flex-row py-2">
          <div className="flex">
            <Image width={60} height={60} className="rounded-full w-[60px] h-[60px] mx-4 self-center lg:m-auto" src="/imgprofile.png" alt="profile-prof"/>
            <span className="flex flex-col lg:mx-3">
              <h1 className="text-[18px] font-bold">Carlos Fernandez</h1>
              <ul className="space-y-1">
                <li className="bg-[#D0D0D0] rounded-3xl text-[12px] text-center">Sucesiones</li>
                <li className="bg-[#D0D0D0] rounded-3xl text-[12px] text-center">Derecho familiar</li>
              </ul>
            </span>
          </div>
          <p className="w-[313px] py-2 lg:w-[520px] text-[14px] px-1 lg:mx-5 m-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy...</p>
        </div>
        <div className="flex lg:justify-end">
          <p className="flex mx-3 text-[12px]">Mi calificación:</p>
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
            <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
              <strong className='text-black'>4</strong> estrellas
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 border-2 lg:p-4 rounded-2xl border-lilac">
        <div className="w-[311px] lg:w-full flex space-x-2 lg:flex-row lg:space-x-32 ">
          <span className="flex text-[12px] justify-center space-x-3 lg:space-x-5">
            <p>No. de servicio:</p>
            <p className="bg-[#2E2E2E] px-4 text-white rounded-3xl h-[20px] text-center">576</p>
          </span>
          <span className="flex text-[12px] justify-center space-x-3 lg:space-x-5">
            <p>Fecha:</p>
            <p className="bg-[#2E2E2E] px-4 text-white rounded-3xl h-[20px] text-center">20/05/2023</p>
          </span>  
        </div>
        <div className="flex w-[311px] lg:w-full flex-col lg:flex-row py-2">
          <div className="flex">
            <Image width={60} height={60} className="rounded-full w-[60px] h-[60px] mx-4 self-center lg:m-auto" src="/imgprofile.png" alt="profile-prof"/>
            <span className="flex flex-col lg:mx-3">
              <h1 className="text-[18px] font-bold">Carlos Fernandez</h1>
              <ul className="space-y-1">
                <li className="bg-[#D0D0D0] rounded-3xl text-[12px] text-center">Sucesiones</li>
                <li className="bg-[#D0D0D0] rounded-3xl text-[12px] text-center">Derecho familiar</li>
              </ul>
            </span>
          </div>
          <p className="w-[313px] py-2 lg:w-[520px] text-[14px] px-1 lg:mx-5 m-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy...</p>
        </div>
        <div className="flex lg:justify-end">
          <p className="flex mx-3 text-[12px]">Mi calificación:</p>
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
            <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
              <strong className='text-black'>4</strong> estrellas
            </p>
          </div>
        </div>
      </div>
    </>
  );}