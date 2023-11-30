import React, { useState } from 'react';
import classNames from 'classnames';

export const PhilosophyScene = () => {
  const [showContent, setShowContent] = useState(false);

  const handleContentToggle = () => {
    setShowContent((state) => !state);
  };

  return (
    <section id="our-philosophy-scene" className="bg-philosophy-gradient">
      <div className="lg:bg-[url('/freelancer.png')] lg:bg-cover lg:bg-bottom lg:bg-no-repeat">
        <div className="custom-container">
          <div className="pt-20 pb-4 lg:w-1/2 lg:pt-[100px] lg:pr-10 lg:pb-52 xl:pb-72 xl:pr-14 2xl:pb-80 2xl:pr-28">
            <p className="text-center text-2sm uppercase text-blue-900 md:text-start 2xl:text-base">
              It&apos;s about sending a message and beating the market
            </p>
            <h1 className="mt-2 text-center text-3xl md:text-start lg:mt-4 2xl:text-4xl">Our Philosophy</h1>
            <p className="mt-6 text-2sm md:mt-6 md:text-base">
              Institutional investors, such as hedge funds and mutual funds, have been pulling the strings in the market
              for too long. Many times people who invest in these funds don&apos;t even know where their money is even
              going; thus, they lose financial control. These funds then have the ability to manipulate the market
              through aggressively shorting stocks, over-buying or over-selling shares to trigger events, or simply
              tricking the Wall Street algorithms to follow their lead. This is creating a financial environment where
              the little guy, like me, has no chance at playing the market successfully, despite recognizing indicators
              or successful trends. Wall Street pulls all the strings.
              <br />
              <span className={classNames('md:block', !showContent && 'hidden')}>
                <br />
                <strong>This is where Build Your Indyfund comes in.</strong>
                <br />
                <br />
                Build Your Indyfund is a powerful tool that allows investors to create their own fund while rating their
                confidence level of each stock, cryptocurrency, or other security that they pick, allowing for more
                control with managing risk, focusing on the companies you believe in, and controlling your hedging.
                Build Your Indyfund puts control back in our hands - the hands of the retail investor who keeps their
                ear to the ground and knows which companies are going to be market movers.
                <br />
                <br />
                <strong>Take back your power!</strong>
                <br />
                <br />
                Take back control of the market. Eat the hedge funds. Start your own Indyfund today.
              </span>
            </p>

            <button
              className="mt-7 text-md font-bold text-blue-900 md:hidden"
              type="button"
              onClick={handleContentToggle}
            >
              {showContent ? 'Close' : 'Read More'}
            </button>
          </div>
        </div>

        <img
          className="hidden w-full md:block lg:hidden"
          src="/freelancer-medium.png"
          srcSet="/freelancer-medium@2x.png"
          alt=""
        />

        <img className="w-full md:hidden" src="/freelancer-mobile.png" srcSet="/freelancer-mobile@2x.png" alt="" />
      </div>
    </section>
  );
};
