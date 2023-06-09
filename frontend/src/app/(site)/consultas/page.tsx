import { Rol } from "@/interfaces/user";
import { MyConsult } from "@/components/Consults/MyConsult";
import { getConsultationClient } from "@/lib/services-burofy/getConsultationClient";
import { getConsultationProfessional } from "@/lib/services-burofy/getConsultationProfessional";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { CardApplicationEmpty } from "@/components";
import Loading from "../loading";

export const metadata = {
  title: "Burofy | Consultas",
};

export default async function consultas() {
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
  const id = cookieStore.get("id")?.value;

  const consultations =
    (rol as Rol) === "client"
      ? await getConsultationClient(id as string)
      : await getConsultationProfessional(id as string);

  return (
    <section>
      <Suspense fallback={<Loading />}>
        {consultations ? (
          <>
            <MyConsult consultations={consultations} />
          </>
        ) : (
          <CardApplicationEmpty />
        )}
      </Suspense>
    </section>
  );
}
