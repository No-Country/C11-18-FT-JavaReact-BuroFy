import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className='lg:flex lg:w-[935px] lg:h-[92px] bg-white rounded-md mt-3'>
        <div className='lg:flex lg:flex-row  lg:content-center lg:justify-center lg:w-[300px] lg:h-[92px] items-center lg:gap-4 border border-3 '>
          {/* button of client and profesional */}
          <button className='flex flex-col lg:w-[111px] lg:h-[63px] text-white bg-[#2E2E2E] font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mt-3 mr-2 mb-2'>
            <svg
              width='21'
              height='16'
              viewBox='0 0 21 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.6667 13.7082V15.7916H0.0833435V13.7082C0.0833435 13.7082 0.0833435 9.54156 7.37501 9.54156C14.6667 9.54156 14.6667 13.7082 14.6667 13.7082ZM11.0208 3.81239C11.0208 3.09131 10.807 2.38643 10.4064 1.78688C10.0058 1.18732 9.4364 0.720026 8.77021 0.444081C8.10402 0.168137 7.37097 0.0959372 6.66374 0.236613C5.95652 0.377288 5.3069 0.72452 4.79702 1.2344C4.28714 1.74428 3.93991 2.3939 3.79923 3.10113C3.65856 3.80835 3.73076 4.5414 4.0067 5.20759C4.28264 5.87378 4.74994 6.44318 5.34949 6.84379C5.94905 7.2444 6.65393 7.45822 7.37501 7.45822C8.34195 7.45822 9.26928 7.07411 9.953 6.39038C10.6367 5.70666 11.0208 4.77933 11.0208 3.81239ZM14.6042 9.54156C15.2445 10.0371 15.7685 10.667 16.1393 11.3869C16.51 12.1067 16.7185 12.8991 16.75 13.7082V15.7916H20.9167V13.7082C20.9167 13.7082 20.9167 9.92697 14.6042 9.54156ZM13.625 0.166559C12.908 0.162566 12.2068 0.376929 11.6146 0.781142C12.2473 1.66524 12.5876 2.72519 12.5876 3.81239C12.5876 4.89959 12.2473 5.95954 11.6146 6.84364C12.2068 7.24785 12.908 7.46222 13.625 7.45822C14.5919 7.45822 15.5193 7.07411 16.203 6.39038C16.8867 5.70666 17.2708 4.77933 17.2708 3.81239C17.2708 2.84546 16.8867 1.91813 16.203 1.2344C15.5193 0.550672 14.5919 0.166559 13.625 0.166559Z'
                fill='white'
              />
            </svg>
            Presencial
          </button>
          <button className='flex flex-col lg:w-[93px] lg:h-[63px] text-white bg-[#2E2E2E] font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mt-3  mr-2 mb-2'>
            <svg
              width='23'
              height='19'
              viewBox='0 0 23 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.5 18.875C10.3542 18.875 9.37326 18.467 8.55729 17.651C7.74132 16.8351 7.33333 15.8542 7.33333 14.7083C7.33333 13.5625 7.74132 12.5816 8.55729 11.7656C9.37326 10.9497 10.3542 10.5417 11.5 10.5417C12.6458 10.5417 13.6267 10.9497 14.4427 11.7656C15.2587 12.5816 15.6667 13.5625 15.6667 14.7083C15.6667 15.8542 15.2587 16.8351 14.4427 17.651C13.6267 18.467 12.6458 18.875 11.5 18.875ZM2.17708 5.95833L0.640625 4.52604C2.04687 3.15451 3.67882 2.07812 5.53646 1.29687C7.3941 0.515625 9.38194 0.125 11.5 0.125C13.6181 0.125 15.6059 0.515625 17.4635 1.29687C19.3212 2.07812 20.9531 3.15451 22.3594 4.52604L20.8229 5.95833C19.5903 4.79514 18.184 3.87917 16.6042 3.21042C15.0243 2.54167 13.3229 2.20764 11.5 2.20833C9.67708 2.20833 7.97569 2.54271 6.39583 3.21146C4.81597 3.88021 3.40972 4.79583 2.17708 5.95833ZM17.0208 9.52604C16.2917 8.86632 15.4583 8.34965 14.5208 7.97604C13.5833 7.60243 12.5764 7.41597 11.5 7.41667C10.4236 7.41667 9.42083 7.60312 8.49167 7.97604C7.5625 8.34896 6.725 8.86562 5.97917 9.52604L4.44271 8.09375C5.38021 7.22569 6.45243 6.54861 7.65937 6.0625C8.86632 5.57639 10.1465 5.33333 11.5 5.33333C12.8542 5.33333 14.1302 5.57639 15.3281 6.0625C16.526 6.54861 17.5937 7.22569 18.5312 8.09375L17.0208 9.52604Z'
                fill='white'
              />
            </svg>
            Remoto
          </button>
        </div>
        <div className='lg:w-[635px] lg:justify-center mt-5'>
          <form className='flex'>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                name='text'
                id='text '
                className='block py-2.5 px-0 w-[240px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='text'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Especialización
              </label>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                name='text'
                id='text '
                className='block py-2.5 px-0 w-[240px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='text'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Ubicación
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
