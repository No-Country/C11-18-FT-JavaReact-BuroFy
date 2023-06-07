import { PerfilClient } from "@/components";
import { getClient } from "@/lib/services-burofy/getClient";
import { getProfessional } from "@/lib/services-burofy/getProfessional";
// import { UserInitial } from "@/interfaces/user";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

type Params = {
  params: {
    user: string;
  };
};

export async function generateMetadata({ params: { user } }: Params): Promise<Metadata> {
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
  const data =
    rol === "client" ? await getClient(user as string) : await getProfessional(user as string);

  if (!data) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `Burofy | ${data.fullName}`,
    description: `${data.fullName} en Burofy: Administra tu cuenta y mantén tus datos actualizados. Explora nuestras opciones para conectar con abogados expertos o clientes, según tus necesidades legales.`,
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
