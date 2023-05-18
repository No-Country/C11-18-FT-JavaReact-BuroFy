"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";



export default function Register(){

  const { register, handleSubmit, formState: { errors } } = useForm();
  const inputStyle = "h-[50px] rounded-lg my-2 px-3 bg-[#F0F0F0] border border-[#909090]";
  const [confirm, setConfirm] = useState({
    password:"",
    rePassword:"",
  });
  const onSubmit = ()=>{};

  return(
    <div className="m-auto lg:flex lg:flex-row">
      <div className="hidden lg:block lg:w-1/3">
        <h1>Aca va la imagen</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-full m-auto bg-white md:w-full md:h-full lg:w-2/3">
        <>
          <h1 className="m-5 text-xl font-extrabold">Registro de nuevo usuario</h1>
          <span className="flex justify-center my-6 space-x-10 text-sm ">

          </span>
        </> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <div className="w-[356px] text-left flex flex-col m-auto px-3 space-y-4">
      <label className="flex px-1 flex-col h-[87px]">  Nombre de usuario (*)
        <input className={ inputStyle } placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}></input>
        {errors.name && <span>Este campo es requerido</span>}
      </label>
      <label  className="flex px-1 flex-col h-[87px]">Contraseña (*)
        <input value={confirm.password} className={ inputStyle } placeholder="Crear contraseña" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,12}$/ })} onChange={(e)=>{setConfirm({...confirm,password:e.target.value});}}></input>
      </label>
      <label  className="flex px-1 flex-col h-[87px]">Verifica tu contraseña (*)
        <input name="rePassword"className={ inputStyle } value={confirm.rePassword} placeholder="Repetir contraseña" onChange={(e)=>{setConfirm({...confirm,rePassword:e.target.value});}}></input>
      </label>
      {confirm.password !== confirm.rePassword ? "Las contraseñas no coinciden" : ""}
    </div>

          </div>
          <div className="flex justify-center">
            <button className="w-[200px] h-[35px] bg-primary rounded-lg my-7"> Crear Cuenta </button>
          </div>
        </form>
        <>
          <h1>--------O continúa con---------</h1>
        </>
        <h1 className="py-5">Aca va lo de auth</h1>
        <footer className="py-5">Burofy genera conexiones</footer>
      </div>
    </div>
  );
}