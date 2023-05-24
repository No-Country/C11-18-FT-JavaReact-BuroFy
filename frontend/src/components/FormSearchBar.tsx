import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function FormSearchBar() {
  return (
    <>
      <div className='hidden lg:bg-white lg:w-[935px] lg:h-[92px] lg:ml-[400px] lg:flex lg:border-0 lg:rounded-lg mt-5'>
        <form className='lg:flex'>
          <div className=' lg:w-[247px] lg:h-[92px] lg:border-dotted lg:border-r-2 bg-white space-x-4 '>
            <div className='lg:p-3 lg:flex lg:items-center lg:mb-4 lg:gap-3 '>
              <button className='lg:m-auto lg:rounded-lg lg:ring-1 lg:ring-slate-800 lg:p-3 lg:text-white font-medium bg-[#B100C8]'>
                {" "}
                <BsFillPersonFill className='lg:text-white lg:ms-7' />
                Presencial
              </button>
              <button className='lg:m-auto lg:rounded-lg p-3 text-white lg:font-medium bg-[#2E2E2E]'>
                {" "}
                <BsFillPersonFill className='text-white lg:ms-5' />
                Remoto
              </button>
            </div>
          </div>
          <div className=' lg:w-[788px] lg:h-[92px] lg:border-dotted lg:border-r-2 bg-white p-5 lg:flex '>
            <label className='sr-only'>Underline select</label>
            <select
              id='underline_select'
              className='block lg:py-2.5 lg:px-0 lg:w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            >
              <option selected>Espacialización</option>
              <option value='US'>Abogado</option>
              <option value='CA'>Contador</option>
              <option value='FR'>Escribano</option>
            </select>

            <div className='border-b border-grey-dark'>
              <form className=' w-[250px] flex items-center'>
                <label className='sr-only'>Search</label>
                <div className='relative w-full'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-gray-500 dark:text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='simple-search'
                    className='bg-gray-50 border-none border-y-neutral-700 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>
                  <span className='sr-only'>Ubicaciœn</span>
                </button>
              </form>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
