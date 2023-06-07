import { cache } from "react";
import "server-only";
import { makeRequestWithCache } from "@/utils/makeRequestWithCache";
import { User } from "@/interfaces/user";

export const getProfessional = cache(async (id: string): Promise<Partial<User>> => {
  const data = await makeRequestWithCache(`/getProfessional/${id}`, 3600);
  return data;
});
