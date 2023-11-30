import React from 'react';
import { Builder } from 'app/scenes/Landing/scenes/Builders/types/builder';
import { BuildersCarousel } from 'app/scenes/Landing/scenes/Builders/components/BuildersCarousel/BuildersCarousel';

const UpperBuildersCarousel: Builder[] = [
  {
    name: 'Ricky McClure',
    photo: 'ricky-mcClure.png',
    fundName: 'New York',
  },
  {
    name: 'Cheryl Hills',
    photo: 'cheryl-hills.png',
    fundName: 'Lake Adella',
  },
  {
    name: 'Dora Hermiston',
    photo: 'dora-hermiston.png',
    fundName: 'Daviston',
  },
  {
    name: 'Lowell Kuphal',
    photo: 'lowell-kuphal.png',
    fundName: 'North Aliyaville',
  },
  {
    name: 'Melinda Boehm',
    photo: 'melinda-boehm.png',
    fundName: 'Frisco',
  },
  {
    name: 'Theresa Daugherty',
    photo: 'theresa-daugherty.png',
    fundName: 'Kamrenchester',
  },
  {
    name: 'Jane Lynch',
    photo: 'jane-lynch.png',
    fundName: 'Bristol',
  },
  {
    name: 'Cory Ratke',
    photo: 'cory-ratke.png',
    fundName: 'Stokesmouth',
  },
];

const BottomBuildersCarousel: Builder[] = [
  {
    name: 'New York',
    photo: 'neal-luettgen.png',
    fundName: 'Othochester',
  },
  {
    name: 'Kenny Stracke',
    photo: 'kenny-stracke.png',
    fundName: 'Othochester',
  },
  {
    name: 'Thelma Pagac',
    photo: 'thelma-pagac.png',
    fundName: 'New Johnnie',
  },
  {
    name: 'Janice Blick',
    photo: 'janice-blick.png',
    fundName: 'Janaton',
  },
  {
    name: 'Vivian Wiza',
    photo: 'vivian-wiza.png',
    fundName: 'Port Abner',
  },
  {
    name: 'Tricia Collier',
    photo: 'tricia-collier.png',
    fundName: 'Elzatown',
  },
  {
    name: 'Sonja Miller',
    photo: 'sonja-miller.png',
    fundName: 'Rolfsonfort',
  },
  {
    name: 'Mike Welch',
    photo: 'mike-welch.png',
    fundName: 'Sparks',
  },
];

export const BuildersScene = () => {
  return (
    <section
      id="builders-scene"
      className="bg-blue-900 bg-builders-mobile bg-auto bg-left bg-no-repeat pt-16 pb-24 md:bg-builders md:pt-20 md:pb-32"
    >
      <p className="text-center text-2sm uppercase text-blue-500 md:text-base">what people think</p>
      <h1 className="mt-2 text-center text-3xl text-white md:mt-2 md:text-4xl">
        Future Indyfund
        <br /> Builders
      </h1>

      <div className="hidden md:block">
        <BuildersCarousel className="mt-20" builders={UpperBuildersCarousel} />

        <BuildersCarousel className="mt-4" builders={BottomBuildersCarousel} directionOfMovement="right" />
      </div>

      <BuildersCarousel
        className="mt-10 md:hidden"
        builders={[...UpperBuildersCarousel, ...BottomBuildersCarousel]}
        directionOfMovement="right"
      />
    </section>
  );
};
