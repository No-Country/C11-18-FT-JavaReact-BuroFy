"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { MdLocationPin, MdPhoneEnabled, MdWork, MdCake , MdMail} from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

import AvatarProfile from "../Avatars/AvatarProfile";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { PersonalInformation } from "@/interfaces/serializers/common";
import { Rol } from "@/interfaces/user";
import ErrorMsg from "../ErrorMsg";
import { uploadFile } from "@/lib";
import { setVerified } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";




export default function PersonalInfo() {
  const { avatar : avatarRedux , fullName , rol , id} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInformation>();

  const onSubmit =  async ( data : PersonalInformation ) => {
    dispatch(setVerified("checking"));
  
    if (data ) {
      if (data.avatar) {
        const { location , phone , occupation  } = data;
        const result = await uploadFile(data.avatar[0] as unknown as Blob , id as string );
        rol as Rol === "client" ? await fetch(`https://backend-web-burofy.onrender.com/update/client/${id}`  , {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "avatar": result,
            occupation,
            location,
            phone})
        })  : await fetch(`https://backend-web-burofy.onrender.com/update/professional/${id}` , {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( { "avatar": result,
            occupation,
            location,
            phone}),
        });
        console.log(result);
        dispatch(setVerified("authenticated"));
        router.push("/inicio");
      }
    }

  };
  const pStyle =
    "w-[310px] font-primary-roboto pl-3 flex border-b-2 border-[#AAAAAA] h-[32px] text-[16px]";
  return (
    <>
      <div className='w-fit shadow-md items-center m-auto p-10 pb-0 rounded-xl border-4 border-[#7FCEFF]'>
        <header className='mb-8 border-b border-[#7FCEFF] flex justify-center'>
          <h3 className='font-bold font-primary-roboto text-[30px] mb-3'>Datos Personales</h3>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center gap-2'>
            <FaUserAlt size={25} color='#2E2E2E' className='' />
            <span className='relative'>
              <AvatarProfile  avatar={avatarRedux as string} fullName={fullName as string} />
              <label htmlFor="file" className=' cursor-pointer w-1 h-0 absolute top-12  right-5 transform -translate-y-2 bg-white rounded-full'>
                <input type="file" className="w-1 h-0" id="file" accept="image/*"
                  {...register("avatar")}
                />
                <RiEditCircleFill size={30} color='#2E2E2E' />
              </label>
            </span>
            <h1 className='ml-5 w-fit m-auto font-bold font-primary-roboto text-[25px] capitalize'>
              {fullName}
            </h1>
            <span className='flex justify-center m-auto font-primary-roboto ml-10'>
              <MdCake size={25} color='#2E2E2E' className='items-center m-2' />
              <p className='m-auto text-center'>
          
               
          
                {/* {user.birthday?.toLocaleDateString().split("T")[0]} */}
                21-04-1987
              </p>
            </span>
          </div>
          
          <div className='flex mt-8 space-x-40'>
            <div className='space-y-4'>
              <span className='flex items-center mt-3'>
                <MdMail size={25} color='#2E2E2E' /> 
                <p className={pStyle}>nicolas.fernandez@gmail.com</p>
          
              </span>
              <span className='flex items-center'>
                <MdLocationPin size={25} color='#2E2E2E' />{" "}
                <div className='relative z-0 w-[310px] h-[32px] group items-center'>
                  <input
                    type='text'
                    id='name'
                    className=' placeholder:text-black placeholder:text-[16px] block py-2.5 pr-0 pl-4 w-full lg:w-[310px] text-sm text-gray-900 border-0 border-b-2 border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-none focus:bg-transparent'
                    placeholder='Capital Federal, Buenos Aires'
                    required
                    {...register("location", {
                      required: "Tu dirección es necesaria.",
                    })}
                  />
          
                  {errors.location && <ErrorMsg>{errors.location?.message as string}</ErrorMsg>}
                </div>
                {/* <p className={pStyle}>Capital Federal, Buenos Aires</p> */}
              </span>
            </div>
            <div className='space-y-4 '>
              <span className='flex items-center mt-3'>
                <MdPhoneEnabled size={25} color='#2E2E2E' />{" "}
                <div className='relative z-0 w-[310px] h-[32px] group items-center'>
                  <input
                    type='text'
                    id='name'
                    className=' placeholder:text-black placeholder:text-[16px] block py-2.5 pr-0 pl-4 w-full lg:w-[310px] text-sm text-gray-900 border-0 border-b-2 border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-none focus:bg-transparent'
                    placeholder='11-4426-7278'
                    required
                    {...register("phone", {
                      required: "El teléfono es requerido",
                    })}
                  />
          
                  {errors.phone && <ErrorMsg>{errors.phone?.message as string}</ErrorMsg>}
                </div>
                {/* <p className={pStyle}>{user.phone?.phone}</p> */}
                
              </span>
              <span className='flex items-center'>
                <MdWork size={25} color='#2E2E2E' />{" "}
                {/* <p className={pStyle}>{user.rolContent?.occupation}</p> */}
                { rol as Rol === "client" && ( <div className='relative z-0 w-[310px] group'>
                  <input
                    type='text'
                    id='name'
                    className=' placeholder:text-black placeholder:text-[16px] block py-2.5 pr-0 pl-4 w-full lg:w-[310px] text-sm text-gray-900 border-0 border-b-2 border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer md:w-96 bg-none focus:bg-transparent'
                    placeholder='Profesor de Inglés'
                    required
                    {...register("occupation", {
                      required: "Tu ocupacion es requerida.",
                    })}
                  />
                  {errors.occupation && <ErrorMsg>{errors.occupation?.message as string}</ErrorMsg>}
                </div>)
                }
              </span>
            </div>
          </div>
          <div className='flex justify-center my-8'>
            <button className='rounded-md  w-[180px] h-[40px] text-white font-bold bg-sixnary'>
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
