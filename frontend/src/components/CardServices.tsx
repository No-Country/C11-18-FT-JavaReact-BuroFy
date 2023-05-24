import React from "react";
import Image from "next/image";
import image from "../../public/imgprofile.png";
import image2 from "../../public/imgprofile2.png";
import image3 from "../../public/imgprofile3.png";
import { AiFillEye } from "react-icons/ai";

export default function CardServices() {
  return (
    <>
      <div className=' bg-white mb-3 border border-[#C600E0] rounded-lg drop-shadow-xl lg:border-[3px] lg:w-[459px] lg:h-auto'>
        <div className='flex justify-between rounded-tr-lg rounded-tl-lg bg-[#EBEBEB] lg:w-[453px] lg:h-[60px] lg:items-center'>
          <h1 className='lg:font-bold lg:text-[20px] m-5 lg:leading-[26px]'>Mis servicios</h1>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>Your Email</label>
          <button
            id='dropdown-button'
            data-dropdown-toggle='dropdown'
            className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-normal text-center text-gray-900   border-none border-gray-400 w-[135px] '
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
        <div className='p-2.5 lg:p-4 lg:mt-3 space-y-4 '>
          <div className='flex flex-col-reverse lg:flex-col w-[322px] h-[100px] p-2 bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
            <div className='flex ms-2 mt-3 lg:mt-0 lg:ms-0 lg:flex lg:p-3 lg: lg:gap-10'>
              <div className='flex items-center'>
                <p className='text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
                <p className='bg-gray-700  text-[#FFFFFF] ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
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

            <div className='flex lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between'>
              <div className='flex gap-2'>
                <Image src={image} width={50} height={50} alt='profile' />
                <div className='flex lg:flex-col '>
                  <p className='px-3 lg:px-0 lg:font-bold lg:text-sm'>Carlos Fernandez</p>
                  <span className='hidden lg:flex bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full'>
                    Abogado Migratorío
                  </span>
                </div>
                <div className='flex'>
                  <span className='bg-[#D8D8FE] text-[#3C3CA7] lg:h-[29px] ms-4 text-xs font-normal px-4 py-1.5 rounded-full self-center'>
                    En progreso
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className='w-[322px] h-[100px] bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
            <div className='flex lg:p-3 lg: lg:gap-10'>
              <div className='flex items-center'>
                <p className='lg:text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
                <span className='bg-gray-700  text-[#FFFFFF] ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  875
                </span>
              </div>
              <div className='flex items-center'>
                <p className='lg:text-xs lg:font-normal'>Fecha:</p>
                <span className='bg-gray-700 w-[96px] h-[20px] text-white text-center ms-4 text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  05/15/2023
                </span>
              </div>
            </div>

            <div className='flex lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between'>
              <div className='flex gap-2'>
                <Image src={image2} width={50} height={50} alt='profile' />
                <div className='flex-col'>
                  <p className='lg:font-bold lg:text-sm'>Jimena León Jimenez</p>
                  <span className='bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full'>
                    Abogada Matrimonial
                  </span>
                </div>
              </div>

              <div className='flex'>
                <span className='bg-[#E6FBD9] text-[#0F5B1D] lg:h-[29px] ms-4 text-xs font-normal px-4 py-1.5 rounded-full self-center'>
                  Contestado
                </span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className=' w-[322px] h-[100px] bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
            <div className='flex lg:p-3 lg: lg:gap-10'>
              <div className='flex items-center'>
                <p className='lg:text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
                <span className='bg-gray-700  text-[#FFFFFF] ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  875
                </span>
              </div>
              <div className='flex items-center'>
                <p className='lg:text-xs lg:font-normal'>Fecha:</p>
                <span className='bg-gray-700 w-[96px] h-[20px] text-white text-center ms-4 text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
                  05/15/2023
                </span>
              </div>
            </div>

            <div className='flex lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between'>
              <div className='flex gap-2'>
                <Image src={image3} width={50} height={50} alt='profile' />
                <div className='flex-col'>
                  <p className='lg:font-bold lg:text-sm'>Arturo García Torres</p>
                  <span className='bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full'>
                    Abogado Notarial
                  </span>
                </div>
              </div>

              <div className='flex'>
                <span className='bg-[#D0D0D0] text-[#2E2E2E] lg:h-[29px] ms-4 text-xs font-normal px-4 py-1.5 rounded-full self-center'>
                  Cerrado
                </span>
              </div>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end mt-5'>
            <button
              type='button'
              className='text-white bg-[#24292F] rounded-md lg:w-[126px lg:h-[30px] lg:font-bold lg:text-smlg: px-5 lg:py-1.5 text-center inline-flex items-center mr-1  gap-1'
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
