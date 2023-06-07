"use client";

import Link from "next/link";
import { useAppSelector, useAuth } from "@/hooks";

const AvatarTitle = () => {
  const { fullName, id } = useAppSelector((state) => state.user);
  const { handleLogout } = useAuth();

  return (
    <div className='hidden md:flex md:flex-col lg:flex lg:ml-5 space-y-2'>
      <span className='text-white font-medium capitalize'>Hola, {(fullName as string) || ""}</span>
      <div className='flex gap-2'>
        <Link
          href={`/perfil/${id}`}
          className='text-sx text-white italic font-light hover:opacity-60 cursor-pointer hover:scale-105 transition'
        >
          Mi perfil
        </Link>
        <span className='text-white'>|</span>
        <span
          onClick={handleLogout}
          className='text-sx text-white italic font-light hover:opacity-60 cursor-pointer hover:scale-105 transition'
        >
          {" "}
          Salir{" "}
        </span>
      </div>
    </div>
  );
};

export default AvatarTitle;
