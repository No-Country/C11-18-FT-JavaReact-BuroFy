"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser , setVerified } from "@/redux/features/userSlice";
import { logouUserApp } from "@/lib/services-burofy/logouUserApp";

const AvatarTitle = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { fullName } = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    dispatch(setVerified("checking"));
    try {
      const message = await logouUserApp();
      console.log(message);
      router.push("/registro");
      //close conection with firebase
      //delete all states of user
      
    } catch (error) {
      console.log((error as Error).message);
    }
    dispatch(logoutUser());
  };

  return (
    <div className='hidden md:flex md:flex-col lg:flex lg:ml-5 space-y-2'>
      <span className='text-white font-medium capitalize'>Hola, {(fullName as string) || ""}</span>
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
