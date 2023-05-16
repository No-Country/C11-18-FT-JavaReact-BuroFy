import React from "react";
import { register } from "./interfaces";

interface propsType {
  state: register,
  // eslint-disable-next-line no-unused-vars
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function RegisterStepOne({state, changeHandler}: propsType){

  const inputStyle = "h-[50px] rounded-lg my-2 py-1 bg-[#F0F0F0] border border-[#909090]";

  return(
    <div className="w-[356px] text-left flex flex-col m-auto px-3 space-y-4">
      <label className="flex px-1 flex-col h-[87px]">  Nombre de usuario (*)
        <input name="email" className={ inputStyle } placeholder="  Email" value={state.email} onChange={changeHandler}></input>
      </label>
      <label  className="flex px-1 flex-col h-[87px]">Contraseña (*)
        <input name="password" className={ inputStyle } placeholder="  Crear contraseña" value={state.password} onChange={changeHandler}></input>
      </label>
      <label  className="flex px-1 flex-col h-[87px]">Verifica tu contraseña (*)
        <input name="rePassword"className={ inputStyle } placeholder="  Repetir contraseña" value={state.rePassword} onChange={changeHandler}></input>
      </label>
    </div>
  );
}