import { BsFacebook } from "react-icons/bs";

const ButtonFacebook = () => {
  return (
    <button className=' justify-center font-bold gap-3 flex w-[353px] h-14 transition shadow-lg hover:scale-110 active:scale-110 bg-white items-center rounded-lg text-xs lg:gap-1 lg:w-56 lg:text-sm'>
      <BsFacebook className='flex ml-1 text-lg text-[#3b5998] w-7 h-7 ' />
      Inicia sesión con Facebook
    </button>
  );
};

export default ButtonFacebook;
