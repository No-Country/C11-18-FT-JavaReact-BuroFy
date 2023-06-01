"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch } from "@/hooks";
import { sing_in } from "@/lib/firebase_auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  const dispatch = useAppDispatch();
  const { setStatusAuth } = useAuth();
  const router = useRouter();

  const handleGoogle = async () => {
    setStatusAuth("checking");
    try {
      const { user } = await sing_in("google");
      if (user) {
        setStatusAuth("authenticated");
        router.push("/");
      }
    } catch (error) {
      console.log(error as Error);
    }
  };
  return (
    <button
      onClick={handleGoogle}
      className='button-provider'
    >
      <FcGoogle className='flex ml-1 text-lg w-7 h-7' />
      Inica sesión con Google
    </button>
  );
};

export default ButtonGoogle;
