import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const ButtonAuth = ({ children }: PropsType) => {
  return (
    <button
      type='submit'
      className=' w-[353px] h-10 lg:h-[56px] lg:w-[460px] text-lg font-bold text-white flex- items-center justify-center 
  rounded-lg bg-black mx-auto md:w-96 md:h-14 hover:bg-primary hover:scale-110 disabled:bg-sixnary transition active:scale-110 '
    >
      {children}
    </button>
  );
};

export default ButtonAuth;
