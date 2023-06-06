import Image from "next/image";
import React from "react";

export default function SearchResult() {
  return (

    <>

      <article className='lg:flex lg:space-x-7 lg:justify-center lg:mt-2 mt-5 '>

        
        <div className='bg-white border-2 border-[#7FCEFF] rounded-lg drop-shadow-xl lg:border-[3px] w-[363px]  lg:w-[935px] lg:h-[195px]'>
          <div className="flex lg:p-8 justify-between">
            <div className='flex gap-2 items-center '>
              <Image src="/mocks/searchresult1.png" width={125} height={182} alt='profile' className=" rounded-full" />
              <div className='flex-col space-y-3'>
                <p className='lg:font-bold lg:text-3xl'>Lisandro Aguirre</p>
                <div className="flex">
                  <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
                    Abogado Migratorío
                  </span>
                  <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
                    Suceciones
                  </span>
                </div>
                <div className="flex gap-2">
                  <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50008 10.4997C9.073 10.4997 9.56362 10.2955 9.97196 9.88717C10.3803 9.47884 10.5841 8.98856 10.5834 8.41634C10.5834 7.84343 10.3792 7.3528 9.97091 6.94447C9.56258 6.53613 9.0723 6.33231 8.50008 6.33301C7.92716 6.33301 7.43654 6.53718 7.02821 6.94551C6.61987 7.35384 6.41605 7.84412 6.41675 8.41634C6.41675 8.98926 6.62091 9.47988 7.02925 9.88822C7.43758 10.2966 7.92786 10.5004 8.50008 10.4997ZM8.50008 20.9163C5.70494 18.5379 3.61744 16.3288 2.23758 14.2893C0.85772 12.2497 0.167442 10.3615 0.166748 8.62467C0.166748 6.02051 1.0046 3.94586 2.68029 2.40072C4.35598 0.855577 6.29591 0.0830078 8.50008 0.0830078C10.7049 0.0830078 12.6452 0.855577 14.3209 2.40072C15.9966 3.94586 16.8341 6.02051 16.8334 8.62467C16.8334 10.3608 16.1431 12.249 14.7626 14.2893C13.382 16.3295 11.2945 18.5386 8.50008 20.9163Z" fill="#2E2E2E"/>
                  </svg>
                  <p className=" text-base font-normal leading-4 text-[#2E2E2E]">Santa Fe, Argentina</p>
                </div>
               
              </div>
            </div>
            <div>
              <div className='flex lg:flex-col gap-2 lg:gap-0 mt-6 space-y-3'>
                
                <div className='flex items-center '>
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
                    <strong className='text-black'>4</strong> (30)
                  </p>
                </div>
                <p className='lg:font-normal lg:text-sm lg:text-end lg:mb-2 mb-3 text-xs mt-3 lg:mt-0'><strong> $5000</strong> /consulta</p>
                <button
                  type='button'
                  className='text-white bg-[#24292F] rounded-md lg:w-[146px] lg:h-[30px] lg:font-bold  lg:text-sm  lg:text-center lg:inline-flex mx-auto flex flex-col items-center p-1'
                >
              Ver perfil
                </button>
              </div>
              
            </div>
          </div>
      
        </div>
        

      </article>
     
    
    </>
  );
}


