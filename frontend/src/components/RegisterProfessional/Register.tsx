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
    <div className="h-[560px] m-auto bg-white items-center flex flex-col justify-center">
      <>
        <h1 className="m-5 text-xl font-extrabold">Registro de nuevo usuario</h1>
        <span className="flex justify-center my-5 space-x-10 text-sm ">
          {next?<p className="underline">1. Crear usuario</p>:<p>1. Crear usuario</p>}
          {next?<p>2. Datos personales</p>:<p className="underline">2. Datos personales</p>}
        </span>
      </>
      <div>
        {next ? <RegisterStepOne state={state} changeHandler={changeHandler} /> : <RegisterStepTwo/>}
      </div>
      <>
        <button className="w-[200px] h-[35px] bg-[#B1B1B1] rounded-lg my-7" onClick={()=>{setNext(false);}}>Siguiente</button>
      </>
      <>
        <h1>--------O continúa con---------</h1>
      </>
    </div>
  );
}