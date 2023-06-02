import { Heroimage, SelectRol } from "@/components";

export const metadata = {
  title: "Burofy | Registro",
};

const RegisterPage = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center px-4 pt-10 bg-white md:p-24 lg:p-0 lg:flex-row lg:justify-between lg:items-start overflow-hidden order-1 absolute top-0 left-0 z-50'>
      <SelectRol />
      <Heroimage />
    </section>
  );
};

export default RegisterPage;
