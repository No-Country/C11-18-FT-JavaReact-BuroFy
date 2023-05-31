// import CardApplicationEmpty from "@/components/CardApplicationEmpty";
// import CardReviewEmpty from "@/components/CardReviewEmpty";
import { CardServices, CardReview } from "@/components";

const HomePage = () => {
  return (
    <>
      <section className=' bg-white p-6 lg:flex lg:justify-center'>
        <span className='m-4 text-[#616161] lg:hidden'>Tienes, 0 consultas</span>
        <article className='lg:flex lg:space-x-7 lg:justify-center lg:mt-7 '>
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