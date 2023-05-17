import React, { useState } from "react";

interface propsType {
register:any,
errors:any
}

export default function RegisterStepOne({register, errors}: propsType){

  const inputStyle = "h-[50px] rounded-lg my-2 px-3 bg-[#F0F0F0] border border-[#909090]";
  const [confirm, setConfirm] = useState({
    password:"",
    rePassword:"",
  });
  return(
    <div className="w-[356px] text-left flex flex-col m-auto px-3 space-y-4">
      <label className="flex px-1 flex-col h-[87px]">  Nombre de usuario (*)
        <input name="email" className={ inputStyle } placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}></input>
        {errors.name && <span>Este campo es requerido</span>}
      </label>
      <label  className="flex px-1 flex-col h-[87px]">Contraseña (*)
        <input name="password" value={confirm.password} className={ inputStyle } placeholder="Crear contraseña" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,12}$/ })} onChange={(e)=>{setConfirm({...confirm,password:e.target.value});}}></input>
      </label>
      <label  className="flex px-1 flex-col h-[87px]">Verifica tu contraseña (*)
        <input name="rePassword"className={ inputStyle } value={confirm.rePassword} placeholder="Repetir contraseña" onChange={(e)=>{setConfirm({...confirm,rePassword:e.target.value});}}></input>
      </label>
      {confirm.password !== confirm.rePassword ? "Las contraseñas no coinciden" : ""}
    </div>
  );
}