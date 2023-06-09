import Image from "next/image";

const Heroimage = () => {
  return (
    <div className='hidden lg:block lg:order-1 w-full h-screen relative'>
      <Image
        className='absolute top-10 left-[50%] translate-x-[-50%]'
        src='/assets/title-burofy-white.svg'
        alt='title of burofy in white'
        width={200}
        height={150}
      />
      <Image
        src='/assets/hero-image-burofy.png'
        alt='hero image about burofy'
        height={800}
        width={800}
        className='w-full h-full'
        priority={true}
        placeholder='blur'
      />
      <h2 className='absolute bottom-48 left-[50%] translate-x-[-50%] font-bold text-5xl text-white leading-12 text-center w-[521px]'>
        Burofy genera conexiones.
      </h2>
      <p className='absolute bottom-5 text-center w-[572px] left-[50%] translate-x-[-50%] text-white text-2xl font-semibold leading-9'>
        Tu aliado legal digital para resolver tus consultas y recibir asesoramiento experto de
        manera rápida y confiable.
      </p>
    </div>
  );
};

export default Heroimage;
