import { CardServices, CardReview, CardReviewEmpty, CardApplicationEmpty } from "@/components";
import { Rol } from "@/interfaces/user";
import { getConsultationClient } from "@/lib/services-burofy/getConsultationClient";
import { getConsultationProfessional } from "@/lib/services-burofy/getConsultationProfessional";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: "Burofy | Inicio",
};

const HomePage = async () => {
  const cookieStore = cookies();
  const rol = cookieStore.get("rol")?.value;
  const id = cookieStore.get("id")?.value;

  const consultations =
    (rol as Rol) === "client"
      ? await getConsultationClient(id as string)
      : await getConsultationProfessional(id as string);

  return (
    <>
      <section className=' bg-white p-4 lg:flex lg:justify-center z-50 lg:overflow-hidden'>
        <span className='text-[#616161] lg:hidden'>Tienes, 0 consultas</span>
        <article className='lg:flex lg:space-x-7 lg:justify-center lg:mt-2 mt-5 '>
          <Suspense fallback={<Loading />}>
            {consultations ? (
              <>
                <CardServices consultations={consultations} />
                <CardReview />
              </>
            ) : (
              <>
                <CardReviewEmpty />
                <CardApplicationEmpty />
              </>
            )}
          </Suspense>
        </article>
      </section>
      <footer className='flex justify-center mt-[250px] md:hidden lg:hidden'>
        <span className='text-center text-xs font-normal'>Burofy genera conexiones.</span>
      </footer>
    </>
  );
};

export default HomePage;
