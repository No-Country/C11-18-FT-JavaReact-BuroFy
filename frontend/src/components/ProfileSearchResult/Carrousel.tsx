"use client";   
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardReviewProfileResult from "../Cards/CardReviewProfileResult";

type PropsTypes = {
    example:any,
    perView:number,
}

export default function Carrousel({example,perView}:PropsTypes) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { origin:"auto", perView:perView, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });
  return (
    <div ref={ref} className="sm:w-4/5 md:w-[400px] xl:w-[500px] keen-slider">
      { example.map((e: any)=>  <div className="w-[274px] keen-slider__slide " key={e.name}> <CardReviewProfileResult e={e} /></div>)}
    </div>
  );
}
