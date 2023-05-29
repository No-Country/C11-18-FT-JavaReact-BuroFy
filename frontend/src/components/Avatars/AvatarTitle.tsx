"use client";

import Link from "next/link";
import { logout_firebase } from "@/lib/firebase_auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser } from "@/redux/features/userSlice";

const AvatarTitle = () => {
  const { setStatusAuth } = useAuth();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { firstName } = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    setStatusAuth("checking");
    try {
      router.push("/registro");
      //close conection with firebase
      await logout_firebase();
      //delete all states of user
      dispatch(logoutUser());
      setStatusAuth("no-authenticated");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className='hidden md:flex md:flex-col lg:flex lg:ml-5 space-y-2'>
      <span className='text-white font-medium'>Hola, {(firstName as string) || ""}</span>
      <div className='flex gap-2'>
        <Link
          href='/perfil'
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
