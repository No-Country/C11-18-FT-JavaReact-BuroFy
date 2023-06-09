import React from "react";
import Heroimage from "../Heroimage";
import { Carousel } from "./Carousel";

export default function Lapandingpage() {
  return (
    <section className='layout-out flex-row-reverse'>
      <Heroimage />
      <Carousel />
    </section>
  );
}
