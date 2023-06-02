import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const ButtonBack = () => {
  return (
    <Link className='flex gap-2 self-start' href='/registro'>
      <BsArrowLeftShort className='w-8 h-8 lg:w-4 lg:h-4' />
      <p className='hidden lg:flex lg:mr-[400px] lg:mb-5 border-b-2 border-slate-500'>Atrás</p>
    </Link>
  );
};

export default ButtonBack;
