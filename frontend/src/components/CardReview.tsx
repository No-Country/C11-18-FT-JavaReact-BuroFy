import React from "react";
import Image from "next/image";
import image5 from "../../public/imgprofile5.png";
import image4 from "../../public/imgprofile4.png";
import image6 from "../../public/imgprofile6.png";
import { AiFillEye } from "react-icons/ai";

export default function CardReview() {
  return (
    <>
      <div className=' bg-white border border-[#7FCEFF] rounded-lg drop-shadow-xl lg:border-[3px] lg:w-[459px] lg:h-auto'>
        <div className='flex justify-between rounded-tr-lg rounded-tl-lg bg-[#EBEBEB] lg:w-[453px] lg:h-[60px] lg:items-center'>
          <h1 className='lg:font-bold lg:text-[20px] lg:m-5 lg:leading-[26px]'>
            Reseñas Realizadas
          </h1>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>Your Email</label>
          <button
            id='dropdown-button'
            data-dropdown-toggle='dropdown'
            className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-normal text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg'
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
                fill-rule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clip-rule='evenodd'
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
        <div className='p-4 mt-3'>
          <div className='bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[74px] lg:mb-3 lg:p-1.5'>
            <div className='flex lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between'>
              <div className='flex gap-2 items-center'>
                <Image src={image4} width={50} height={50} alt='profile' />
                <div className='flex-col'>
                  <p className='lg:font-bold lg:text-sm'>Catalina Villanueva</p>
                </div>
              </div>
              <div className='flex-col'>
                <p className='lg:font-normal lg:text-sm'>Puntuación recibida</p>
                <span className='bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full'>
                  Abogado Notarial
                </span>
              </div>
              {/* <div className='flex'>
                <span className='bg-[#D0D0D0] text-[#2E2E2E] lg:h-[29px] ms-4 text-xs font-normal px-4 py-1.5 rounded-full self-center'>
                  Cerrado
                </span>
              </div> */}
            </div>
          </div>
          <div className='bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[74px] lg:mb-3 lg:p-1.5'>
            <div className='flex lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between'>
              <div className='flex gap-2 items-center'>
                <Image src={image5} width={50} height={50} alt='profile' />
                <div className='flex-col'>
                  <p className='lg:font-bold lg:text-sm'>Genaro Lozano Pérez</p>
                </div>
              </div>
              <div className='flex-col'>
                <p className='lg:font-normal lg:text-sm'>Puntuación recibida</p>
                <span className='bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full'>
                  Abogado Notarial
                </span>
              </div>
              {/* <div className='flex'>
                <span className='bg-[#D0D0D0] text-[#2E2E2E] lg:h-[29px] ms-4 text-xs font-normal px-4 py-1.5 rounded-full self-center'>
                  Cerrado
                </span>
              </div> */}
            </div>
          </div>
          <div className='bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[74px] lg:mb-3 lg:p-1.5'>
            <div className='flex lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between'>
              <div className='flex gap-2 items-center'>
                <Image src={image6} width={50} height={50} alt='profile' />
                <div className='flex-col'>
                  <p className='lg:font-bold lg:text-sm'>Imelda Bautista Ruiz</p>
                </div>
              </div>
              <div className='flex-col'>
                <p className='lg:font-normal lg:text-sm'>Puntuación recibida</p>
                <span className='bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full'>
                  Abogado Notarial
                </span>
              </div>
            </div>
          </div>

          <div className='flex justify-end mt-5'>
            <button
              type='button'
              className='text-white bg-[#24292F] lg:w-[126px lg:h-[30px] lg:font-bold lg:rounded-md lg:text-smlg: px-5 lg:py-1.5 text-center inline-flex items-center mr-1 mb-1 gap-1'
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
