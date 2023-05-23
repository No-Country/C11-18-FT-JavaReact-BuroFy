"use client";

import Link from "next/link";
import { logout_firebase } from "@/lib/firebase_auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

type PropsType = {
  firstName: string | null;
};

const AvatarTitle = ({ firstName }: PropsType) => {
  const { setStatusAuth } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    setStatusAuth("checking");
    try {
      router.push("/acceso");
      await logout_firebase();
      setStatusAuth("no-authenticated");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className='hidden md:flex md:flex-col'>
      <span className='text-white font-medium'>Hola, {firstName as string}</span>
      <div className='flex gap-2'>
        <Link
          href='/perfil'
          className='text-sx text-white font-light hover:opacity-60 cursor-pointer hover:scale-105 transition'
        >
          Mi perfil
        </Link>
        <span
          onClick={handleLogout}
          className='text-sx text-white font-light hover:opacity-60 cursor-pointer hover:scale-105 transition'
        >
          {" "}
          Logout{" "}
        </span>
      </div>
    </div>
  );
};

export default AvatarTitle;
