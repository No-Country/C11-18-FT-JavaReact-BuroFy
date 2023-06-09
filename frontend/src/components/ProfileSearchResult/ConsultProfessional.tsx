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
          <textarea placeholder="Escribí tu consulta acá" className="min-w-[340px] w-full rounded-md bg-[#F1F1F1] border-[#D3D3D4] min-h-[126px] caret-lilac"></textarea>
          
          <label className="flex text-[12px] items-center justify-between p-4">
            <p>Limite de caracteres</p>
            <span className="flex items-center space-x-5">
              <p>0/500</p>
              <button type="submit" className="w-[110px] hidden xl:block text-[16px] font-bold text-white  rounded-md h-[40px] hover:scale-110 bg-black hover:bg-primary active:scale-95 transition" value="Consultar"></button> 
            </span>
          </label>
            
          
          <input type="submit" className="w-full xl:hidden text-[16px] font-bold text-white rounded-md bg-sixnary h-[40px]" value="Realizar Consulta"></input>
        </form>
      </div>
    </>
  );
}