
import { Header } from "@/components";
// import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { cookies } from "next/headers";
// const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], style: "normal" });

export default async function RootLayoutSite({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
  const id = cookieStore.get("id")?.value;
  
  const data = rol === "client" ? await fetch(`https://backend-web-burofy.onrender.com/getClient/${id}`,{
    next: { revalidate: 10 },
  }) : await fetch(`https://backend-web-burofy.onrender.com/getProfessional/${id}`,{
    next: { revalidate: 10 },
  });
  
  const user = await data.json();
  console.log("data" , user);
    
  return (
    
    <main className="w-full min-h-screen md:grid md:grid-cols-[20rem_1fr] md:grid-rows-[20rem_1fr]">   
      <Header user={user}/>
      <section className='col-start-2 col-end-2 row-start-2 row-end-2 '>
        {children}
      </section>
    </main>
    
  );
}
