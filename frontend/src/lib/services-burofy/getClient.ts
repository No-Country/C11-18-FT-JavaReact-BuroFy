import { User } from "@/interfaces/user";


export const getClient = async (id: string)  : Promise<Partial<User>> => {
  const data = await fetch(`https://backend-web-burofy.onrender.com/getClient/${id}`,{next: { revalidate: 900 }});
  const user = data.json();
  return user;
};


