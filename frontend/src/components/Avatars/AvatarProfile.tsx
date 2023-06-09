import stringAvatar from "@/utils/getAvatarString";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type AvatarProps = {
  avatar: string;
  fullName: string;
};

const AvatarProfile = ({ avatar, fullName }: AvatarProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setTimeout(() => setImageLoading(false), 600);
  };

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
            className='rounded-full w-10 h-10 lg:w-20 lg:h-20 lg:gap-2   '
            src={avatar}
            alt={fullName as string}
          />
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
          <div className='bg-secundary rounded-full w-10 h-10 relative lg:w-32 lg:h-32'>
            <span className='text-[56px] font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase '>
              {stringAvatar((fullName as string) || " ") as string}
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AvatarProfile;
