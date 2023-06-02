"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setUserInitial } from "@/redux/features/userSlice";
import { SignUp } from "@/interfaces/auth";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import ButtonAuth from "../Buttons/ButtonAuth";
import ButtonBack from "../Buttons/ButtonBack";
import ErrorMsg from "../ErrorMsg";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { createUser } from "@/lib/services-burofy/createUser";

export default function FormRegister() {
  const { setStatusAuth } = useAuth();
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { rol } = useAppSelector((state) => state.user);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUp>();

  const onSubmit = async (data: SignUp) => {
    const { password, email, displayName } = data;
    console.log(data);
    setStatusAuth("checking");
    try {
      if (data) {
        const user = await createUser({ password, email, displayName, rol } as SignUp);
        dispatch(setUserInitial(user));
        console.log(user);
        setStatusAuth("authenticated");
        router.push("/");
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className=' flex flex-col order-4 w-full h-auto mx-auto mb-6 md:items-center lg:mt-20 lg:mb-0'>
      <div className='mb-8 flex flex-col items-center justify-center h-full bg-white md:w-full md:h-full'>
        <ButtonBack />

        <h3 className='text-xl font-black self-center mb-6 md:text-2xl lg:text-4xl lg:ml-[-100px]'>
          Registro de nuevo usuario
        </h3>
        <h4 className='font-bold flex justify-center my-6 space-x-10 text-sm lg:text-lg'>
          Crea tu usuario y recibí asistencia legal ¡ya!
        </h4>
        <form
          className='flex w-full h-auto flex-col mx-auto mb-6 md:items-center lg:mt-36'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-full flex flex-col gap-10 m-auto space-y-4 text-left'>
            <div className='relative z-0 w-full group'>
              <input
                type='text'
                id='name'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-quinary focus:bg-transparent'
                placeholder=' '
                required
                {...register("displayName", {
                  required: "Name is required.",
                })}
              />
              <label
                htmlFor='name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 z-50 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Nombre
              </label>
              {errors.displayName && <ErrorMsg>{errors.displayName?.message as string}</ErrorMsg>}
            </div>

            <div className='relative z-0 w-full group mb-14 '>
              <input
                type='email'
                id='email'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-quinary focus:bg-transparent'
                placeholder=' '
                required
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 z-50 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Correo electrónico
              </label>
              {errors.email && <ErrorMsg>{errors.email?.message as string}</ErrorMsg>}
            </div>

            <div className='relative z-0 w-full mb-6 group'>
              <input
                type={visible ? "text" : "password"}
                id='password'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 bg-quinary focus:bg-transparent border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
                placeholder=' '
                required
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                })}
              />
              <label
                htmlFor='password'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Contraseña
              </label>
              {errors.password && <ErrorMsg>{errors.password?.message as string}</ErrorMsg>}
              {visible ? (
                <AiFillEye
                  className='absolute right-4 top-[15%] cursor-pointer'
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiFillEyeInvisible
                  className='absolute right-4 top-[15%] cursor-pointer'
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <div className='relative z-0 w-full group'>
              <input
                type={visible ? "text" : "password"}
                id='confirmPassword'
                className='block py-2.5 pr-0 pl-4 w-full lg:w-[460px] text-sm text-gray-900 bg-quinary focus:bg-transparent border-0 border-b-2 border-[#2E2E2E] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96'
                placeholder=' '
                required
                {...register("confirmPassword", {
                  required: "Confirm password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                  validate: (value) => {
                    const { password } = getValues();
                    if (password !== value) return "Your password does not match";
                  },
                })}
              />
              <label
                htmlFor='confirmPassword'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 pl-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Confirma contraseña
              </label>
              {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>}
            </div>
          </div>

          <div className='flex justify-center my-10 '>
            <ButtonAuth>Crear cuenta</ButtonAuth>
          </div>
        </form>
        <div>
          <span>O continúa con</span>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-4 mt-2 md:mt-14 md:gap-8 md:flex-row'>
          <ButtonGoogle />
        </div>
      </div>
      <footer className='self-center text-xs'>Burofy genera conexiones</footer>
    </div>
  );
}
