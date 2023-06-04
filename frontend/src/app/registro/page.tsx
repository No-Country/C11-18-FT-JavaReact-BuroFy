import { Heroimage, SelectRol } from "@/components";

export const metadata = {
  title: "Burofy | Registro",
};

const RegisterPage = () => {
  return (
    <section className='layout-out'>
      <SelectRol />
      <Heroimage />
    </section>
  );
};

export default RegisterPage;
