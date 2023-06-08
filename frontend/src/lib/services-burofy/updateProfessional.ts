import { PersonalInformation } from "@/interfaces/serializers/common";

interface updateProfile extends PersonalInformation {
  id: string;
}

export const updateProfessional = async ({
  id,
  result: avatar,
  location,
  phone,
}: updateProfile): Promise<Partial<PersonalInformation>> => {
  const data = await fetch(`https://backend-web-burofy.onrender.com/update/client/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "avatar": avatar,
      location,
      phone,
    }),
  });

  const personalInfo = await data.json();
  return personalInfo;
};
