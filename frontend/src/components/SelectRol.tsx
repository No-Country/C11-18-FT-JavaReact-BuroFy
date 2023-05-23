"use client";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import ButtonAuth from "./Buttons/ButtonAuth";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setRol } from "@/redux/features/userSlice";
import { FormEvent } from "react";

const SelectRol = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const rol = useAppSelector((state) => state.user.rol);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // verify of rol (only client for moment!)
    if (rol) {
      rol === "client" ? router.push("/registro/cliente") : router.push("/registro");
    }
  };

  return (
    <article className='flex flex-col order-4 gap-9 w-full h-screen justify-start items-center'>
      <div className='w-[353px] h-[134px] lg:w-[653px] flex flex-col items-center'>
        <h2 className='font-bold text-2xl mt-14 lg:text-4xl leading-10 text-center'>
          ¿Cómo deseas registrarte?
        </h2>
        <h3 className='text-base mt-4 lg:mt-8 lg:text-xl leading-7 text-center'>
          Nosotros ajustamos la experiencia a tus nesecidades.
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex self-center lg:w-[426px] lg:h-[300px] flex-col items-center gap-16'
      >
        <div className='flex flex-col lg:flex-row lg:w-full items-center lg:gap-16'>
          {/* button of client and profesional */}
          <button
            type='button'
            className='w-[312px] h-[100px] border-solid border-2 border-black mt-12 rounded-lg relative cursor-pointer lg:w-[238px] lg:h-[138px] shadow-md focus:bg-sky-blue hover:scale-105 transition active:scale-100 mb-8 lg:mb-0 lg:flex lg:flex-col lg:self-center lg:items-center'
            value='client'
            onClick={() => dispatch(setRol("client"))}
          >
            <BsFillPersonFill className='text-5xl text-gray-800 ml-14 lg:text-4xl lg:top-[12%] lg:absolute lg:ml-0 lg:w-18 lg:h-14' />
            <aside className='flex flex-col absolute top-[28%] ml-[50%] lg:ml-0 lg:absolute justify-center items-center'>
              <h2 className='font-bold text-lg lg:absolute lg:top-[1.5rem] '>Usuario</h2>
              <h4 className='font-normal ml-3 text-sm lg:absolute lg:top-[3.5rem] lg:ml-0'>
                Cliente
              </h4>
            </aside>
          </button>
          {/* directly setState in redux of rol, for moment! */}
          <button
            type='button'
            className='w-full h-[100px] border-solid border-2 border-black rounded-lg relative cursor-pointer lg:w-[238px] lg:h-[138px] lg:mt-12 shadow-md focus:bg-sky-blue hover:scale-105 transition active:scale-100 mt-8 lg:mb-0'
            value='professional'
            onClick={() => dispatch(setRol("professional"))}
          >
            <Image
              src='/icon-legal.png'
              alt='logo'
              width={70}
              height={35}
              className='ml-10 lg:flex lg:absolute lg:top-[13%] lg:ml-[4rem]'
            />
            <aside className='flex flex-col absolute top-[25%] ml-[48%] lg:ml-[50%] lg:absolute'>
              <h2 className='font-bold text-lg lg:w-[338px] lg:top-[2rem] lg:absolute lg:ml-[-10.5rem]'>
                Asesor Legal
              </h2>
              <h4 className='font-normal ml-[-1.5rem] text-sm lg:w-[338px] lg:top-[4rem] lg:absolute lg:ml-[-10.5rem]'>
                Abogado, contador, etc
              </h4>
            </aside>
          </button>
        </div>
        <ButtonAuth>Crear cuenta</ButtonAuth>
      </form>

      <footer className='w-[279px] h-[66px] mt-24 lg:absolute lg:w-[400px] lg:mt-[34rem] flex flex-col items-center'>
        <h4 className='leading-5 text-lg'>¿Ya estas registrado?</h4>

        <button
          className='text-lilac font-bold leading-5 underline hover:scale-110 transition active:scale-90 mt-8 cursor-pointer lg:cursor-pointer lg:mt-[-2.5rem]'
          onClick={() => router.push("/acceso")}
        >
          Inicia sesión
        </button>
      </footer>
    </article>
  );
};
export default SelectRol;
