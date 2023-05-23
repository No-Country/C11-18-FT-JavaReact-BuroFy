import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  return (
    <button className='p-2 flex w-50 h-14 transition shadow-lg hover:scale-110 active:scale-110 bg-white items-center rounded-lg text-xs gap-1 lg:w-56 lg:text-sm'>
      <FcGoogle className='flex ml-1 text-lg w-7 h-7' />
      Inica sesión con Google
    </button>
  );
};

export default ButtonGoogle;
