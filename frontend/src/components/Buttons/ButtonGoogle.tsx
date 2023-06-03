"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Rol, UserInitial } from "@/interfaces/user";
import { sing_in } from "@/lib";
import { createUserWithProvider } from "@/lib/services-burofy/createUserWithProvider";
import { setUserInitial } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  const dispatch = useAppDispatch();
  const { setStatusAuth } = useAuth();
  const router = useRouter();
  const { rol } = useAppSelector((state) => state.user);

  const handleGoogle = async () => {
    setStatusAuth("checking");
    try {
      const { user } = await sing_in("google");

      if (user) {
        const responseUser = await createUserWithProvider(
          rol as Rol,
          user as Omit<UserInitial, "rol">,
        );

        dispatch(setUserInitial(responseUser));
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
      className=' justify-center font-bold gap-3 flex w-[353px] lg:w-[460px] h-14 transition shadow-lg hover:scale-110 active:scale-110 bg-white items-center rounded-lg text-xs lg:gap-1 lg:text-sm'>
      <FcGoogle className='flex ml-1 text-lg w-7 h-7' />
    Inicia sesión con Google
    </button>
  );
};

export default ButtonGoogle;
