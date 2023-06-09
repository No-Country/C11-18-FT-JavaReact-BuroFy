"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { setConsultations } from "@/redux/features/consultationSlice";
import React, { useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import CardServicesChild from "./CardServicesChild";
import { Consultation, ObjectConsultation } from "@/interfaces/consultation";
import { motion } from "framer-motion";

type CardServicesProps = {
  consultations: Consultation[];
};

export default function CardServices({ consultations }: CardServicesProps) {
  console.log(consultations);
  const dispatch = useAppDispatch();
  const { consults }: ObjectConsultation = useAppSelector((state) => state.consultation);

  useEffect(() => {
    if (consultations) {
      dispatch(setConsultations(consultations));
    }
  }, [consultations, dispatch]);

  return (
    <>
      <motion.div
        className=' bg-white mb-3 border-2 border-[#C600E0] rounded-lg drop-shadow-xl lg:border-[3px] w-[363px] lg:w-[459px] lg:h-auto'
        initial={{ opacity: 0 }}
        animate={{
          opacity: !consultations ? 0 : 1,
        }}
        transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      >
        <div className='flex justify-between rounded-tr-lg rounded-tl-lg bg-[#EBEBEB] lg:w-[453px]  lg:h-[60px] lg:items-center'>
          <h2 className='lg:font-bold lg:text-[20px] m-5 lg:leading-[26px]'>Mis servicios</h2>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>Your Email</label>
          <button
            id='dropdown-button'
            data-dropdown-toggle='dropdown'
            className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-normal text-center text-gray-900  border-none border-b-2 border-gray-400 w-[140px]'
            type='button'
          >
            Ordernar por{" "}
            <svg
              aria-hidden='true'
              className='w-4 h-4 ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            id='dropdown'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
          >
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdown-button'
            >
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  Fecha
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  T
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  Design
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2'>
                  Logos
                </button>
              </li>
            </ul>
          </div>
        </div>
        {consultations &&
          consults.map((consult) => <CardServicesChild key={consult.id} consult={consult} />)}
        <div className='p-3 lg:p-4 lg:mt-1 space-y-4 '>
          <div className='flex justify-center lg:justify-end mt-5'>
            <button
              type='button'
              className='text-white bg-[#24292F] justify-center rounded-md w-[377px] h-[40px] lg:w-[136px] lg:h-[30px] lg:font-bold lg:text-smlg: px-5 lg:py-1.5 text-center inline-flex items-center mr-1  gap-1'
            >
              <AiFillEye />
              Ver todos
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
