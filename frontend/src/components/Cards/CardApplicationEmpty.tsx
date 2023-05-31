import React from "react";
import Image from "next/image";

export default function CardApplicationEmpty() {
  return (
    <>
      <div className=' p-10 mx-3 items-center justify-center flex-col bg-white border border-[#C600E0] w-auto h-auto rounded-lg drop-shadow-xl text-center lg:border-2 lg:w-auto  lg:items-center lg:justify-center lg:h-auto lg:p-12 lg:ml-[20.5rem] lg:mb-16 lg:space-y-6'>
        <div className='flex items-center justify-center'>
          <Image
            src='/assets/busqueda-empty.png'
            alt=''
            width={100}
            height={150}
            className='flex items-center justify-center'
          />
        </div>
        <h5 className='mb-2 text-base font-medium tracking-tight text-gray-900 lg:text-[25px] lg:font-bold'>
          Aún no tienes consultas
        </h5>

        <p className='mb-3 font-medium text-xs  text-gray-500 lg:text-[14px] lg:font-normal'>
          Te ayudamos a encontrar al profesional que podra ayudarte.
        </p>

        <button
          type='button'
          className='text-white bg-[#C600E0] font-medium rounded-full text-xs py-1.5 inline-flex justify-center text-center items-center w-full gap-3 lg:rounded-lg lg:w-[236px]'
        >
          <svg
            className='w-[30px] h-[30px] lg:w-[16px] lg:h-[16px]'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.9552 12.5819C10.3113 12.5819 8.90411 11.9659 7.7335 10.7339C6.56289 9.50197 5.97759 8.02097 5.97759 6.29096C5.97759 4.56094 6.56289 3.07995 7.7335 1.84797C8.90411 0.61599 10.3113 0 11.9552 0C13.599 0 15.0062 0.61599 16.1768 1.84797C17.3474 3.07995 17.9328 4.56094 17.9328 6.29096C17.9328 8.02097 17.3474 9.50197 16.1768 10.7339C15.0062 11.9659 13.599 12.5819 11.9552 12.5819ZM27.4969 29.5675L23.7609 25.6356C23.2379 25.9502 22.6775 26.2123 22.0797 26.422C21.4819 26.6317 20.8468 26.7366 20.1743 26.7366C18.3063 26.7366 16.7188 26.0482 15.4117 24.6716C14.1046 23.2949 13.4506 21.6241 13.4496 19.6592C13.4496 17.6933 14.1036 16.022 15.4117 14.6453C16.7198 13.2687 18.3073 12.5809 20.1743 12.5819C22.0423 12.5819 23.6304 13.2702 24.9385 14.6469C26.2466 16.0236 26.9001 17.6944 26.8991 19.6592C26.8991 20.367 26.7995 21.0354 26.6002 21.6645C26.401 22.2936 26.1519 22.8834 25.853 23.4338L29.589 27.3657C29.863 27.654 30 28.021 30 28.4666C30 28.9122 29.863 29.2792 29.589 29.5675C29.3151 29.8558 28.9664 30 28.543 30C28.1196 30 27.7709 29.8558 27.4969 29.5675ZM20.1743 23.5911C21.2204 23.5911 22.1046 23.211 22.8269 22.4509C23.5492 21.6907 23.9103 20.7602 23.9103 19.6592C23.9103 18.5583 23.5492 17.6278 22.8269 16.8676C22.1046 16.1075 21.2204 15.7274 20.1743 15.7274C19.1283 15.7274 18.2441 16.1075 17.5218 16.8676C16.7995 17.6278 16.4384 18.5583 16.4384 19.6592C16.4384 20.7602 16.7995 21.6907 17.5218 22.4509C18.2441 23.211 19.1283 23.5911 20.1743 23.5911ZM2.98879 25.1638C2.16688 25.1638 1.46302 24.8556 0.877213 24.2391C0.29141 23.6225 -0.000993727 22.8823 2.53718e-06 22.0183V20.7995C2.53718e-06 19.9083 0.211709 19.0826 0.635121 18.3224C1.05853 17.5623 1.64384 16.9856 2.39104 16.5924C3.66127 15.9109 5.0934 15.3342 6.68742 14.8624C8.28145 14.3906 10.0498 14.1547 11.9925 14.1547C11.4944 14.9672 11.1143 15.8391 10.8523 16.7701C10.5903 17.7012 10.4598 18.6642 10.4608 19.6592C10.4608 20.6291 10.5918 21.5796 10.8538 22.5106C11.1158 23.4417 11.4949 24.3261 11.991 25.1638H2.98879Z'
              fill='white'
            />
          </svg>
          Buscar un profesional
        </button>
      </div>
    </>
  );
}
