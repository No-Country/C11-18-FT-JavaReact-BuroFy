import { makeRequestWithCache } from "@/utils/makeRequestWithCache";
import { cache } from "react";
import "server-only";

export const getClient = cache(async (id: string) => {
  const data = await makeRequestWithCache(`/getClient/${id}`, 3600);
  return data;
});
