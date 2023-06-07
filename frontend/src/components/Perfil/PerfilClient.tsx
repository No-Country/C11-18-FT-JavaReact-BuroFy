"use client";
import React from "react";
import PersonalInfo from "./PersonalInfo";

import Payment from "./Payment";
import Reviews from "./Reviews";

export default function PerfilCliente() {
  return (
    <div className='space-y-6 mb-5'>
      <PersonalInfo />
      <Payment />
      <Reviews />
    </div>
  );
}
