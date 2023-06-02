"use client";

import Image from "next/image";
import Spinner from "../Spinners/Spinner";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "./Sidebar";
import Drawer from "./Drawer";

const Header = () => {
  const { statusAuth } = useAuth();

  return (
    <>
      {statusAuth === "checking" && <Spinner />}
      {statusAuth === "authenticated" ? (
        <>
          <Sidebar />
          <Drawer />
        </>
      ) : (
        <>
          <div className='md:hidden absolute top-4 left-[50%] translate-x-[-50%] z-[55]'>
            <Image
              src='/assets/title-burofy.svg'
              width={120}
              height={80}
              alt='title burofy white'
            />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
