"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch } from "@/hooks";
import { sing_in } from "@/lib/firebase_auth";
import { setUserInitialWithProvider } from "@/redux/features/userSlice";
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
        dispatch(setUserInitialWithProvider(user as any));
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
      className=' justify-center font-bold gap-3 flex w-[353px] h-14 transition shadow-lg hover:scale-110 active:scale-110 bg-white items-center rounded-lg text-xs lg:gap-1 lg:w-56 lg:text-sm'
    >
      <FcGoogle className='flex ml-1 text-lg w-7 h-7' />
      Inica sesión con Google
    </button>
  );
};

export default ButtonGoogle;
