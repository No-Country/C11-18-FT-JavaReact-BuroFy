import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  return (
    <button className='p-2 flex w-48 h-14 bg-quinary items-center rounded-lg text-xs gap-2'>
      <FcGoogle className='flex ml-1 text-lg w-8 h-8' />
      Registrarte con Google
    </button>
  );
};

export default ButtonGoogle;
