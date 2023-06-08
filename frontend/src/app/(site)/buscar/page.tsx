import ContainerSearchResults from "@/components/SearchResult/ContainerSearchResults";
import SearchResultFIlter from "@/components/SearchResult/SearchResultFIlter";
import { Search } from "@/interfaces/search";
import { getAllProfessional } from "@/lib/services-burofy/getAllProfessional";

import React from "react";

export default async function ProfileResult(){
  
  const search = await getAllProfessional(1);

  return(
    <>
    
      <section>
        <SearchResultFIlter/>
        <ContainerSearchResults search={search as Search[]}/>
      </section>
    </>
  );
}