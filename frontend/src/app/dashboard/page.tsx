import React from "react";
import CardApplicationEmpty from "@/components/CardApplicationEmpty";
import CardReviewEmpty from "@/components/CardReviewEmpty";

export default function Dashboard() {
  return (
    <>
      <main className=' bg-white p-6 lg:flex lg:justify-center'>
        <span className='m-4 text-[#616161] lg:hidden'>Tienes, 0 consultas</span>
        <section className='space-y-10 lg:flex lg:ms-56 lg:space-y-3 lg:mt-7'>
          <CardApplicationEmpty />
          <CardReviewEmpty />
        </section>
      </main>
      <footer className='flex justify-center mt-[250px] md:hidden lg:hidden'>
        <span className='text-center text-xs font-normal'>Burofy genera conexiones.</span>
      </footer>
    </>
  );
}
