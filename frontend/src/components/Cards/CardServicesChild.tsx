"use client";

import { Consultation } from "@/interfaces/consultation";
import AvatarProfile from "../Avatars/AvatarProfile";
import { useAppSelector } from "@/hooks";
import { Rol } from "@/interfaces/user";

const CardServicesChild = ({ consult }: { consult: Consultation }) => {
  const { rol } = useAppSelector((state) => state.user);
  
  return (
    <div className='flex flex-col lg:flex-col w-[337px] h-[138px] p-2 bg-[#EBEBEB] rounded-lg lg:w-[423px] lg:h-[126px] lg:mb-3 lg:p-1.5'>
      <div className='flex ms-2 mt-1 lg:mt-0 lg:ms-0 lg:flex lg:p-3 lg: lg:gap-10 mb-2 lg:mb-0'>
        <div className='flex items-center'>
          <p className='text-xs lg:font-normal leading-[14px]'>N° del servicio:</p>
          <p className='bg-gray-700  text-[#FFFFFF]  ms-3 leading-[16px] text-xs font-normal mr-2 px-2.5 py-0.5 rounded-full self-center'>
            {consult.id}
          </p>
        </div>
        <div className='flex items-center'>
          <p className='text-xs lg:font-normal'>Fecha:</p>
          <p className='bg-gray-700 w-[96px] h-[20px] text-white text-center ms-4 text-xs mr-2 px-2.5 py-0.5 rounded-full self-center'>
            {consult.date}
          </p>
        </div>
      </div>
      <div className='flex mt-10 lg:[423px] lg:[126px] lg:p-3 lg:gap-2 lg:justify-between absolute '>
        <AvatarProfile avatar={consult.avatar as string} fullName={consult.fullName as string} />
        <div className='flex flex-col lg:flex-col w-[180px]'>
          <p className='lg:ml-0 ml-2 lg:px-0 lg:font-bold lg:text-sm w-[220px]'>
            {consult.fullName}
          </p>
          {(rol as Rol) === "professional" && (
            <span className='lg:flex bg-[#D0D0D0] text-[#2E2E2E] w-[135px] text-xs font-normal mt-1 mr-2 lg:ml-0 ml-2 px-2.5 py-0.5 rounded-full '>
              {consult?.experience}
            </span>
          )}
        </div>
      </div>
      <div className='flex relative top-[60px] left-[200px] lg:top-5 lg:left-[220px]'>
        <span className='bg-[#D8D8FE] text-[#3C3CA7] lg:h-[29px] ms-4 text-xs font-normal px-4 text-center w-[102px] py-1.5 rounded-full self-center lg:ml-20'>
          {consult.status}
        </span>
      </div>
    </div>
  );
};

export default CardServicesChild;
