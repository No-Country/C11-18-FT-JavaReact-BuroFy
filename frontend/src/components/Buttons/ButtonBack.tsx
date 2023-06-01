import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const ButtonBack = () => {
  return (
    <Link className='lg:flex lg:gap-2 hidden ' href='/registro'>
      <BsArrowLeftShort />
      <p className='lg:flex lg:mr-[400px] lg:mb-5 border-b-2 border-slate-500'>Atrás</p>
    </Link>
  );
};

export default ButtonBack;
