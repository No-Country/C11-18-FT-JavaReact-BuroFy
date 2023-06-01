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

export default function FormRegister() {
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
        dispatch(setUserInitial(user as any));
        setStatusAuth("authenticated");
        router.push("/");
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className='flex flex-col order-4 w-full h-auto mx-auto mb-2 md:items-center lg:mt-20 lg:mb-0'>
      <div className='flex flex-col items-center justify-center h-full m-auto bg-white md:w-full md:h-full'>
        <Link className='hidden lg:flex gap-2 text-start' href='/registro'>
          <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 9L18.75 9M1.25 9L8.75 1.5M1.25 9L8.75 16.5" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className='hidden lg:flex lg:mr-[400px] lg:mb-6 border-b-2 border-slate-500'>Atrás</p>
        </Link>

        <h3 className='text-xl font-black md:text-2xl lg:text-3xl leading-[33.85px]'>Registro de nuevo usuario</h3>
        <h4 className='flex text-center my-6 px-20 font-medium text-sm lg:text-lg'>
          Crea tu usuario y recibí asistencia legal ¡Ya!
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col w-full gap-4 lg:gap-10 m-auto space-y-4 text-left'>
            <div className='relative z-0 w-[353px] group'>
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

            <div className='relative z-0 w-full group lg:mb-14 '>
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
                  className='absolute right-4 top-[15%] cursor-pointer'
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiFillEyeInvisible
                  className='absolute right-4 top-[15%] cursor-pointer'
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
        <div>
          <span>O continúa con</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mt-2 md:mt-14 md:gap-8 md:flex-row'>
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
        <footer className='hidden lg:absolute mt-4 text-xs bottom-4'>Burofy genera conexiones</footer>
      </div>
    </div>
  );
}
