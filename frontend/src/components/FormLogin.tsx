"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { SignIn } from "@/interfaces/auth";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import ButtonAuth from "./Buttons/ButtonAuth";
import { sign_in_with_credentials } from "@/lib/firebase_auth";
import { useRouter } from "next/navigation";
import ButtonGoogle from "./Buttons/ButtonGoogle";
import ButtonFacebook from "./Buttons/ButtonFacebook";
import ErrorMsg from "./ErrorMsg";
import { useAuth } from "@/contexts/AuthContext";

const FormLogin = () => {
  const { setStatusAuth } = useAuth();
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>();

  const onSubmit = async (data: SignIn) => {
    setStatusAuth("checking");
    try {
      await sign_in_with_credentials(data);
      setStatusAuth("authenticated");
      console.log("Yes sir");
      router.push("/");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <>
      <form
        className=' flex w-full h-auto flex-col mx-auto mb-6 md:items-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-xl font-black self-start mb-14 md:text-2xl'>¡Bienvenido de nuevo!</h3>
          <div className='relative z-0 w-full group mb-14'>
            <input
              type='email'
              id='text '
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
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
              htmlFor='text'
              className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
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
              id='text '
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
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
              htmlFor='text'
              className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Contraseña
            </label>
            {errors.password && <ErrorMsg>{errors.password?.message as string}</ErrorMsg>}
            {visible ? (
              <AiFillEye
                className='absolute right-4 top-[10%]'
                size={25}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiFillEyeInvisible
                className='absolute right-4 top-[10%]'
                size={25}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>
        <div className='flex flex-col mt-5 capitalize mx-auto gap-12 mb-14 md:flex-row'>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              className='w-4 h-4 text-lilac bg-gray-100 border-gray-300 rounded focus:ring-lilac focus:ring-2'
            />
            <p className='text-lg'>recordarme</p>
          </div>
          <Link href='#' className='text-lg'>
            {" "}
            ¿olvidaste la contraseña?
          </Link>
        </div>

        <ButtonAuth>Iniciar Sesion</ButtonAuth>

        <div className='flex items-center justify-center mt-14'>
          <p className='mb-14 max-w-xl mx-auto text-center text-xl relative '>O continúa con</p>
        </div>
        <div className='flex mt-6 items-center justify-center flex-col gap-8'>
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
      </form>
    </>
  );
};

export default FormLogin;
