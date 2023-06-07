import { Heroimage, FormLogin } from "@/components";

export const metadata = {
  title: "Burofy | Acceso",
  description:
    "Inicia sesión en Burofy: Accede a nuestra plataforma para conectarte con abogados especializados en diferentes áreas del derecho. Encuentra apoyo legal de forma rápida y sencilla.",
};

export default function Login() {
  return (
    <section className='layout-auth'>
      <FormLogin />
      <Heroimage />
    </section>
  );
}
