import { CardServices, CardReview } from "@/components";


const HomePage = async () => {

  
  return (
    <>
      <section className=' bg-white p-4 lg:flex lg:justify-center z-50 lg:overflow-hidden'>
        <span className='text-[#616161] lg:hidden'>Tienes, 0 consultas</span>
        <article className='lg:flex lg:space-x-7 lg:justify-center lg:mt-2 mt-5 '>
          <CardServices />
          <CardReview />
          {/* <CardReviewEmpty />
          <CardApplicationEmpty /> */}
        </article>
      </section>
      <footer className='flex justify-center mt-[250px] md:hidden lg:hidden'>
        <span className='text-center text-xs font-normal'>Burofy genera conexiones.</span>
      </footer>
    </>
  );
};

export default HomePage;
