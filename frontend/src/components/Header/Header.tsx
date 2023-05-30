"use client";

import Image from "next/image";
import Spinner from "../Spinners/Spinner";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "./Sidebar";
import Drawer from "./Drawer";
import image2 from "/public/assets/title-burofy-white.svg";

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
          <div className='md:hidden absolute top-10 left-[50%] translate-x-[-50%]'>
            <Image src={image2} width={200} height={100} alt='title burofy white' />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
