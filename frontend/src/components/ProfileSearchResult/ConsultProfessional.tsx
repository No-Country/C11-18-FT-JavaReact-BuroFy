"use Client";
import React from "react";

export default function ConsultProfessional(){
  return(
    <>
      <div className="p-4">
        <header>
          <h1 className="text-[18px] pb-3 font-bold">Realizar una consulta</h1>
        </header>
        <form>
          <textarea placeholder="Escribí tu consulta acá" className="w-[340px] rounded-md bg-[#F1F1F1] border-[#D3D3D4] min-h-[126px] caret-lilac"></textarea>
          <label className="flex text-[12px] justify-between p-4">
            <p>Limite de caracteres</p>
            <p>0/500</p> 
          </label>
          <input type="submit" className="w-full text-[16px] font-bold text-white rounded-md bg-sixnary h-[40px]" value="Realizar Consulta"></input>
        </form>
      </div>
    </>
  );
}