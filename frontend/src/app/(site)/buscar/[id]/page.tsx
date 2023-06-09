import { ProfileSearchResult } from "@/components";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <>
      <div className="lg:ml-[250px]">
        <ProfileSearchResult id={params.id as string} />
      </div>
    
    </>
  );
}
