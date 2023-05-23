import { Heroimage } from "@/components";
import { SelecRol } from "@/components/SelecRol";

export const metadata = {
  title: "Burofy | Registro",
};

const RegisterPage = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center px-4 pt-10 bg-white md:p-24 lg:p-0 lg:flex-row lg:justify-between lg:items-start overflow-x-hidden order-1'>
      <SelecRol />
      <Heroimage />
    </section>
  );
};

export default RegisterPage;
