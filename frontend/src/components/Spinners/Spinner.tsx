import Image from "next/image";

const Spinner = () => {
  return (
    <section className='fixed h-screen w-full bg-white mx-auto flex flex-col gap-20 justify-center items-center z-[98] top-0 left-0'>
      <Image
        src='/assets/header-burofy.svg'
        alt='title burofy organization'
        height={250}
        width={250}
      />
      <div className="w-24 h-24 bg-gradient-to-r from-lilac to-sky-blue animate-spinner-square before:content-[''] before:z-index-[-1] before:absolute before:bg-gradient-to-r before:from-sky-blue before:to-lilac before:blur-xl before:scale-[0.95] z-[99]"></div>
    </section>
  );
};

export default Spinner;
