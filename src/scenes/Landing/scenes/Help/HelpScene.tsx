import React from 'react';
import { Button } from 'app/components/Button/Button';
import { SIZE } from 'app/constants/common';
import { ScrollCallback } from 'app/types/common';

export const HelpScene = ({ onScroll }: ScrollCallback) => {
  return (
    <section id="help-scene" className="bg-help-gradient xl:flex">
      <img className="hidden w-1/2 xl:block" src="/help-scene-trader.png" srcSet="/help-scene-trader@2x.png" alt="" />
      <div
        className="
          custom-container
          mb-10
          flex
          justify-center
          overflow-hidden
          md:mb-16
          2md:justify-end
        "
      >
        <div className="w-full pt-16 pt-16 md:pt-28 lg:pl-10 xl:pl-20 2xl:pl-40">
          <p className="text-center text-2sm uppercase text-blue-900 md:text-start md:text-base">We’re here to help</p>
          <h1 className="mt-2 text-center md:text-start 2md:mt-4">
            What&apos;s an
            <br className="hidden lg:block" /> Indyfund?
          </h1>
          <p className="mt-10 text-start font-bold text-blue-900 2md:text-xl-higher lg:w-10/12">
            An Indyfund is what we call the custom index of stocks that you create, manage, balance, and invest in with
            a single click.
          </p>
          <p className="mt-4 text-2sm 2md:text-base lg:w-10/12">
            No more managing extensive portfolios and pulling your hair out trying to balance you risk. Don&apos;t worry
            about buying single assets - your Indyfund automatically distributes your investments based on your
            confidence levels.
            <br />
            <br />
            Re-balance your Indyfund at any time, including adding or removing stocks, crypto and more. Build your Indyfund, leverage your custom AI expert, and beat the Wall Street institutions at their own game.
          </p>

          <div className="mt-16 hidden justify-center md:flex lg:mt-20 xl:justify-start">
            <Button size={SIZE.L} onClick={() => onScroll('welcome-screen')}>
              Sign Up Today
            </Button>
          </div>
        </div>
      </div>

      <img className="w-full xl:hidden" src="/help-scene-trader.png" srcSet="/help-scene-trader@2x.png" alt="" />
    </section>
  );
};
