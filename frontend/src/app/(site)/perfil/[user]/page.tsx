import { PerfilClient, PerfilProfessional } from "@/components";
import { Rol, UserInitial } from "@/interfaces/user";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import Loading from "../loading";
import { Metadata } from "next";

type Params = {
  params: {
    user: string;
  };
};

export async function generateMetadata({ params: { user } }: Params): Promise<Metadata> {
  const data = await fetch(`https://backend-web-burofy.onrender.com/getPerson/${user}`);
  const userData: UserInitial = await data.json();
  const { fullName } = userData;

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `Burofy | ${fullName}`,
    description: `${fullName} en Burofy: Administra tu cuenta y mantén tus datos actualizados. Explora nuestras opciones para conectar con abogados expertos o clientes, según tus necesidades legales.`,
  };
}

export default function page({ params }: { params: { user: string } }) {
  console.log(params);
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;

  return (
    <Suspense fallback={<Loading />}>
      {(rol as Rol) === "client" ? <PerfilClient /> : <PerfilProfessional />}
    </Suspense>
  );
}
