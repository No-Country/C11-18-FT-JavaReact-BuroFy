"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import ButtonAuth from "../Buttons/ButtonAuth";

import "./styles.css";

import image1 from "../../../public/assets/sliderdesk1.svg";
import image2 from "../../../public/assets/sliderdesk2.svg";
import image3 from "../../../public/assets/sliderdesk3.svg";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Recibe asesoria legal efectiva",
    subtitle: "Gracias a nuestro sistema de búsqueda avanzada, como cliente encontrarás a los mejores expertos para tus asesorías.",
    
    image: image1,
  },
  {
    title: "Amplia tu cartera de clientes",
    subtitle: "Como profesional, atendiendo las solicitudes de los clientes. Además, podrás generar ingresos extras por ello.",
    image: image2,
  },
  {
    title: "Con Bourofy conectarse es más fácil",
    subtitle: "Plataforma diseñada por expertos para brindar soluciones legales al alcance de tu mano",
    image: image3,
  },
];

export const Carousel = () => (
  <section className="flex flex-col w-full md:w-1/2 shadow-md rounded-md h-screen bg-white pb-12 md:px-6">
    <ReactCarousel
      className="react-carousel"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {slides.map((slide) => (
        <div key={slide.title} className="react-carousel-slide mb-[6rem]">
          <div className="image-wrapper mt-14 md:mt-32">
            <Image src={slide.image} width={250} height={250} alt="image"   />
          </div>
          <div className="md:px-40 text-center">
            <h2 className="title px-12 md:text-2xl">{slide.title}</h2>
            <h3 className="subtitle hidden md:flex md:text-lg ">{slide.subtitle}</h3>
          </div>
          
        </div>
      
      ))}
      
    </ReactCarousel>
    <Link href="/registro" className="mx-auto mb-32 md:mb-64">
      <ButtonAuth>Empezar ahora</ButtonAuth>
    </Link>
    
    
  </section>
  
);



