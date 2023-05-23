import { BsFacebook } from "react-icons/bs";

const ButtonFacebook = () => {
  return (
    <button className='p-2 flex w-50 h-14 transition shadow-lg bg-white items-center rounded-lg text-xs gap-1 hover:scale-110 active:scale-110 lg:w-56 lg:text-sm'>
      <BsFacebook className='flex ml-1 text-lg text-[#3b5998] w-7 h-7 ' />
      Inica sesión con Facebook
    </button>
  );
};

export default ButtonFacebook;
