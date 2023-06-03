"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineSearch, AiFillHome, AiOutlineExport } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { logoutUser, setVerified } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/hooks";

import { useRouter } from "next/navigation";
import { logout_firebase } from "@/lib";

const Drawer = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    dispatch(setVerified("checking"));
    try {
      await logout_firebase();
      dispatch(logoutUser());
      //close conection with firebase
      //delete all states of user
      
    } catch (error) {
      console.log((error as Error).message);
    }
    router.push("/registro");
  };
  return (
    <>
      <aside className='fixed top-0 left-0 z-40 w-80 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 p-0 md:block col-span-1'>
        <div className='overflow-y-auto h-full bg-white'>
          {/* title - header */}
          <header className='w-full h-1/6 flex justify-center items-center border border-transparent border-b-2 border-b-[#C0C0C0] mb-7'>
            <Image
              src='/assets/title-burofy.svg'
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
                <span className={`ml-3 self-end ${pathname === "/" && "text-white"}`}>Inicio</span>
              </Link>
            </li>

            <li
              className={`hover:bg-primary transition-colors w-full  ${
                pathname === "/buscar" && "bg-tertiary"
              }`}
            >
              <Link
                href='/buscar'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
              >
                <AiOutlineSearch
                  className={`w-6 h-6 active:text-white ${pathname === "/buscar" && "text-white"}`}
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
                href='/consultas'
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
                  className={`w-6 h-6 active:text-white ${pathname === "/perfil" && "text-white"}`}
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
                href='/ayuda'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group px-6 py-[14px] mb-7'
              >
                <IoMdHelpCircle
                  className={`w-6 h-6 active:text-white ${pathname === "/ayuda" && "text-white"}`}
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
  );
};

export default Drawer;
