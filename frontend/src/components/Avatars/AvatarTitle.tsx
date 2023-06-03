"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser as logoutUserRedux, setVerified } from "@/redux/features/userSlice";
import { logoutUser } from "@/lib/services-burofy/logoutUser";

const AvatarTitle = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { fullName } = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    dispatch(setVerified("checking"));
    try {
      //close conection with firebase
      await logoutUser(); //delete all states of user
      dispatch(logoutUserRedux());
    } catch (error) {
      console.log((error as Error).message);
    }
    router.push("/registro");
  };

  return (
    <div className='hidden md:flex md:flex-col lg:flex lg:ml-5 space-y-2'>
      <span className='text-white font-medium'>Hola, {(fullName as string) || ""}</span>
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
