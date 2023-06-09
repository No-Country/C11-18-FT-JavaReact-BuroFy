"use client";

import ContainerSearchResults from "@/components/SearchResult/ContainerSearchResults";
import SearchResultFIlter from "@/components/SearchResult/SearchResultFIlter";
import { Search } from "@/interfaces/search";
import { getAllProfessional } from "@/lib/services-burofy/getAllProfessional";
import React, { Suspense } from "react";
import Loading from "../loading";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components";



export default async function ProfileResult() {
 
  const {
    isLoading,
    data: search,
    
  } = useQuery({
    queryKey: ["allProfessionals"],
    queryFn: () => getAllProfessional(1),
   
  });
  if (isLoading) 
    return <Spinner />;

  
  return (
    <section>
      <SearchResultFIlter />
      <Suspense fallback={<Loading />}>
        <ContainerSearchResults search={search as Search[]} />
      </Suspense>
    </section>
  );
}
