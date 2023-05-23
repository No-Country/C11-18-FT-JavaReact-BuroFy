import Register from "@/components/RegisterClient/Register";
import { Heroimage } from "@/components";

export const metadata = {
  title: "Burofy | Registro - Cliente",
};

const registerClient = () => {
  return (
    <section className='w-full flex flex-col items-center px-4 pt-10 bg-white md:p-24 lg:p-0 lg:flex-row lg:justify-between lg:items-start overflow-x-hidden'>
      <Register />
      <Heroimage />
    </section>
  );
};

export default registerClient;
