import React, { useEffect, useState } from "react";
import axios from "axios";

interface propsType {
  register: any;
  errors: any;
}

interface Country {
  countryName: string;
  countryCode: string;
  geonameId: number | string;
}

/* interface Province {
  name:string
} */

export default function RegisterStepTwo({ register, errors }: propsType) {
  const inputStyle =
    "h-[50px] rounded-lg my-2 px-3 bg-[#F0F0F0] border border-[#909090] lg:w-full ";
  const labelStyle = "flex px-1 flex-col h-[87px] my-3 lg:mx-5";
  const [countries, setCountries] = useState<Country[]>([]);
  /*   const [provinces, setProvinces] = useState<Province[]>([]); */
  /*   const lookForCities = async (id:number)=>{
    await axios.get(`http://api.geonames.org/childrenJSON?geonameId=${id}&username=EugeniaGramajo`)
      .then(response=>
        setProvinces(response.data.geonames));
  }; */
  useEffect(() => {
    axios
      .get("http://api.geonames.org/countryInfoJSON?username=EugeniaGramajo&orderby=name")
      .then((response) => {
        setCountries(response.data.geonames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className='w-[356px] text-left flex justify-center flex-col m-auto px-3 lg:grid lg:grid-cols-2 lg:w-full lg:mx-5'>
        <label className={labelStyle}>
          Nombre (*)
          <input
            placeholder='Nombre'
            className={inputStyle}
            name='name'
            {...register("name", { required: true })}
          ></input>
        </label>
        <label className={labelStyle}>
          Apellido (*)
          <input
            placeholder='Apellido'
            className={inputStyle}
            name='lastName'
            {...register("lastName", { required: true })}
          ></input>
        </label>
        <label className={labelStyle}>
          Seleccionar tu país (*)
          <select className={inputStyle} {...register("country", { required: true })}>
            <option disabled selected>
              Selecciona tu país
            </option>
            {countries?.map((a) => (
              <option value={a?.countryName} key={a?.countryCode}>
                {a?.countryName}
              </option>
            ))}
          </select>
        </label>
        <label className={labelStyle}>
          Seleccionar tu ciudad (*)
          <select className={inputStyle} {...register("city", { required: true })}></select>
        </label>
        <label className={labelStyle}>
          Número de telefono (*)
          <input
            placeholder='Ingrese su numero'
            type='number'
            className={inputStyle}
            name='phone'
            {...register("phone", { required: true })}
          ></input>
        </label>
        <label className={labelStyle}>
          Identificación (*)
          <input
            placeholder='Ingrese identificación'
            className={inputStyle}
            {...register("documentNumber", { required: true })}
          ></input>
        </label>
        <label className={labelStyle}>
          Número de matricula
          <input
            placeholder='Sin puntos ni espacios'
            className={inputStyle}
            {...register("license", { required: false })}
          ></input>
        </label>
        <label className={labelStyle}>
          Especialidad
          <select
            className={inputStyle}
            name='specialization'
            {...register("experience", { required: false })}
          ></select>
        </label>
        {errors.name && <span>Este campo es requerido</span>}
      </div>
    </>
  );
}
