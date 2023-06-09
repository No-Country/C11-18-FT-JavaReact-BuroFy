"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { Rol, UserInitial } from "@/interfaces/user";
import { sing_in } from "@/lib";
import { createUser } from "@/lib/services-burofy/createUser";
import { loginUserWithProvider } from "@/lib/services-burofy/loginUserWithProvider";
import { setUserInitial, setVerified } from "@/redux/features/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { rol } = useAppSelector((state) => state.user);
  const pathname = usePathname();
  console.log(pathname);

  const handleGoogle = async () => {
    dispatch(setVerified("checking"));
    try {
      const { user } = await sing_in("google");
      console.log("USER", user);
      if (!user) throw new Error("user isn't found");

      if (pathname === "/acceso") {
        const responseUser = await loginUserWithProvider(
          user.id as unknown as Pick<UserInitial, "id">,
        );
        if (responseUser) {
          dispatch(setUserInitial(responseUser));
          router.push("/inicio");
        }
      } else {
        const responseUser = await createUser(rol as Rol, user as Omit<UserInitial, "rol">);
        if (responseUser) {
          dispatch(setUserInitial(responseUser));
          router.push("/inicio");
        }
      }
    } catch (error) {
      console.log(error as Error);
    }
    dispatch(setVerified("authenticated"));
  };

  return (
    <button
      onClick={handleGoogle}
      className=' justify-center font-bold gap-3 flex w-[353px] lg:w-[460px] h-14 transition shadow-lg hover:scale-110 active:scale-110 bg-white items-center rounded-lg text-xs lg:gap-1 lg:text-sm'
    >
      <FcGoogle className='flex ml-1 text-lg w-7 h-7' />
      Inicia sesión con Google
    </button>
  );
};

export default ButtonGoogle;
