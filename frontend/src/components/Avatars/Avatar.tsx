"use client";

import stringAvatar from "@/utils/getAvatarString";
import Image from "next/image";
import { motion } from "framer-motion";
import AvatarTitle from "./AvatarTitle";
import { useAppSelector } from "@/hooks";
import { useState } from "react";

const Avatar = () => {
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setTimeout(() => setImageLoading(false), 600);
  };

  const { avatar, fullName } = useAppSelector((state) => state.user);
  console.log(avatar);
  return (
    <>
      {avatar ? (
        <motion.div
          className='self-baseline lg:flex'
          initial={{ opacity: 0 }}
          animate={{
            opacity: imageLoading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
          onLoad={imageLoaded}
        >
          <Image
            width={50}
            height={50}
            className='rounded-full w-10 h-10 lg:w-14 lg:h-14 lg:gap-2 '
            src={avatar}
            alt={fullName as string}
          />
          <AvatarTitle />
        </motion.div>
      ) : (
        <motion.div
          className='self-baseline lg:flex'
          initial={{ opacity: 0 }}
          animate={{
            opacity: imageLoading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
          onLoad={imageLoaded}
        >
          <div className='bg-secundary rounded-full w-10 h-10 relative lg:w-12 lg:h-12'>
            <span className='text-secundary font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase'>
              {stringAvatar((fullName as string) || " ") as string}
            </span>
          </div>
          <AvatarTitle />
        </motion.div>
      )}
    </>
  );
};

export default Avatar;
