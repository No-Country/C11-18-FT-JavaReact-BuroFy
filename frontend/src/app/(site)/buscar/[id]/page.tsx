import { ProfileSearchResult } from "@/components";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <>
      <ProfileSearchResult id={params.id as string} />
    </>
  );
}
