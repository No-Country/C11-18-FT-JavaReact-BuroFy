import { cache } from "react";
import "server-only";
import { makeRequestWithCache } from "@/utils/makeRequestWithCache";

export const getAllProfessional = cache(async (page: number = 1) => {
  const data = await makeRequestWithCache(`/allProfessionals/${page}/5`, 3600);
  return data;
});
