import { BsFacebook } from "react-icons/bs";

const ButtonFacebook = () => {
  return (
    <button className='button-provider'>
      <BsFacebook className='flex ml-1 text-lg text-[#3b5998] w-7 h-7 ' />
      Inicia sesión con Facebook
    </button>
  );
};

export default ButtonFacebook;
