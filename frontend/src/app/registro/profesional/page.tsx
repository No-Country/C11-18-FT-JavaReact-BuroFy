import { Heroimage, FormRegisterProfessional } from "@/components";

export const metadata = {
  title: "Burofy | Registro - Profesional",
  description: "Regístrate como abogado en Burofy: Únete a nuestra plataforma para conectarte con clientes que requieren tus servicios legales. Expande tu práctica y encuentra nuevos casos de manera rápida y eficiente."
};

const registerProffesional = () => {
  return (
    <section className='layout-auth'>
      <FormRegisterProfessional />
      <Heroimage />
    </section>
  );
};

export default registerProffesional;
