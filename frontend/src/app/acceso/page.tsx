import { Heroimage, FormLogin } from "@/components";

export const metadata = {
  title: "Burofy | Acceso",
};

export default function Login() {
  return (
    <section className='layout-out'>
      <FormLogin />
      <Heroimage />
    </section>
  );
}
