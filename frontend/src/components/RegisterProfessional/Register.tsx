"use client";
import React, { useState } from "react";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";
import { useForm } from "react-hook-form";



export default function Register(){

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [next, setNext] = useState(true);

  const onSubmit = ()=>{};

  return(
    <div className="flex flex-col items-center justify-center bg-white min-h-fit">
      <h1 className="bg-slate-500 h-[55px] w-full">Aca va la navBar</h1>
      <>
        <h1 className="m-5 text-xl font-extrabold">Registro de nuevo usuario</h1>
        <span className="flex justify-center my-6 space-x-10 text-sm ">
          {next?<button className="underline" >1. Crear usuario</button>:<button onClick={()=>setNext(!next)}>1. Crear usuario</button>}
          {next?<button onClick={()=>setNext(!next)}>2. Datos personales</button>:<button className="underline ">2. Datos personales</button>}
        </span>
      </> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
       
          {next ? <RegisterStepOne register={register} errors={errors} /> : <RegisterStepTwo register={register} errors={errors} />}
        </div>
        <>
          {next?<button className="w-[200px] h-[35px] bg-[#B1B1B1] rounded-lg my-7" onClick={()=>{setNext(false);}}>Siguiente</button>
            : <button className="w-[200px] h-[35px] bg-[#B1B1B1] rounded-lg my-7"> Crear Cuenta </button>}
        </>
      </form>
      <>
        <h1>--------O continúa con---------</h1>
      </>
      <h1 className="py-5">Aca va lo de auth</h1>
      <h1 className="py-5">Burofy genera conexiones</h1>
    </div>
  );
}