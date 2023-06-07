import { PerfilClient } from "@/components";
import { cookies } from "next/headers";
import React from "react";

export default function page({params} : { params: { user: string }}) {
  console.log(params);
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
    

  return (
    <>
      <PerfilClient/>
      
    </>
  );
}
