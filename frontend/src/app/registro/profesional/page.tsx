import { Heroimage, FormRegisterProfessional } from "@/components";

export const metadata = {
  title: "Burofy | Registro - Profesional",
};

const registerProffesional = () => {
  return (
    <section className='layout-out'>
      <FormRegisterProfessional />
      <Heroimage />
    </section>
  );
};

export default registerProffesional;
