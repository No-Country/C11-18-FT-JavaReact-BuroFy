import React, { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const ErrorMsg = ({ children }: PropsType) => {
  return <p className='text-xs my-2 text-center text-red-500 font-bold'>{children}</p>;
};

export default ErrorMsg;
