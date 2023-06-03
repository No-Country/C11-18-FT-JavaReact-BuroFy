import { Heroimage, FormRegisterClient } from "@/components";

export const metadata = {
  title: "Burofy | Registro - Cliente",
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
