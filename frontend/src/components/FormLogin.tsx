"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import { SignIn } from "@/interface/auth";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const FormLogin = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>();

  const onSubmit = (data: SignIn) => {
    console.log(data);
  };

  return (
    <form className=' flex w-full h-auto flex-col m-2 mb-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col '>
        <h1 className='flex mb-5 text-xl font-bold'>¡Bienvenido de nuevo!</h1>
        <label>Correo electronico</label>
        <input
          type='email'
          className='flex mb-4  rounded-lg p-3'
          placeholder='ingresa tu correo electronico'
          required
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^@ ]+@[^@ ]+.[^@ .]{2,}$/,
              message: "Email is not valid.",
            },
          })}
        />
        {errors.email && errors.email?.message}
      </div>
      <div className='flex flex-col '>
        <label>Contraseña</label>
        <input
          type={visible ? "text" : "password"}
          placeholder='ingresa tu contraseña'
          className='flex rounded-lg p-3'
          required
          onClick={() => setPassword(password)}
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password should be at-least 6 characters.",
            },
          })}
        />
        {visible ? (
          <AiFillEye
            className='absolute right-4 top-72'
            size={25}
            onClick={() => setVisible(false)}
          />
        ) : (
          <AiFillEyeInvisible
            className='absolute right-4 top-72'
            size={25}
            onClick={() => setVisible(true)}
          />
        )}
      </div>
      <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' />
          <p>recordarme</p>
        </div>
        <Link href='#'> ¿olvidaste la contraseña?</Link>
      </div>
      <button onClick={handleSubmit(onSubmit)} className='flex w-full bg-blue-600 rounded-lg text-center mt-5 p-4 justify-center hover:bg-green-800'>
        Iniciar Sesion
      </button>
      <div className="flex items-center justify-center mt-5">
        <p className="flex items-center justify-center">______________O continuar con________________</p>
      </div>
      <div className="flex gap-2 mt-6 items-center justify-center">
        <button  className="flex w-40 h-10 bg-gray-500 items-center rounded-lg text-xs gap-2"><FcGoogle className="flex ml-1 text-lg"/>continuar con google</button>
        <button  className="flex w-40 h-10 bg-gray-500 items-center rounded-lg text-xs gap-2"><BsFacebook className="flex ml-1 text-lg"/>continuar con facebook</button>
      </div>
    </form>
  );
};

export default FormLogin;
