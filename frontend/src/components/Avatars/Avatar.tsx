"use client";

import stringAvatar from "@/utils/getAvatarString";
import Image from "next/image";
import AvatarTitle from "./AvatarTitle";
import { useAppSelector } from "@/hooks";

const Avatar = () => {
  const { avatar, firstName } = useAppSelector((state) => state.user);
  return (
    <>
      {avatar ? (
        <div className='self-baseline lg:flex'>
          <Image
            width={50}
            height={50}
            className='rounded-full w-10 h-10 lg:w-14 lg:h-14 lg:gap-2 '
            src={avatar}
            alt={firstName as string}
          />
          <AvatarTitle />
        </div>
      ) : (
        <div className='bg-gray-300 rounded-full w-10 h-10 relative lg:w-12 lg:h-12 self-baseline'>
          <span className='text-secundary font-light absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
            {stringAvatar((firstName as string) || " ") as string}
          </span>
          <AvatarTitle />
        </div>
      )}
    </>
  );
};

export default Avatar;
