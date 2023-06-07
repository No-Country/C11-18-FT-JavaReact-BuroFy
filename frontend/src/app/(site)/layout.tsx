import { Header, Spinner } from "@/components";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Rol } from "@/interfaces/user";

export default async function RootLayoutSite({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
  const id = cookieStore.get("id")?.value;

  const data = rol === "client" ? await fetch(`${process.env.NEXT_BASE_URL_BUROFY}/getClient/${id}`,{
    next: { revalidate: 900 },
  }) : await fetch(`${process.env.NEXT_BASE_URL_BUROFY}/getProfessional/${id}`,{
    next: { revalidate: 900 },
  });
  const user = (await data.json()) || null;

  return (
    <>
      {user ? (
        <main className='w-full min-h-screen md:grid md:grid-cols-[20rem_1fr] md:grid-rows-[20rem_1fr]'>
          <Header user={user} rol={rol as Rol}/>
          <section className='col-start-2 col-end-2 row-start-2 row-end-2 '>{children}</section>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
