import React from "react";
import FormLogin from "../../components/FormLogin";
import Image from "next/image";

export const metadata = {
  title: "Burofy | Acceso",
};

export default function Login() {
  return (
    <section className=' w-full flex flex-col items-center px-4 pt-10 bg-white md:p-24 lg:p-0 lg:flex-row lg:justify-between lg:items-start overflow-x-hidden'>
      <FormLogin />
      <div className='hidden lg:block lg:order-1 w-full h-screen'>
        <Image
          src='/hero-image-burofy.png'
          alt='hero image about burofy'
          height={800}
          width={800}
          className='w-full h-full'
        />
      </div>
    </section>
  );
}
