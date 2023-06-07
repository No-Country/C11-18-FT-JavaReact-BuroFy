import { Header, Spinner } from "@/components";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Rol } from "@/interfaces/user";
import { getClient } from "@/lib/services-burofy/getClient";
import { getProfessional } from "@/lib/services-burofy/getProfessional";

export default async function RootLayoutSite({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
  const id = cookieStore.get("id")?.value;

  const user =
    rol === "client" ? await getClient(id as string) : await getProfessional(id as string);

  return (
    <>
      {user ? (
        <main className='w-full min-h-screen md:grid md:grid-cols-[20rem_1fr] md:grid-rows-[20rem_1fr]'>
          <Header user={user} rol={rol as Rol} />
          <section className='col-start-2 col-end-2 row-start-2 row-end-2 '>{children}</section>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
