import React from "react";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";

export default function CardServices() {
  return (
    <>
      <div className=' bg-white mb-3 border-2 border-[#C600E0] rounded-lg drop-shadow-xl lg:border-[3px] w-[363px] lg:w-[459px] lg:h-auto'>
        <div className='flex justify-between rounded-tr-lg rounded-tl-lg bg-[#EBEBEB] lg:w-[453px]  lg:h-[60px] lg:items-center'>
          <h1 className='lg:font-bold lg:text-[20px] m-5 lg:leading-[26px]'>Mis servicios</h1>
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
        <div className='p-3 lg:p-4 lg:mt-1 space-y-4 '>
          <div className='flex flex-col lg:flex-col w-[337px] h-[138px] p-2 bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
            <div className='flex ms-2 mt-1 lg:mt-0 lg:ms-0 lg:flex lg:p-3 lg: lg:gap-10 mb-2 lg:mb-0'>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
                <p className='bg-gray-700  text-[#FFFFFF]  ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  875
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal'>Fecha:</p>
                <p className='bg-gray-700 w-[96px] h-[20px] text-white text-center ms-4 text-xs mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  05/15/2023
                </p>
              </div>
            </div>
            <div className='flex mt-10 lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between absolute '>
              <Image src='/stub/imgprofile2.png' width={50} height={50} alt='profile' />
              <div className='flex flex-col lg:flex-col w-[180px]'>
                <p className='lg:ml-0 ml-2 lg:px-0 lg:font-bold lg:text-sm w-[220px]'>
                  Carlos Fernandez Gutierrez
                </p>
                <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] w-[135px] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
                  Abogado Migratorío
                </span>
              </div>
            </div>
            <div className='flex relative top-[60px] left-[200px] lg:top-5 lg:left-[220px]'>
              <span className='bg-[#D8D8FE] text-[#3C3CA7] lg:h-[29px] ms-4 text-xs font-normal px-4 text-center w-[102px] py-1.5 rounded-full self-center lg:ml-20'>
                En progreso
              </span>
            </div>
          </div>

          <div className='flex flex-col lg:flex-col w-[337px] h-[138px] p-2 bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
            <div className='flex ms-2 mt-1 lg:mt-0 lg:ms-0 lg:flex lg:p-3 lg: lg:gap-10 mb-2 lg:mb-0'>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
                <p className='bg-gray-700  text-[#FFFFFF]  ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  875
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal'>Fecha:</p>
                <p className='bg-gray-700 w-[96px] h-[20px] text-white text-center ms-4 text-xs mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  05/15/2023
                </p>
              </div>
            </div>
            <div className='flex mt-10 lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between absolute '>
              <Image src='/stub/imgprofile2.png' width={50} height={50} alt='profile' />
              <div className='flex flex-col lg:flex-col w-[180px]'>
                <p className='lg:ml-0 ml-2 lg:px-0 lg:font-bold lg:text-sm w-[220px]'>
                  Carlos Fernandez Gutierrez
                </p>
                <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] w-[135px] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
                  Abogado Migratorío
                </span>
              </div>
            </div>
            <div className='flex relative top-[60px] left-[200px] lg:top-5 lg:left-[220px]'>
              <span className='bg-[#E6FBD9] text-[#0F5B1D] lg:h-[29px] ms-4 text-xs font-normal px-4 text-center w-[102px] py-1.5 rounded-full self-center lg:ml-20'>
                En progreso
              </span>
            </div>
          </div>
          <div className='flex flex-col lg:flex-col w-[337px] h-[138px] p-2 bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
            <div className='flex ms-2 mt-1 lg:mt-0 lg:ms-0 lg:flex lg:p-3 lg: lg:gap-10 mb-2 lg:mb-0'>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
                <p className='bg-gray-700  text-[#FFFFFF]  ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  875
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal'>Fecha:</p>
                <p className='bg-gray-700 w-[96px] h-[20px] text-white text-center ms-4 text-xs mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  05/15/2023
                </p>
              </div>
            </div>
            <div className='flex mt-10 lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between absolute '>
              <Image src='/stub/imgprofile2.png' width={50} height={50} alt='profile' />
              <div className='flex flex-col lg:flex-col w-[180px]'>
                <p className='lg:ml-0 ml-2 lg:px-0 lg:font-bold lg:text-sm w-[220px]'>
                  Carlos Fernandez Gutierrez
                </p>
                <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] w-[135px] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
                  Abogado Migratorío
                </span>
              </div>
            </div>
            <div className='flex relative top-[60px] left-[200px] lg:top-5 lg:left-[220px]'>
              <span className='bg-[#D0D0D0] text-[#2E2E2E] lg:h-[29px] ms-4 text-xs font-normal px-4 text-center w-[102px] py-1.5 rounded-full self-center lg:ml-20'>
                Cerrado
              </span>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end mt-5'>
            <button
              type='button'
              className='text-white bg-[#24292F] justify-center rounded-md w-[377px] h-[40px] lg:w-[136px] lg:h-[30px] lg:font-bold lg:text-smlg: px-5 lg:py-1.5 text-center inline-flex items-center mr-1  gap-1'
            >
              <AiFillEye />
              Ver todos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
