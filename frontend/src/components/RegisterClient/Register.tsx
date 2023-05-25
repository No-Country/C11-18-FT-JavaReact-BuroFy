"use client";
import { useForm } from "react-hook-form";
import ButtonFacebook from "../Buttons/ButtonFacebook";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import ButtonAuth from "../Buttons/ButtonAuth";
import ErrorMsg from "../ErrorMsg";
import { SignUp } from "@/interfaces/auth";
import { useRouter } from "next/navigation";
import { sign_up_with_credentials } from "@/lib/firebase_auth";
import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch } from "@/hooks";
import { setUserInitial } from "@/redux/features/userSlice";
import Link from "next/link";

export default function Register() {
  const { setStatusAuth } = useAuth();
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUp>();

  const onSubmit = async (data: SignUp) => {
    const { password, email, displayName } = data;
    setStatusAuth("checking");
    try {
      if (data) {
        const { user } = await sign_up_with_credentials({ email, password, displayName });
        console.log(user);
        dispatch(setUserInitial(user));
        setStatusAuth("authenticated");
        router.push("/");
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className='flex flex-col order-4 w-full h-auto mx-auto mb-6 md:items-center lg:mt-20 lg:mb-0'>
      <div className='flex flex-col items-center justify-center h-full m-auto bg-white md:w-full md:h-full'>
        <Link className='flex gap-2' href='/registro'>
          <svg
            className='lg:mt-[7px]'
            width='5'
            height='8'
            viewBox='0 0 5 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1.87924 4.5C2.15539 4.5 2.37924 4.27614 2.37924 4C2.37924 3.72386 2.15539 3.5 1.87924 3.5V4.5ZM1 4.5H1.87924V3.5H1V4.5Z'
              fill='black'
            />
          </svg>
          <p className='lg:flex lg:mr-[400px] lg:mb-6 border-b-2 border-slate-500'>Atrás</p>
        </Link>

        <h3 className=' text-xl font-black md:text-2xl lg:text-3xl'>Registro de nuevo usuario</h3>
        <h4 className='flex justify-center my-6 space-x-10 text-sm lg:text-lg'>
          Crea tu usuario y recibí asistencia legal ¡ya!
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col w-full gap-10 px-3 m-auto space-y-4 text-left'>
            <div className='relative z-0 w-full group'>
              <input
                type='text'
                id='name'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-quinary focus:bg-transparent'
                placeholder=' '
                required
                {...register("displayName", {
                  required: "Name is required.",
                })}
              />
              <label
                htmlFor='name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 z-50 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Nombre
              </label>
              {errors.displayName && <ErrorMsg>{errors.displayName?.message as string}</ErrorMsg>}
            </div>

            <div className='relative z-0 w-full group mb-14 '>
              <input
                type='email'
                id='email'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-quinary focus:bg-transparent'
                placeholder=' '
                required
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 z-50 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Correo electrónico
              </label>
              {errors.email && <ErrorMsg>{errors.email?.message as string}</ErrorMsg>}
            </div>

            <div className='relative z-0 w-full mb-6 group'>
              <input
                type={visible ? "text" : "password"}
                id='password'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 bg-quinary focus:bg-transparent border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
                placeholder=' '
                required
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                })}
              />
              <label
                htmlFor='password'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Contraseña
              </label>
              {errors.password && <ErrorMsg>{errors.password?.message as string}</ErrorMsg>}
              {visible ? (
                <AiFillEye
                  className='absolute right-4 top-[10%] lg:left-[20rem] lg:absolute'
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiFillEyeInvisible
                  className='absolute right-4 top-[10%] lg:left-[20rem] lg:absolute'
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <div className='relative z-0 w-full group'>
              <input
                type={visible ? "text" : "password"}
                id='confirmPassword'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 bg-quinary focus:bg-transparent border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
                placeholder=' '
                required
                {...register("confirmPassword", {
                  required: "Confirm password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                  validate: (value) => {
                    const { password } = getValues();
                    if (password !== value) return "Your password does not match";
                  },
                })}
              />
              <label
                htmlFor='confirmPassword'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Confirma contraseña
              </label>
              {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>}
            </div>
          </div>

          <div className='flex justify-center my-10 '>
            <ButtonAuth>Crear cuenta</ButtonAuth>
          </div>
        </form>
        <>
          <span>O continúa con</span>
        </>
<<<<<<<<< Temporary merge branch 1
        <div className='flex flex-col items-center justify-center gap-4 mt-2 md:mt-14 md:gap-8 md:flex-row'>
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
        <footer className='absolute mt-4 text-xs bottom-4'>Burofy genera conexiones</footer>
>>>>>>> cd1c30c5a3e40dad83cc3e16a3eea0a500525aa4
      </div>
    </div>
  );
}
