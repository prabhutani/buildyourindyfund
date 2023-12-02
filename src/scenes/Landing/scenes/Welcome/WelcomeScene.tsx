import React from 'react';
import { GetEarlyAccessForm } from 'app/components/GetEarlyAccessForm/GetEarlyAccessForm';
import { Expectation } from 'app/scenes/Landing/scenes/Welcome/components/Expectation/Expectation';
import { Button } from 'app/components/Button/Button';
import { SIZE } from 'app/constants/common';
import { MarqueeLine } from 'app/scenes/Landing/scenes/Welcome/components/MarqueeLine/MarqueeLine';
import './WelcomeScene.scss';
import { ScrollCallback } from 'app/types/common';

export const WelcomeScene = ({ onScroll }: ScrollCallback) => {
  return (
    <>
      <section
        id="welcome-screen"
        className="
          welcome-screen
          bg-black-900
          bg-expect-mobile
          bg-contain
          bg-bottom
          bg-no-repeat
          pt-11
          sm:pt-16
          md:bg-expect
          md:bg-auto
          md:bg-top
          md:pt-52
        "
      >
        <div className="custom-container">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-white">
              Try Out Indyfund Building and
              <br className="hidden sm:block" />
              <span className="sm:hidden">&nbsp;</span>Sign Up for Early Access Now
            </h1>

            <p className="mt-4 text-center text-xl text-white sm:mt-10 lg:mt-12">
            Take back control – create your own custom investment
              <br />
              Indyfund with stocks, ETFs and more using our
              <br />
              powerful platform and personalized analysis system
            </p>
            <GetEarlyAccessForm className="mt-28" />
          </div>
        </div>

        <Expectation />

        <div className="mt-14 hidden flex-col items-center justify-center lg:flex lg:flex-row lg:pl-96">
          <Button className="w-max" size={SIZE.L} onClick={() => onScroll('welcome-screen')}>
            Get Early Access
          </Button>

          <p className="mt-5 text-sm text-white md:ml-6 md:mt-0 md:text-base">
            No fees, zero commission - only $7.99 a month
            <br /> when you start your account
          </p>
        </div>
      </section>

      <MarqueeLine className="welcome-screen__marquee-line" />
    </>
  );
};
