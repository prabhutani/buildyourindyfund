import React from 'react';
import { ClassName } from 'app/types/common';
import classNames from 'classnames';
import './MarqueeLine.scss';
import Marquee from 'react-fast-marquee';

export const MarqueeLine = ({ className }: ClassName) => {
  return (
    <Marquee className={classNames('marquee-line', className)} speed={35} gradient={false}>
      {[...Array(8)].map((el) => (
        <p key={el} className="marquee-line__text">
          invest in yourself
        </p>
      ))}
    </Marquee>
  );
};
