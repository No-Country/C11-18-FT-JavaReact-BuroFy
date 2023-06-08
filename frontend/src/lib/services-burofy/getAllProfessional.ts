import { ObjectSearch } from "@/interfaces/search";


export const getAllProfessional = async (page: number = 1) : Promise<Partial<ObjectSearch>> => {
  const data = await fetch(`https://backend-web-burofy.onrender.com/allProfessionals/${page}/5`,{next: { revalidate: 900 }});
  const user = data.json();
  return user;
};