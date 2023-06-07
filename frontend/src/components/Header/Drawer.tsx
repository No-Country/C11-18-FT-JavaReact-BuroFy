"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineSearch, AiFillHome, AiOutlineExport } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { logoutUser, setVerified } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector} from "@/hooks";

import { useRouter } from "next/navigation";
import { logouUserApp } from "@/lib/services-burofy/logouUserApp";
import { useIsOpen } from "@/contexts/OpenContext";
// import { Rol } from "@/interfaces/user";

const Drawer = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen } = useIsOpen();
  const {id}  = useAppSelector((state)=> state.user);
  const handleLogout = async () => {
    dispatch(setVerified("checking"));
    try {
      const message = await logouUserApp();
      console.log(message);
      router.push("/registro");
      //close conection with firebase
      //delete all states of user
      
    } catch (error) {
      console.log((error as Error).message);
    }
    dispatch(logoutUser());
  };
  return (
    <>
      <aside className={isOpen ? "drawer md:translate-x-0"  : "drawer -translate-x-full md:translate-x-0 "}>
        <div className='overflow-y-auto h-full bg-white'>
          {/* title - header */}
          <header className='w-full hidden h-1/6 md:flex justify-center items-center border border-transparent border-b-2 border-b-[#C0C0C0] mb-7'>
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
                pathname === "/inicio" && "bg-tertiary"
              } w-full mb-7`}
            >
              <Link
                href='/inicio'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg group px-6 py-[14px]'
              >
                <AiFillHome
                  className={`w-6 h-6  active:text-white ${pathname === "/inicio" && "text-white"}`}
                />
                <span className={`ml-3 self-end ${pathname === "/inicio" && "text-white"}`}>Inicio</span>
              </Link>
            </li>

            { true && (<li
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
            </li>)}

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
                href={`/perfil/${id}`}
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
