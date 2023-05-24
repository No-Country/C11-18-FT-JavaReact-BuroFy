"use client";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import { User } from "@/interfaces/user";
import Payment from "./Payment";
import Reviews from "./Reviews";

type PropsType = {
  user: User;
};

export default function PerfilCliente({user}:PropsType) {
  return (
    <div className='space-y-6'>
      <PersonalInfo user={user}/>
      <Payment/>
      <Reviews/>
    </div>
  );
}
