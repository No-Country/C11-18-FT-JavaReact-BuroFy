"use client";

import Image from "next/image";
import Spinner from "../Spinners/Spinner";
import Sidebar from "./Sidebar";
import Drawer from "./Drawer";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCredentials, setRol, setVerified } from "@/redux/features/userSlice";
import { useEffect } from "react";
import { Rol, User } from "@/interfaces/user";
type HeaderProps = {
  user: User;
  rol: Rol;
};

const Header = ({ user, rol }: HeaderProps) => {

  const { verified } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user  ) {
      dispatch(setCredentials(user));
      dispatch(setRol(rol as Rol));
      dispatch(setVerified("authenticated"));
    }
  }, [user, dispatch , rol]);
  
  return (
    <>
      {verified === "checking" && <Spinner />}
      {verified === "authenticated" ? (
        <>
          <Sidebar />
          <Drawer />
        </>
      ) : (
        <>
          <header className='flex md:hidden top-4 left-[50%] translate-x-[-50%]'>
            <Image
              src='/assets/title-burofy.svg'
              width={150}
              height={80}
              alt='title burofy white'
              placeholder="blur"
              blurDataURL={"/assets/title-burofy.svg"} 
            />
          </header>
        </>
      )}
    </>
  );
};

export default Header;