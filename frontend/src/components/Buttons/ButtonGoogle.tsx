"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { Rol, UserInitial } from "@/interfaces/user";
import { sing_in } from "@/lib";
import { createUserWithProvider } from "@/lib/services-burofy/createUserWithProvider";
import { loginUserWithProvider } from "@/lib/services-burofy/loginUserWithProvider";
import { setUserInitial, setVerified } from "@/redux/features/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { rol } = useAppSelector((state) => state.user);
  const pathname = usePathname();

  const handleGoogle = async () => {
    dispatch(setVerified("checking"));
    try {
      const { user } = await sing_in("google");
      if (!user) throw new Error("user isn't found");

      if (pathname === "/acceso") {
        const responseUser = await loginUserWithProvider(
          user.id as unknown as Pick<UserInitial, "id">,
        );
        dispatch(setUserInitial(responseUser));
      } else {
        const responseUser = await createUserWithProvider(
          rol as Rol,
          user as Omit<UserInitial, "rol">,
        );
        dispatch(setUserInitial(responseUser));
      }
    } catch (error) {
      console.log(error as Error);
    }
    router.push("/");
  };

  return (
    <button onClick={handleGoogle} className='button-provider'>
      <FcGoogle className='flex ml-1 text-lg w-7 h-7' />
      Inica sesión con Google
    </button>
  );
};

export default ButtonGoogle;
