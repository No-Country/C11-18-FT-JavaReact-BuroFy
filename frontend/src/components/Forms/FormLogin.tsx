"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignIn } from "@/interfaces/auth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ButtonAuth from "../Buttons/ButtonAuth";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import ErrorMsg from "../ErrorMsg";
import ButtonBack from "../Buttons/ButtonBack";
import { loginUser } from "@/lib/services-burofy/loginUser";
import { setCredentials, setVerified } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/hooks";

const FormLogin = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>();

  const onSubmit = async (data: SignIn) => {
    dispatch(setVerified("checking"));
    if (data) {
      try {
        const user = await loginUser(data);
        console.log("USER", user);
        if (!user) throw new Error("user not found");
        
        dispatch( setCredentials(user));
        router.push("/inicio");
      } catch (error) {
        console.log((error as Error).message);
      }
    }
   
    dispatch(setVerified("authenticated"));
  };

  return (
    <>
      <form
        className='flex w-full h-auto flex-col mx-auto mb-6 md:items-center order-4 lg:mt-40 mt-20  '
        onSubmit={handleSubmit(onSubmit)}
      >
        <ButtonBack />
        <h3 className='text-xl font-black self-center lg:font-bold mb-10 lg:mt-4 md:text-2xl lg:text-4xl lg:ml-[-110px] font-primary-roboto'>
          ¡Bienvenido de nuevo!
        </h3>
        <div className='flex flex-col justify-center items-center'>
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
        </div>
        <div className='flex flex-col '>
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
        </div>
        <div className="mt-6">
          <ButtonAuth>Iniciar Sesión</ButtonAuth>
        </div>
        <div className="flex mt-4 justify-center">
          <div className="inline-flex items-center justify-center ">
            <hr className="w-24 lg:w-40 h-px my-8 bg-gray-600 border-0"/>
            <span className=" px-3 font-medium text-[16px] text-gray-900  bg-white ">O continúa con</span>
            <hr className="w-24 lg:w-40 h-px my-8 bg-gray-600 border-0"/>
          </div>  

        </div>
        <div className='flex flex-col items-center justify-center gap-4 mt-2 md:mt-14 lg:mt-2 md:gap-8 md:flex-row'>
          <ButtonGoogle />
        </div>
      </form>
    </>
  );
};

export default FormLogin;