export const getConsultationProfessional = async (id: string): Promise<any> => {
  const data = await fetch(
    "https://backend-web-burofy.onrender.com/getConsultationsByProfessionalId",
    {
      headers: {
        id: id,
      },
      next: { revalidate: 900 },
    },
  );
  const consultation = data.json();
  return consultation;
};
