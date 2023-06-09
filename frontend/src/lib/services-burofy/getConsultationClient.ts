export const getConsultationClient = async (id: string): Promise<any> => {
  const data = await fetch("https://backend-web-burofy.onrender.com/getConsultationsByClientId", {
    headers: {
      id: id,
    },
    next: { revalidate: 900 },
  });
  const consultation = data.json();
  return consultation;
};
