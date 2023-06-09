"use client";

import React, { useEffect } from "react";
import { Consultation, ObjectConsultation } from "@/interfaces/consultation";
import { CardSearch } from "../Cards/CardSearch";
import { setConsultations } from "@/redux/features/consultationSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

export const MyConsult = ({ consultations }: { consultations: Consultation[] }) => {
  console.log(consultations);
  const dispatch = useAppDispatch();
  const { consults }: ObjectConsultation = useAppSelector((state) => state.consultation);

  useEffect(() => {
    if (consultations) {
      dispatch(setConsultations(consultations));
    }
  }, [consultations, dispatch]);

  return (
    <motion.div
      className='items-center justify-between w-auto h-auto lg:relative lg:items-center lg:justify-between lg:w-auto lg:h-auto'
      initial={{ opacity: 0 }}
      animate={{
        opacity: !consultations ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
    >
      <span className='flex p-5 lg:ml-[21.5rem]'>Tienes, 0 consultas</span>
      <div className='p-5 m-3  items-center justify-center flex-col w-[373px] h-auto rounded-lg drop-shadow-xl text-center  lg:h-[249px] md:w-[1000px]  md:ml-20 2xl:min-w-full  2xl:mx-auto'>
        <div className='grid grid-cols-2 gap-5 mb-3'>
          <label htmlFor='fecha' className='sr-only'>
            fecha
          </label>
          <select
            id='fecha'
            className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option className='text-xs' selected>
              Fecha
            </option>
            <option value=''>Mayor a Menor</option>
            <option value=''>Menor a Mayor</option>
          </select>

          <label htmlFor='status' className='sr-only'>
            status
          </label>
          <select
            id='status'
            className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option className='text-xs' selected>
              Status
            </option>
            <option value='new'>Nuevo</option>
            <option value='answered'>Contestado</option>
            <option value='close'>Cerrado</option>
          </select>
        </div>

        <label htmlFor='ordenar' className='sr-only'>
          Ordenar por
        </label>
        <select
          id='ordenar'
          className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        >
          <option className='text-xs' selected>
            Ordenar por
          </option>
          <option value='up'>Mayor a Menor</option>
          <option value='down'>Menor a Mayor</option>
        </select>
      </div>

      {consults && consults.map((consult) => <CardSearch key={consult.id} consult={consult} />)}

      <button className='flex p-2 mt-10 gap-4 bg-[#2e2e2e] hover:scale-110 transition active:scale-95 text-white hover:bg-[#d3d3d3] hover:text-black items-center w-full justify-center text-xs rounded-lg 2xl:mb-5'>
        <AiOutlineArrowDown />
        Cargar más
      </button>
    </motion.div>
  );
};
