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

export default function Register() {
  const { setStatusAuth } = useAuth();
  const [visible, setVisible] = useState(false);
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
      await sign_up_with_credentials({ email, password, displayName });
      console.log("Yes sir");
      setStatusAuth("authenticated");
      router.push("/");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className='m-auto lg:flex lg:flex-row'>
      <div className='hidden lg:block lg:w-1/3'>
        <h1>Aca va la imagen</h1>
      </div>
      <div className='flex flex-col items-center justify-center h-full m-auto bg-white md:w-full md:h-full lg:w-2/3'>
        <>
          <h3 className='m-5 text-xl font-black'>Registro de nuevo usuario</h3>
          <span className='flex justify-center my-6 space-x-10 text-sm '></span>
        </>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[356px] text-left flex flex-col m-auto px-3 space-y-4 gap-14'>
            <div className='relative z-0 w-full group'>
              <input
                type='text'
                id='name'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
                placeholder=' '
                required
                {...register("displayName", {
                  required: "Name is required.",
                })}
              />
              <label
                htmlFor='name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Nombre
              </label>

              {errors.displayName && <ErrorMsg>{errors.displayName?.message as string}</ErrorMsg>}
            </div>

            <div className='relative z-0 w-full group'>
              <input
                type='email'
                id='text '
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
                placeholder=' '
                required
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
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

            <div className='relative z-0 w-full group'>
              <input
                type={visible ? "text" : "password"}
                id='password'
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
                htmlFor='password'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
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
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
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
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Confirma Contraseña
              </label>
              {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>}
            </div>
          
          </div>

          <div className='flex justify-center my-10'>
            <ButtonAuth>Registrarse</ButtonAuth>
          </div>
        </form>
        <>
          <span>O continúa con</span>
        </>
        <div className='flex mt-2 md:mt-14 items-center justify-center flex-col gap-4 md:gap-8 md:flex-row'>
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
        <footer className='absolute bottom-4 text-xs mt-4'>Burofy genera conexiones</footer>
      </div>
    </div>
  );
}
