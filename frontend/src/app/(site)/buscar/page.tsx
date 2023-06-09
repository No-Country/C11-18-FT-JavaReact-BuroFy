import ContainerSearchResults from "@/components/SearchResult/ContainerSearchResults";
import SearchResultFIlter from "@/components/SearchResult/SearchResultFIlter";
import { Search } from "@/interfaces/search";
import { getAllProfessional } from "@/lib/services-burofy/getAllProfessional";
import React, { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: "Burofy | Busca profesionales",
};

export default async function ProfileResult() {
  const search = await getAllProfessional(1);
  return (
    <section>
      <SearchResultFIlter />
      <Suspense fallback={<Loading />}>
        <ContainerSearchResults search={search as Search[]} />
      </Suspense>
    </section>
  );
}
