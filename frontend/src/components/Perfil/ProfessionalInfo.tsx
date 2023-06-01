"useClient";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineFileUpload } from "react-icons/md";

export default function ProfessionalInfo(){
  return(
    <>
      <div className="min-w-[361px] w-fit lg:w-fit lg:max-w-[918px] shadow-md font-primary-roboto items-center  m-auto p-2 lg:p-10 pb-0 rounded-xl border-4 border-[#7FCEFF]">
        <header className="w-[331px] lg:w-full mb-8 border-b border-[#7FCEFF] flex justify-center">
          <h1 className="font-bold text-[20px] lg:text-[30px] mb-3">Datos profesionales</h1>
        </header>

        <div className="mb-4 space-y-6 border-b-2 border-[#AAAAAA]">
          <div className="lg:flex lg:flex-row lg:justify-between">
            <div className="" >
              <p className="text-[14px] ">Formación</p>
              <span className="flex">
                <GiGraduateCap size={25} color="#2E2E2E"/> 
                <h3 className="pl-2 text-[18px]">Universidad Nacional de Derecho</h3>
              </span>
            </div>
            <div className="flex lg:flex-col lg:pr-32 ">
              <span>No. de cédula</span>
              <span className="w-full pl-5 lg:pl-0">000000</span>
            </div>
          </div>
          <div className=" lg:flex lg:justify-between">
            <div>
              <h3>Modalidad de trabajo</h3>
              <ul className="text-[12px] flex space-x-4">
                <li className="border border-[#2E2E2E] rounded-lg w-fit px-3">Presencial</li>
                <li className="border border-[#2E2E2E] rounded-lg bg-[#2E2E2E] text-white w-fit px-3">Remoto</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3>Especializaciones</h3>
              <div className="lg:flex lg:space-x-4">
                <ul className="text-[12px] flex space-x-4">
                  <li className="border border-[#2E2E2E] rounded-lg bg-[#2E2E2E] text-white w-fit px-3">Derecho migratorio</li>
                  <li className="border border-[#2E2E2E] rounded-lg bg-[#2E2E2E] text-white w-fit px-3">Contratos</li>
                </ul>
                <button className=" text-[12px] border border-[#2E2E2E] rounded-lg bg-[#2E2E2E] text-white w-fit px-3">+ Agregar especialización</button>
              </div>
            </div>
          </div>
          <div className="pb-3 lg:px-5 lg:pb-7">
            <h3 className="mb-2">Experiencia</h3>
            <p className="w-[320px] lg:w-[790px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy...</p>
          </div>
        </div>

        <div >
          <h2 className="py-3">Documentación </h2>
          <div className="px-5 border-2 lg:flex lg:space-x-10 rounded-2xl py-7 border-lilac h-fit lg:mb-14">
            <p className="pb-5 text-center underline lg:pb-0 lg:m-auto lg:text-center lg:ml-5">Diploma.pdf</p>
            <button className="bg-[#2E2E2E] lg:m-auto flex text-center lg:flex-col w-[297px] lg:w-[189px] h-[65px] lg:h-[85px] rounded-md">
              <p className="flex text-[16px] justify-center lg:flex font-bold m-auto text-white lg:flex-wrap w-[333px] lg:w-[189px]"><MdOutlineFileUpload size={25} color="white" />Cargar otro archivo</p>
            </button>
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
          <button className="rounded-md  my-10 w-full lg:my-0 lg:w-[180px] h-[40px] text-white font-bold bg-sixnary">Guardar</button>
        </div>
      </div>
    </>
  );
}