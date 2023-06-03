"use client";
import { FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setRol } from "@/redux/features/userSlice";
import { Rol } from "@/interfaces/user";
import { BsFillPersonFill } from "react-icons/bs";

const SelectRol = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { rol } = useAppSelector((state) => state.user);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // verify of rol (only client for moment!)
    if (rol) {
      (rol as Rol) === "client"
        ? router.push("/registro/cliente")
        : router.push("/registro/profesional");
    }
  };

  return (
    <article className='flex flex-col order-4 gap-8 w-full h-screen justify-start items-center lg:mt-36'>
      <div className='w-[353px] h-[134px] lg:w-[653px] flex flex-col items-center'>
        <h2 className='font-bold text-2xl mt-14 lg:text-4xl leading-10 text-center'>
          ¿Cómo deseas registrarte?
        </h2>
        <h3 className=' font-medium lg:font-medium text-base mt-4 lg:mt-8 lg:text-xl leading-7 text-center px-14 lg:px-36'>
          Nosotros ajustamos la experiencia a tus nesesidades.
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex self-center lg:w-[429px]  flex-col items-center '
      >
        <div className='flex flex-col lg:flex-row lg:w-[527] items-center lg:space-x-4 lg:gap-4 '>
          {/* button of client and profesional */}
          <button
            type='button'
            className='w-[353px] h-[100px] border-solid border-2 border-black mt-12 rounded-lg relative cursor-pointer lg:w-[238px] lg:h-[183px] lg:shadow-2xl focus:bg-sky-blue hover:scale-105 transition active:scale-100 mb-4 lg:mb-0 lg:flex lg:flex-col lg:self-center lg:items-center'
            value='client'
            onClick={() => dispatch(setRol("client"))}
          >
            <BsFillPersonFill className='text-5xl text-gray-800 ml-14 lg:text-4xl lg:top-[12%] lg:absolute lg:ml-0 lg:w-16 lg:h-12' />
            <aside className='flex flex-col absolute top-[28%] ml-[50%] lg:ml-0 lg:absolute justify-center items-center'>
              <h2 className='font-bold text-lg lg:absolute lg:top-[1.5rem] lg '>Usuario</h2>
              <h4 className='font-normal ml-3 text-sm lg:absolute lg:top-[3.5rem] lg:ml-0 lg:mt-3'>
                Cliente
              </h4>
            </aside>
          </button>
          {/* directly setState in redux of rol, for moment! */}
          <button
            type='button'
            className='w-[353px] h-[100px] border-solid border-2 border-black rounded-lg relative cursor-pointer lg:w-[238px] lg:h-[183px] lg:mt-12 lg:shadow-2xl focus:bg-sky-blue hover:scale-105 transition active:scale-100 lg:mb-0 '
            value='professional'
            onClick={() => dispatch(setRol("professional"))}
          >
            <Image
              src='/assets/icon-legal.png'
              alt='logo'
              width={70}
              height={45}
              className='ml-14  lg:flex lg:absolute lg:top-[13%] lg:ml-[5rem]'
            />
            <aside className='flex flex-col absolute top-[25%] ml-[48%] lg:ml-[50%] lg:absolute'>
              <h2 className='font-bold text-lg lg:w-[338px] lg:top-[2rem] lg:absolute lg:ml-[-10.5rem]'>
                Asesor Legal
              </h2>
              <h4 className='font-normal ml-[-1.5rem] text-sm lg:w-[338px] lg:top-[4rem] lg:absolute lg:ml-[-10.5rem] lg:mt-3'>
                Abogado, contador, etc
              </h4>
            </aside>
          </button>
        </div>
        <button
          type='submit' 
          className=' w-[353px] h-[40px] md:w-96 md:h-14 lg:w-[515px] lg:h-[56px] mt-6 lg:mt-10 text-lg font-bold text-white flex- items-center justify-center rounded-lg bg-black   hover:bg-primary hover:scale-110 disabled:bg-sixnary transition active:scale-110 '>
            Crear un usuario
        </button>
      </form>

      <footer className='h-[66px] lg:w-[400px] lg:mt-[34rem] flex flex-col lg:flex-row justify-center mt-10 lg:absolute  lg:gap-2 '>
        <h4 className='leading-5 text-[16px]'>¿Ya estas registrado?</h4>
        <button
          className='text-lilac font-bold leading-5 underline hover:scale-110 transition active:scale-90 mt-8 cursor-pointer lg:cursor-pointer lg:mt-[-2.5rem] mb-2'
          onClick={() => router.push("/acceso")}
        >
          Inicia sesión
        </button>
      </footer>
    </article>
  );
};
export default SelectRol;
