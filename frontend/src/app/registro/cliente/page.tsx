import { Heroimage, FormRegisterClient } from "@/components";

export const metadata = {
  title: "Burofy | Registro - Cliente",
  description: "Regístrate como cliente en Burofy: Crea tu cuenta para encontrar abogados expertos en diversas áreas del derecho. Conéctate con el profesional adecuado y resuelve tus necesidades legales fácilmente."
};
const registerClient = () => {
  return (
    <section className='layout-out'>
      <FormRegisterClient />
      <Heroimage />
    </section>
  );
};

export default registerClient;
