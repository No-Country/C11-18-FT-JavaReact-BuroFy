"use client";
import React, { useState } from "react";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";



export default function Register(){
  const [state, setState] = useState({
    email:"",
    password:"",
    rePassword:"",
    country:"",
    city:"",
    name:"",
    lastName:"",
    phone:0,
    identification:"",
    matricula:0,
    specialization:""
  });
  const [next, setNext] = useState(true);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return(
    <div className="flex flex-col items-center justify-center m-auto bg-white min-h-fit">
      <h1 className="bg-slate-500 h-[55px] w-full">Aca va la navBar</h1>
      <>
        <h1 className="m-5 text-xl font-extrabold">Registro de nuevo usuario</h1>
        <span className="flex justify-center my-6 space-x-10 text-sm ">
          {next?<button className="underline" >1. Crear usuario</button>:<button onClick={()=>setNext(!next)}>1. Crear usuario</button>}
          {next?<button onClick={()=>setNext(!next)}>2. Datos personales</button>:<button className="underline ">2. Datos personales</button>}
        </span>
      </>
      <div>
        {next ? <RegisterStepOne state={state} changeHandler={changeHandler} /> : <RegisterStepTwo state={state} changeHandler={changeHandler}/>}
      </div>
      <>
        {next?<button className="w-[200px] h-[35px] bg-[#B1B1B1] rounded-lg my-7" onClick={()=>{setNext(false);}}>Siguiente</button>
          : <button className="w-[200px] h-[35px] bg-[#B1B1B1] rounded-lg my-7"> Crear Cuenta </button>}
      </>
      <>
        <h1>--------O continúa con---------</h1>
      </>
      <h1 className="py-5">Aca va lo de auth</h1>
      <h1 className="py-5">Burofy genera conexiones</h1>
    </div>
  );
}