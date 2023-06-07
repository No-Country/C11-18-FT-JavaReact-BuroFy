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
<<<<<<< HEAD

=======
  console.log(pathname);
  
>>>>>>> 91ff655f4a39da0cd2c34bd3d806cc2f9791f9e3
  const handleGoogle = async () => {
    dispatch(setVerified("checking"));
    try {
      const { user } = await sing_in("google");
<<<<<<< HEAD
      if (!user) throw new Error("user isn't found");

      if (pathname === "/acceso") {
        const responseUser = await loginUserWithProvider(
          user.id as unknown as Pick<UserInitial, "id">,
        );
        dispatch(setUserInitial(responseUser));
=======
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
        
>>>>>>> 91ff655f4a39da0cd2c34bd3d806cc2f9791f9e3
      } else {
        const responseUser = await createUserWithProvider(
          rol as Rol,
          user as Omit<UserInitial, "rol">,
        );
<<<<<<< HEAD
        dispatch(setUserInitial(responseUser));
=======
        if (responseUser) {
          dispatch(setUserInitial(responseUser));
          router.push("/inicio");
        }
>>>>>>> 91ff655f4a39da0cd2c34bd3d806cc2f9791f9e3
      }
    } catch (error) {
      console.log(error as Error);
    }
<<<<<<< HEAD
    router.push("/");
=======
    dispatch(setVerified("authenticated"));
>>>>>>> 91ff655f4a39da0cd2c34bd3d806cc2f9791f9e3
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
