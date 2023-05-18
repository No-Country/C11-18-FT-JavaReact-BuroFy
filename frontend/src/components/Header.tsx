"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { User } from "@/interfaces/user";

import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "./Avatar";

type PropsType = {
  user: User;
};

const Header = ({ user }: PropsType) => {
  const pathname = usePathname();

  console.log(user);

  return (
    <>
      <header className='w-full h-[100px] flex p-6 justify-between items-center bg-header-img object-cover object-center md:h-[300px] md:py-8 md:px-20  gap-4 bg-no-repeat bg-cover'>
        <button
          className='focus:scale-110 active:scale-110 transition'
          type='button'
          data-drawer-toggle='drawer-navigation'
          aria-controls='drawer-navigation'
        >
          <RxHamburgerMenu className='w-8 h-8 text-white' />
        </button>
        <Image
          src='/header-burofy.svg'
          alt='header burofy logotype'
          width={170}
          height={52}
          className='md:hidden bg-no-repeat'
        />
        <div className='hidden md:flex md:flex-col md:grow-1 md:shrink-1 md:ml-[180px] lg:ml-[150px]'>
          <h5 className='mb-3 font-bold text-secundary text-white leading-[39.06px] lg:me-[360px]'>
            Encuentra a tu especialista
          </h5>
          <h6 className='text-lg font-normal text-white leading-[26.04px]'>
            Haz “match” con un profesional y agenda una consulta
          </h6>
        </div>
        <Avatar user={user} />
      </header>

      <div className='lg:bg-white lg:w-[935px] lg:h-[92px] lg:ml-[400px] lg:flex lg:border-0 lg:rounded-lg mt-5'>
        <form className='lg:flex'>
          <div className=' lg:w-[247px] lg:h-[92px] lg:border-dotted lg:border-r-2 bg-white space-x-4 '>
            <div className='p-3 flex items-center mb-4 gap-3 '>
              <button className='m-auto rounded-lg ring-1 ring-slate-800 p-3 text-white font-medium bg-[#B100C8]'>
                {" "}
                <BsFillPersonFill className='text-white ms-7' />
                Presencial
              </button>
              <button className='m-auto rounded-lg p-3 text-white font-medium bg-[#2E2E2E]'>
                {" "}
                <BsFillPersonFill className='text-white ms-5' />
                Remoto
              </button>
            </div>
          </div>
          <div className=' lg:w-[788px] lg:h-[92px] lg:border-dotted lg:border-r-2 bg-white p-5 lg:flex '>
            <label className='sr-only'>Underline select</label>
            <select
              id='underline_select'
              className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
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
      {/* drawer */}
      <aside
        className='fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 p-0 md:block'
        aria-label='Sidenav'
        id='drawer-navigation'
      >
        <div className='overflow-y-auto h-full bg-white dark:bg-gray-800'>
          {/* title - header */}
          <header className='w-full h-1/6 flex justify-center items-center border border-transparent border-b-2 border-b-[#C0C0C0] mb-7'>
            <Image
              src='/title-burofy.svg'
              alt='title burofy with colors'
              width={200}
              height={200}
            />
          </header>

          {/* nav */}
          <ul className='space-y-2'>
            <li
              className={`hover:bg-primary transition-colors ${
                pathname === "/" && "bg-tertiary"
              } w-full mb-7`}
            >
              <Link
                href='/'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg group px-6 py-[14px]'
              >
                <AiFillHome
                  className={`w-6 h-5 active:text-white ${pathname === "/" && "text-white"}`}
                />
                <span className={`ml-3 ${pathname === "/" && "text-white"}`}>Inicio</span>
              </Link>
            </li>

            {user.rol === "client" && (
              <li
                className={`hover:bg-primary transition-colors w-full  ${
                  pathname === "/buscar" && "bg-tertiary"
                }`}
              >
                <Link
                  href='/'
                  className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
                >
                  <AiOutlineSearch
                    className={`w-6 h-5 active:text-white ${
                      pathname === "/buscar" && "text-white"
                    }`}
                  />
                  <span className={`ml-3 ${pathname === "/buscar" && "text-white"}`}>Buscar</span>
                </Link>
              </li>
            )}

            <li
              className={`hover:bg-primary transition-colors ${
                pathname === "/consultas" && "bg-tertiary"
              } w-full`}
            >
              <Link
                href='/'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
              >
                <HiPencil
                  className={`w-6 h-5 active:text-white ${
                    pathname === "/consultas" && "text-white"
                  }`}
                />
                <span className={`ml-3 ${pathname === "/consultas" && "text-white"}`}>
                  Mis consultas
                </span>
              </Link>
            </li>

            <li
              className={`hover:bg-primary transition-colors ${
                pathname === "/perfil" && "bg-tertiary"
              } w-full`}
            >
              <Link
                href='/perfil'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
              >
                <BsFillPersonFill
                  className={`w-6 h-5 active:text-white ${pathname === "/perfil" && "text-white"}`}
                />
                <span className={`ml-3 ${pathname === "/perfil" && "text-white"}`}>Mi perfil</span>
              </Link>
            </li>

            <li
              className={`hover:bg-primary transition-colors ${
                pathname === "/ayuda" && "bg-tertiary"
              } w-full`}
            >
              <Link
                href='/'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
              >
                <IoMdHelpCircle
                  className={`w-6 h-5 active:text-white ${pathname === "/ayuda" && "text-white"}`}
                />
                <span className={`ml-3 ${pathname === "/ayuda" && "text-white"}`}>Ayuda</span>
              </Link>
            </li>
          </ul>
          {/* down - footer */}
          <footer className='absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white z-20 text-xs'>
            <ul className='flex justify-between font-medium capitalize gap-8'>
              <li>aviso de privacidad</li>
              <li>copyright</li>
            </ul>
          </footer>
        </div>
      </aside>
    </>
  );
};

export default Header;
