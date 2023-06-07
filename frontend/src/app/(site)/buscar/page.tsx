import ContainerSearchResults from "@/components/SearchResult/ContainerSearchResults";
import SearchResultFIlter from "@/components/SearchResult/SearchResultFIlter";
import { getAllProfessional } from "@/lib/services-burofy/getAllProfessional";

import React from "react";

export const metadata = {
  title: "Burofy | Busca profesionales",
};

export default async function ResultsProfessionalPage() {
  const search = await getAllProfessional(1); // page dinamic

  return (
    <>
      <section>
        <SearchResultFIlter />
        <ContainerSearchResults search={search} />
      </section>
    </>
  );
}
