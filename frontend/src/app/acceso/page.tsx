import { Heroimage } from "@/components";
import FormLogin from "../../components/FormLogin";

export const metadata = {
  title: "Burofy | Acceso",
};

export default function Login() {
  return (
    <section className=' w-full flex flex-col items-center px-4 pt-10 bg-white md:p-24 lg:p-0 lg:flex-row lg:justify-between lg:items-start overflow-x-hidden'>
      <FormLogin />

      <Heroimage />
    </section>
  );
}
