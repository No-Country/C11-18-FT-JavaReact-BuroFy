import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const ButtonAuth = ({ children }: PropsType) => {
  return (
    <button
      type='submit'
      className='bg-primary w-[220px] h-10 text-lg font-bold text-white flex- items-center justify-center 
    rounded-xl mx-auto md:w-96 md:h-14'
    >
      {children}
    </button>
  );
};

export default ButtonAuth;