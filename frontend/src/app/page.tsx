import { CardApplicationEmpty, CardReviewEmpty } from "@/components";

const HomePage = () => {
  return (
    <>
      <section className=' bg-white p-6 lg:flex lg:justify-center '>
        <span className='m-4 text-[#616161] lg:hidden'>Tienes, 0 consultas</span>
        <article className='lg:flex'>
          {/* <CardServices />
          <CardReview /> */}
          <CardReviewEmpty />
          <CardApplicationEmpty />
        </article>
      </section>
      <footer className='flex justify-center mt-[250px] md:hidden lg:hidden'>
        <span className='text-center text-xs font-normal'>Burofy genera conexiones.</span>
      </footer>
    </>
  );
};

export default HomePage;
