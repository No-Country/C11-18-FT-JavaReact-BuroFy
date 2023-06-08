import { User } from "@/interfaces/user";


export const getProfessional = async (id: string ) : Promise<Partial<User>> => {
  const data = await fetch(`https://backend-web-burofy.onrender.com/getProfessional/${id}`,{next: { revalidate: 900 }});
  const user = data.json();
  return user;
};
