import PerfilTwo from "@/components/Perfil/PerfilClient";
import { User } from "@/interfaces/user";
import React from "react";

const user: User = {
  id: "asdasasdadsadsasdasdasd",
  providerId: "asdasdasdasdd",
  id_token: "asdasdasdasdasd",
  email: "andreag@hotmail.com",
  rol: "client",
  firstName: "Andreaadsads",
  rolContent: null,
  surName: "Gonzalez",
  birthday: new Date("08/07/90"),
  dni: null,
  phone: {
    phone: "00 0000 0000"
  },
  address: {
    address: "",
    city: "Benito Juárez, CDMX",
    state: "",
    country: "",
    zipcode: ""
  },
  avatar: "/perfilcliente.png",
  verified: true,
};



const ProfilePageTwo = () => {
  return (
    <main>
      <PerfilTwo user={user}/>
    </main>
  );
};

export default ProfilePageTwo;