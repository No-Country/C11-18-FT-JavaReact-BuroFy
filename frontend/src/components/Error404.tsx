import React from "react";
import { BiLogInCircle, BiRegistered, BiHomeAlt2  } from "react-icons/bi";

export default function Error404() {
  return (
    <div className='flex flex-col '>
      <section className='flex flex-col item-center justify-center w-auto h-auto mt-9 lg:mt-40'>
        <h1 className='font-bold text-3xl m-auto lg:text-5xl lg:m-auto'>404 Not Found</h1>
        <h3 className='font-base text-xs m-auto mt-3 lg:text-xl lg:mt-3'>Whoops! That page doesn´t exist</h3>
      </section>
      <div className="flex flex-col w-[312px] h-auto lg:grid lg:grid-cols-4 lg:w-full lg:mt-[15rem]">
        <button className="w-3-4 h-[100px] bg-gray-500 mt-14 mx-4 rounded-lg text-white hover:bg-indigo-700 cursor-pointer lg:flex  lg:flex-col lg:items-center lg:justify-center "><BiHomeAlt2 className="text-2xl  ml-[8rem] lg:items-center lg:ml-[-1px] "/>Homepage</button>
        
        <button className="w-3-4 h-[100px] bg-gray-500 mt-8 mx-4 rounded-lg text-white hover:bg-indigo-700 cursor-pointer lg:flex lg:items-center lg:flex-col lg:justify-center  lg:mt-[3.5rem]"><BiLogInCircle className="text-2xl  ml-[8rem] lg:items-center lg:ml-[-1px] "/>Login</button>
        
        <button className="w-3-4 h-[100px] bg-gray-500 mt-8 mx-4 rounded-lg text-white hover:bg-indigo-700 cursor-pointer lg:flex lg:items-center lg:flex-col lg:justify-center  lg:mt-[3.5rem]"><BiRegistered className="text-2xl  ml-[8rem] lg:items-center lg:ml-[-1px] "/>Register</button>
       
        {/* este icon hay que cambiarlo y el nombre de la pagina */}
        <button className="w-3-4 h-[100px] bg-gray-500 mt-8 mx-4 rounded-lg text-white hover:bg-indigo-700 cursor-pointer lg:flex lg:items-center lg:flex-col lg:justify-center  lg:mt-[3.5rem]"><BiHomeAlt2 className="text-2xl  ml-[8rem] lg:items-center lg:ml-[-1px] "/>another</button>
        
      </div>
      <footer className="flex items-center justify-center text-xs mt-20">
        <h4>Burofy genera conexiones</h4>
      </footer>
    </div>
  );
}
