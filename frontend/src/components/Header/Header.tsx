"use client";

import Image from "next/image";
import Spinner from "../Spinners/Spinner";
import Sidebar from "./Sidebar";
import Drawer from "./Drawer";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCredentials, setVerified } from "@/redux/features/userSlice";
import { useEffect } from "react";


const Header = ({user} :  any) => {
  
  const { verified } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user ) {
      dispatch(setCredentials(user));
      console.log( "user" , user);
      dispatch(setVerified("authenticated"));
    }
  }, [user, dispatch]);
  
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
          <header className='md:hidden absolute top-4 left-[50%] translate-x-[-50%] z-[55]'>
            <Image
              src='/assets/title-burofy.svg'
              width={150}
              height={80}
              alt='title burofy white'
            />
          </header>
        </>
      )}
    </>
  );
};

export default Header;
