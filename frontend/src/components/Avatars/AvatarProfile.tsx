"use client";

import stringAvatar from "@/utils/getAvatarString";
import Image from "next/image";

type AvatarProps = {
    avatar: string;
    fullName: string;
  };

const AvatarProfile = ({ avatar, fullName }: AvatarProps) => {
  
  return (
    <>
      {avatar ? (
        <div className='self-baseline lg:flex'>
          <Image
            width={50}
            height={50}
            className='rounded-full w-10 h-10 lg:w-20 lg:h-20 lg:gap-2   '
            src={avatar}
            alt={fullName as string}
          /> 
        </div>
      ) : (
        <div className='self-baseline lg:flex'>
          <div className='bg-secundary rounded-full w-10 h-10 relative lg:w-32 lg:h-32'>
            <span className='text-[56px] font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase '>
              {stringAvatar((fullName as string) || " ") as string}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AvatarProfile;
