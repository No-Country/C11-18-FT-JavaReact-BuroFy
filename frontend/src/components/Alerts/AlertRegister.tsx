import Image from "next/image";

const AlertRegister = () => {
  return (
    <div className='w-[373px] h-auto mx-auto bg-[#ededed] md:absolute lg:absolute lg:flex lg:w-[1000px] lg:h-[50px] lg:top-0 lg:overflow-hidden lg:items-center lg:justify-evenly lg:rounded-lg'>
      <div className='flex space-x-2'>
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
