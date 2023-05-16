import React from "react";
import { register } from "./interfaces";

interface propsType {
  state: register,
  // eslint-disable-next-line no-unused-vars
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function RegisterStepTwo({state, changeHandler}: propsType){
  const inputStyle = "h-[50px] rounded-lg my-2 py-1 bg-[#F0F0F0] border border-[#909090]";
  const labelStyle = "flex px-1 flex-col h-[87px]";
  return(
    <>
      <div className="w-[356px] text-left flex flex-col m-auto px-3 space-y-4">
        <label className={labelStyle}>Nombre(*)
          <input className={inputStyle} name="name" value={state.name} onChange={changeHandler}></input>
        </label>
        <label className={labelStyle}>Apellido(*)
          <input className={inputStyle} name="lastName" value={state.lastName} onChange={changeHandler}></input>
        </label>
        <label className={labelStyle}>Seleccionar tu país (*)
          <select className={inputStyle} ></select>
        </label>
        <label className={labelStyle}>Seleccionar tu ciudad (*)
          <select className={inputStyle}></select>
        </label>
        <label className={labelStyle}>Número de telefono(*)
          <input type="number" className={inputStyle} name="phone" value={state.phone} onChange={changeHandler}></input>
        </label>
        <label className={labelStyle}>Identificación(*)
          <input className={inputStyle} onChange={changeHandler}></input>
        </label>
        <label className={labelStyle}>Número de matricula
          <input className={inputStyle} onChange={changeHandler}></input>
        </label>
        <label className={labelStyle}>Especialidad
          <input className={inputStyle} onChange={changeHandler}></input>
        </label>
      </div>
    </>
  );
} 