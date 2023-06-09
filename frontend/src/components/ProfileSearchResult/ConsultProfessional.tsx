"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMsg from "../ErrorMsg";
import { setVerified } from "@/redux/features/userSlice";
import { createConsultation } from "@/lib/services-burofy/createConsultation";

interface commentsConsultation {
  comments: string;
}

export default function ConsultProfessional({ idProfessional }: { idProfessional: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id: idClient } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<commentsConsultation>();

  const onSubmit = async (data: commentsConsultation) => {
    dispatch(setVerified("checking"));
    const { comments } = data;
    if (data) {
      await createConsultation(idClient, idProfessional, comments);
      router.push("/inicio");
    }
    dispatch(setVerified("authenticated"));
  };

  return (
    <>
      <div className='p-4'>
        <header>
          <h1 className='text-[18px] pb-3 font-bold'>Realizar una consulta</h1>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder='Escribí tu consulta acá'
            className='min-w-[340px] w-full rounded-md bg-[#F1F1F1] border-[#D3D3D4] min-h-[126px] caret-lilac'
            {...register("comments", {
              required: "Escribe consulta para vincularte con un profesional",
              maxLength: 500,
              minLength: 50,
            })}
          ></textarea>
          {errors.comments && <ErrorMsg>{errors.comments?.message as string}</ErrorMsg>}

          <label className='flex text-[12px] items-center justify-between p-4'>
            <p>Limite de caracteres</p>
            <span className='flex items-center space-x-5'>
              <p>0/500</p>
              <button
                type='submit'
                className='w-[110px] hidden xl:block text-[16px] font-bold text-white  rounded-md h-[40px] hover:scale-110 bg-black hover:bg-primary active:scale-95 transition'
              >
                Enviar
              </button>
            </span>
          </label>
        </form>
      </div>
    </>
  );
}
