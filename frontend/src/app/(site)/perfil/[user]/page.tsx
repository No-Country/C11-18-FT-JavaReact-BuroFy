import { PerfilClient } from "@/components";
// import { UserInitial } from "@/interfaces/user";
import type { Metadata } from "next";
import React from "react";

type Params = {
  params: {
    user: string;
  };
};

export async function generateMetadata({ params: { user } }: Params): Promise<Metadata> {
  // const { fullName }: Pick<UserInitial, "fullName"> = await fetch(`https://backend-web-burofy.onrender.com/getPerson/${user}`);

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    // title: `Burofy | ${fullName}`,
    // description: `${fullName} en Burofy: Administra tu cuenta y mantén tus datos actualizados. Explora nuestras opciones para conectar con abogados expertos o clientes, según tus necesidades legales.`,
  };
}

export default function profilePage({ params }: Params) {
  console.log(params);

  return (
    <>
      <PerfilClient />
    </>
  );
}
