import Register from "@/components/RegisterClient/Register";
import React from "react";

export const metadata = {
  title: "Burofy | Registro - Cliente",
};

const registerClient = () => {
  return (
    <main className="min-h-[130vh] w-full">
      <Register />
    </main>
  );
};

export default registerClient;
