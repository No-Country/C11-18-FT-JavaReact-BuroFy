"use client";
import React from "react";

export default function SearchResultFIlter() {
  return (

    <>
      <div className="flex gap-12 justify-center border-b-2 border-solid border-gray-200 p-6 mb-5">

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="px-2 py-2 lg:w-[230px] text-sm  text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  text-center inline-flex items-center " type="button">Modalidad de consulta <svg className="w-4 h-4 ml-12" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2">Remoto</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Presencial</a>
            </li>
          </ul>
        </div>
        
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="px-2 py-2 lg:w-[230px] text-sm  text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  text-center inline-flex items-center " type="button">Modalidad de consulta <svg className="w-4 h-4 ml-12" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2">Proximos 3 dias</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Proximos 3 dias</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Proximos 3 dias</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Proximos 3 dias</a>
            </li>
          </ul>
        </div>

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="px-2 py-2 lg:w-[230px] text-sm  text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  text-center inline-flex items-center " type="button">Modalidad de consulta <svg className="w-4 h-4 ml-12" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">Sign out</a>
            </li>
          </ul>
        </div>

        <button type="button" className=" text-gray-500 underline">Borrar fitros</button>
      </div>
   
    </>
  );
}
