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
          <div className='md:hidden flex justify-center mt-5'>
            <Image src='/assets/title-burofy.svg' width={200} height={100} alt='title burofy white' />
          </div>
        </>
      )}
    </>
  );
};

export default Header;