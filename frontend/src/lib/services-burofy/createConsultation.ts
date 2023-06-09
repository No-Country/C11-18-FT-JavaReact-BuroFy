export async function createConsultation(
  idClient: string,
  idProfessional: string,
  comments: string,
) {
  const responseUser = await fetch("https://backend-web-burofy.onrender.com/create/consultation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idClient,
      idProfessional,
      comments,
      type: "progreso",
    }),
  });
  console.log(responseUser);
}
