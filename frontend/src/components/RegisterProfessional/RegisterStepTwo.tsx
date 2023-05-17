import React, { useEffect, useState } from "react";
import axios from "axios";

interface propsType {
  register:any,
  errors:any
  }

interface Country {
  countryName:string,
  countryCode:string
}

export default function RegisterStepTwo({register, errors} : propsType){
  const inputStyle = "h-[50px] rounded-lg my-2 py-1 bg-[#F0F0F0] border border-[#909090]";
  const labelStyle = "flex px-1 flex-col h-[87px]";
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios
      .get("http://api.geonames.org/countryInfoJSON?username=EugeniaGramajo&orderby=name")
      .then(response => {
        setCountries(response.data.geonames);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(countries);

  return(
    <>
      <div className="w-[356px] text-left flex flex-col m-auto px-3 space-y-4">
        <label className={labelStyle}>Nombre(*)
          <input placeholder="   Nombre" className={inputStyle} name="name" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} ></input>
          {errors.name && <span>Este campo es requerido</span>}
        </label>
        <label className={labelStyle}>Apellido(*)
          <input placeholder="   Apellido" className={inputStyle} name="lastName" ></input>
        </label>
        <label className={labelStyle}>Seleccionar tu país (*)
          <select className={inputStyle}>
            <option>Selecciona tu país</option>
            {countries?.map(a=> <option key={a?.countryCode}>{a?.countryName}</option>)}
          </select>
        </label>
        <label className={labelStyle}>Seleccionar tu ciudad (*)
          <select className={inputStyle}></select>
        </label>
        <label className={labelStyle}>Número de telefono(*)
          <input placeholder="Ingrese su numero" type="number" className={inputStyle} name="phone" ></input>
        </label>
        <label className={labelStyle}>Identificación(*)
          <input placeholder="   Ingrese identificación" className={inputStyle} ></input>
        </label>
        <label className={labelStyle}>Número de matricula
          <input placeholder="   Sin puntos ni espacios" className={inputStyle} ></input>
        </label>
        <label className={labelStyle}>Especialidad
          <select className={inputStyle} name="especialidad"></select>
        </label>
        
      </div>
    </>
  );
} 