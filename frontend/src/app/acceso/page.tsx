import React from "react";
import FormLogin from "../../components/FormLogin";

export const metadata = {
  title: "Burofy | Acceso",
};

export default function Login() {
  return (
    <section className='h-screen w-full p-4 bg-white md:ml-64 md:p-24'>
      <FormLogin />
    </section>
  );
}
