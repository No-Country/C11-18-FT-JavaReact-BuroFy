"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
import Payment from "./Payment";
import Reviews from "./Reviews";

export default function PerfilCliente() {
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setTimeout(() => setImageLoading(false), 600);
  };

  return (
    <motion.div
      className='space-y-6 mb-5'
      initial={{ opacity: 0 }}
      animate={{
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      onLoad={imageLoaded}
    >
      <PersonalInfo />
      <Payment />
      <Reviews />
    </motion.div>
  );
}
