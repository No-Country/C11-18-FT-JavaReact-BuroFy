import { PerfilClient, PerfilProfessional } from "@/components";
import { Rol } from "@/interfaces/user";
import { cookies } from "next/headers";
import React from "react";

export default function page({params} : { params: { user: string }}) {
  console.log(params);
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;

  return (
    <>
      { rol as Rol === "client" ? (<PerfilClient/> ) : (<PerfilProfessional/>)}
    </>
  );
}
