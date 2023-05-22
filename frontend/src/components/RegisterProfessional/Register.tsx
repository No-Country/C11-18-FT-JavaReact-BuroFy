"use client";
import React, { useState } from "react";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";
import { useForm } from "react-hook-form";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import ButtonFacebook from "../Buttons/ButtonFacebook";



export default function Register(){

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [next, setNext] = useState(true);

  const onSubmit = (data:any)=>{
    console.log(data)
  };

  return(
    <div className="m-auto lg:flex lg:flex-row">
      <div className="hidden lg:block lg:w-1/3">
        <h1>Aca va la imagen</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-full m-auto bg-white md:w-full md:h-full lg:w-2/3">
        <>
          <h1 className="m-5 text-xl font-extrabold">Registro de nuevo usuario</h1>
          <span className="flex justify-center my-6 space-x-10 text-sm ">
            {next?<button className="border-b-2 border-[#C600E0]" >1. Crear usuario</button>:<button onClick={()=>setNext(!next)}>1. Crear usuario</button>}
            {next?<button onClick={()=>setNext(!next)}>2. Datos personales</button>:<button className="border-b-2 border-[#C600E0]">2. Datos personales</button>}
          </span>
        </> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
       
            {next ? <RegisterStepOne register={register} errors={errors} /> : <RegisterStepTwo register={register} errors={errors} />}
          </div>
          <div className="flex justify-center">
            {next?<button className="w-[200px] h-[35px] bg-[#C600E0] rounded-lg my-7" onClick={()=>{setNext(false);}}>Siguiente</button>
              : <button className="w-[200px] h-[35px] bg-[#C600E0] rounded-lg my-7"> Crear Cuenta </button>}
          </div>
        </form>
        <>
          <h1>--------O continúa con---------</h1>
        </>
        <ButtonGoogle />
        <ButtonFacebook/>
        <footer className="py-5">Burofy genera conexiones</footer>
      </div>
    </div>
  );
}