import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "../Avatars/Avatar";
import SearchBar from "../SearchBar";

const Sidebar = () => {
  return (
    <header className='w-full h-full flex p-6 justify-between items-center bg-header-img object-cover object-center md:h-[300px] md:py-8 md:px-20  gap-4 bg-no-repeat bg-cover col-start-2 col-end-2 row-span-1'>
      <button
        className='focus:scale-110 active:scale-110 transition'
        type='button'
        data-drawer-toggle='drawer-navigation'
        aria-controls='drawer-navigation'
      >
        <RxHamburgerMenu className='w-8 h-8 text-white md:hidden' />
      </button>
      <Image
        src='/assets/title-burofy-white.svg'
        alt='header burofy logotype'
        width={170}
        height={52}
        className='md:hidden bg-no-repeat'
      />
      <div className='hidden md:flex md:flex-col md:grow-1 md:shrink-1 lg:mt-10 lg:ml-44  '>
        <h5 className='mb-3 font-bold text-secundary text-white leading-[39.06px]  '>
          Encuentra a tu especialista
        </h5>
        <h6 className='text-lg font-normal text-white leading-[26.04px] '>
          Haz “match” con un profesional y agenda una consulta
        </h6>
        <SearchBar />
      </div>
      <Avatar />
    </header>
  );
};

export default Sidebar;