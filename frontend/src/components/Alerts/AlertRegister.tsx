import Image from "next/image";

const AlertRegister = () => {
  return (
    <div className='w-[373px] h-auto mx-auto bg-[#ededed] md:absolute lg:absolute lg:flex lg:w-[1000px] lg:h-[50px] lg:top-0 lg:overflow-hidden lg:items-center lg:justify-evenly lg:rounded-lg'>
      <div className='flex space-x-2'>
        
        {/* <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div> */}
        <Image
          src='/assets/img-alert.png'
          alt='logo-alert'
          width={78}
          height={62}
          className='w-[58px] h-[42px] '
        />
        <p className='w-[270px] h-auto text-sm lg:w-[645px]'>
          Estas a un paso de poder utilizar las funcionalidades de Burofy. Para que esto sea
          posible, es necesario que llenes tu perfil. Con la intención de garantizar un servicio de
          calidad en la plataforma.
        </p>
      </div>
      <div>
        <button className='w-[353px] h-[40px] rounded-lg justify-center items-center bg-[#2e2e2e] m-2 text-white lg:w-[120px]'>
          ir a mi perfil
        </button>
      </div>
    </div>
  );
};

export default AlertRegister;