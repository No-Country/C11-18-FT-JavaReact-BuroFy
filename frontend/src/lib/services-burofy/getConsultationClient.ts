export const getConsultationClient = async (id: string): Promise<any> => {
  const data = await fetch("https://backend-web-burofy.onrender.com/getConsultationsByClientId", {
    headers: {
      id: id,
    },
    next: { revalidate: 150 },
  });

  if (data.ok) {
    const consultation = data.json();
    return consultation;
  } else {
    return null;
  }
};
