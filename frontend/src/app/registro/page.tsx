import { Heroimage, SelectRol } from "@/components";

export const metadata = {
  title: "Burofy | Registro",
  description:
    "Regístrate en Burofy: Únete a nuestra plataforma para conectar con abogados expertos en diversas áreas del derecho. Encuentra la asesoría legal que necesitas de manera fácil y rápida.",
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
