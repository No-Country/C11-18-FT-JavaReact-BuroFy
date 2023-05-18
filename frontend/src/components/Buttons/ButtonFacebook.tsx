import { BsFacebook } from "react-icons/bs";

const ButtonFacebook = () => {
  return (
    <button className='p-2 flex w-48 h-14 bg-quinary items-center rounded-lg text-xs gap-2'>
      <BsFacebook className='flex ml-1 text-lg text-[#3b5998] w-8 h-8' />
      Registrarte con Facebook
    </button>
  );
};

export default ButtonFacebook;
