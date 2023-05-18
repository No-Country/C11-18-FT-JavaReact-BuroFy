"use client";

import { User } from "@/interfaces/user";
import stringAvatar from "@/utils/getAvatarString";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  user: User;
};

const Avatar = ({ user }: PropsType) => {
  return (
    <>
      {user.avatar ? (
        <div className="self-baseline flex gap-2">
            <Image
          width={40}
          height={40}
          className='rounded-full w-10 h-10 lg:w-12 lg:h-12 self-center md:self-start'
          src={(user.id as string) && (user.avatar as string)}
          alt={user.firstName as string}
        />
        <div className="hidden md:flex md:flex-col">
        <span className="text-white font-medium whitespace-nowrap">Hola, {user.firstName}</span>
        <Link href="/perfil" className="text-sx text-white font-light">Mi perfil</Link>
        </div>
        </div>
      ) : (
        <div className='bg-gray-300 rounded-full w-10 h-10 relative lg:w-12 lg:h-12'>
          <span className='text-secundary font-light absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] self-center md:self-start'>
            J
          </span>
          <div className="hidden md:flex md:flex-col">
        <span className=" text-white font-medium whitespace-nowrap ">Hola, {user.firstName}</span>
        <Link href="/perfil" className="text-sx text-white font-light">Mi perfil</Link>
        </div>
        </div>
      )}
    </>
  );
};

export default Avatar;
