import ContainerSearchResults from "@/components/SearchResult/ContainerSearchResults";
import SearchResultFIlter from "@/components/SearchResult/SearchResultFIlter";
import React from "react";


export default async function ProfileResult(){
  
  const data = await fetch("https://backend-web-burofy.onrender.com/allProfessionals/1/10");
  
  const search = await data.json();
  console.log(search);

  return(
    <>
    
      <section>
        <SearchResultFIlter/>
        <ContainerSearchResults search={search}/>
      </section>
    </>
  );
}