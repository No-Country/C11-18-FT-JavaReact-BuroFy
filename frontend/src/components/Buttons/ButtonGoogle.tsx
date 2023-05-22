import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  return (
    <button className='p-2 flex w-48 h-14 transition hover:scale-110 active:scale-110 bg-quinary items-center rounded-lg text-xs gap-2 lg:w-56 lg:text-sm'>
      <FcGoogle className='flex ml-1 text-lg w-8 h-8' />
      Registrarte con Google
    </button>
  );
};

export default ButtonGoogle;
