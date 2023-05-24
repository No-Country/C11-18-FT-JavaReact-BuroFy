import Register from "@/components/RegisterClient/Register";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Burofy | Registro - Cliente",
};

const registerClient = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 pt-10 bg-white md:p-24 lg:p-0 lg:flex-row lg:justify-between lg:items-start overflow-x-hidden">
      <Register />
      <div className="hidden lg:block lg:order-1 w-full h-screen">
        <Image src="/hero-image-burofy.png" alt="hero image about burofy" height={800} width={800} className="w-full h-full"/>
      </div>
    </section>
  );
};

export default registerClient;
