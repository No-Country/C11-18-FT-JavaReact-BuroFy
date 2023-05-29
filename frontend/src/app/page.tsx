import React from "react";
import CardApplicationEmpty from "@/components/CardApplicationEmpty";
import CardReviewEmpty from "@/components/CardReviewEmpty";
import CardServices from "@/components/CardServices";
import CardReview from "@/components/CardReview";

const HomePage = () => {
  return (
    <>
      <main className=' bg-white p-6 lg:flex lg:justify-center'>
        <span className='m-4 text-[#616161] lg:hidden'>Tienes, 0 consultas</span>
        <section className='lg:flex lg:space-x-5 lg:ms-56 lg:mt-7 '>
          <CardServices />
          <CardReview />
        </section>
        <section className='space-y-10 lg:flex lg:ms-70 lg:mt-7 lg:space-x-5'>
          {/* <CardApplicationEmpty />
          <CardReviewEmpty /> */}
          {/* <CardServices />
          <CardReview /> */}
        </section>
      </main>
      <footer className='flex justify-center mt-[250px] md:hidden lg:hidden'>
        <span className='text-center text-xs font-normal'>Burofy genera conexiones.</span>
      </footer>
    </>
  );
};

export default HomePage;
