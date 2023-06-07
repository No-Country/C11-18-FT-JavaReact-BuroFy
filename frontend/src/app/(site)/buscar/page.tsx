import {ContainerSearchResults, SearchResultFIlter} from "@/components";
import React from "react";

export const metadata = {
  title: "Burofy | Busca profesionales",
};

export default async function ResultsProfessionalPage(){
  const data = await fetch(`${process.env.NEXT_BASE_URL_BUROFY}/allProfessionals/1/10`);
  
  const search = await data.json();
  return(
    <>
      <section>
        <SearchResultFIlter/>
        <ContainerSearchResults search={search}/>
      </section>
    </>
  );
}