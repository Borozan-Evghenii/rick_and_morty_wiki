import React from 'react';

interface HeroSectionProps {
  bgImage?: string | undefined;
  title?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ bgImage, title }) => (
  <div className="relative z-0 flex h-[50vh] items-center justify-center overflow-hidden rounded-[20px]  ">
    <div
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full animate-pulse bg-cover text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className=" absolute bottom-0 left-0 right-0 top-0 h-[100vh] bg-light-primary/40 backdrop-blur-2xl " />
    <h1 className="title relative text-white">{title}</h1>
  </div>
);
