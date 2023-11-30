import React from 'react';
import { ClassName } from 'app/types/common';
import classNames from 'classnames';
import { Builder } from 'app/scenes/Landing/scenes/Builders/types/builder';
import Marquee from 'react-fast-marquee';

type Props = ClassName & {
  builders: Builder[];
  directionOfMovement?: 'right' | 'left';
};

export const BuildersCarousel = ({ className, builders, directionOfMovement = 'left' }: Props) => {
  return (
    <div className={classNames('', className)}>
      <Marquee speed={20} gradient={false} direction={directionOfMovement}>
        {builders.map((builder) => (
          <div
            key={builder.photo}
            className={classNames(
              ``,
              'relative mx-1.5 flex h-[298px] w-[247px] flex-col justify-end overflow-hidden rounded-lg pl-4 pb-6',
            )}
          >
            <img className="absolute top-0 left-0 z-10" src={`/builders/${builder.photo}`} alt="" />
            <p className="z-20 text-sm font-medium text-white">{builder.fundName}</p>
            <p className="z-20 text-xl-higher font-medium text-white">{builder.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
