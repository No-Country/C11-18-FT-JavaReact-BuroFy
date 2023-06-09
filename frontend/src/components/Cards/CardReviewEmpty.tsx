import { motion } from "framer-motion";
import React from "react";

export default function CardReviewEmpty() {
  return (
    <>
      <motion.div
        className=' p-5 m-3 bg-white border border-[#7FCEFF] rounded-lg drop-shadow-xl text-center lg:border-2 lg:w-[450px] lg:h-[249px] lg:p-12 lg:space-y-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className='mb-2 text-base font-normal tracking-tight text-gray-900 lg:text-[25px] lg:font-bold'>
          Aún no haz realizado reseñas
        </h5>

        <p className='mb-3  font-medium text-xs  text-gray-500 lg:text-[14px] lg:px-3 lg:text lg:font-norma lg:text-center'>
          Aquí encontraras las reseñas que haz realizado a los profesionales sobre tus consultas
          realizadas.
        </p>

        <div className='flex justify-center'>
          <svg
            width='42'
            height='40'
            viewBox='0 0 42 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.0001 27.1771L27.5626 31.1875L25.8438 23.6875L31.6251 18.6875L24.0209 18.0104L21.0001 10.9271V27.1771ZM8.1355 39.8333L11.5209 25.1979L0.166748 15.3542L15.1667 14.0521L21.0001 0.25L26.8334 14.0521L41.8334 15.3542L30.4792 25.1979L33.8647 39.8333L21.0001 32.0729L8.1355 39.8333Z'
              fill='black'
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
