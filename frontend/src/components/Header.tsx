"use client";

import Image from "next/image";
import Link from "next/link";
// import FormSearchBar from "./FormSearchBar";
import { usePathname } from "next/navigation";
import { AiOutlineSearch, AiFillHome, AiOutlineExport } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "./Avatar";
import Spinner from "./Spinner";
import { useAuth } from "@/contexts/AuthContext";
import { logout_firebase } from "@/lib/firebase_auth";
import { logoutUser } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/hooks";

const Header = () => {
  const pathname = usePathname();
  const { statusAuth, setStatusAuth } = useAuth();
  const dispatch = useAppDispatch();
  console.log(statusAuth);

  const handleLogout = async () => {
    setStatusAuth("checking");
    try {
      //close conection with firebase
      await logout_firebase();
      //delete all states of user
      dispatch(logoutUser());
      setStatusAuth("no-authenticated");
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return (
    <>
      {statusAuth === "checking" && <Spinner />}
      {statusAuth !== "no-authenticated" && (
        <>
          <header className='w-full h-[100px] flex p-6 justify-between items-center bg-header-img object-cover object-center md:h-[300px] md:py-8 md:px-20  gap-4 bg-no-repeat bg-cover '>
            <button
              className='focus:scale-110 active:scale-110 transition'
              type='button'
              data-drawer-toggle='drawer-navigation'
              aria-controls='drawer-navigation'
            >
              <RxHamburgerMenu className='w-8 h-8 text-white md:hidden' />
            </button>
            <Image
              src='/assets/title-burofy-white.svg'
              alt='header burofy logotype'
              width={170}
              height={52}
              className='md:hidden bg-no-repeat'
            />
            <div className='hidden md:flex md:flex-col md:grow-1 md:shrink-1 md:ml-[180px] lg:ml-[150px]'>
              <h5 className='mb-3 font-bold text-secundary text-white leading-[39.06px] '>
                Encuentra a tu especialista
              </h5>
              <h6 className='text-lg font-normal text-white leading-[26.04px]'>
                Haz “match” con un profesional y agenda una consulta
              </h6>
            </div>
            <Avatar />
          </header>

          {/* drawer */}
          <aside
            className='fixed top-0 left-0 z-40 w-80 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 p-0 md:block'
            aria-label='Sidenav'
            id='drawer-navigation'
          >
            <div className='overflow-y-auto h-full bg-white dark:bg-gray-800'>
              {/* title - header */}
              <header className='w-full h-1/6 flex justify-center items-center border border-transparent border-b-2 border-b-[#C0C0C0] mb-7'>
                <Image
                  src='/assets/header-burofy.svg'
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
                      className={`w-6 h-6  active:text-white ${pathname === "/" && "text-white"}`}
                    />
                    <span className={`ml-3 self-end ${pathname === "/" && "text-white"}`}>
                      Inicio
                    </span>
                  </Link>
                </li>

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
                      className={`w-6 h-6 active:text-white ${
                        pathname === "/buscar" && "text-white"
                      }`}
                    />
                    <span className={`ml-3 ${pathname === "/buscar" && "text-white"}`}>Buscar</span>
                  </Link>
                </li>

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
                      className={`w-6 h-6 active:text-white ${
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
                      className={`w-6 h-6 active:text-white ${
                        pathname === "/perfil" && "text-white"
                      }`}
                    />
                    <span className={`ml-3 ${pathname === "/perfil" && "text-white"}`}>
                      Mi perfil
                    </span>
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
                      className={`w-6 h-6 active:text-white ${
                        pathname === "/ayuda" && "text-white"
                      }`}
                    />
                    <span className={`ml-3 ${pathname === "/ayuda" && "text-white"}`}>Ayuda</span>
                  </Link>
                </li>

                <li className='hover:bg-primary transition-colors w-full active:bg-tertiary'>
                  <Link
                    onClick={handleLogout}
                    href='/registro'
                    className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
                  >
                    <AiOutlineExport className='w-6 h-6 active:text-white' />
                    <span className='ml-3 active:text-white'>Salir</span>
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
      )}
    </>
  );
};

export default Header;
