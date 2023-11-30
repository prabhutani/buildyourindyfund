import React from 'react';
import { Button } from 'app/components/Button/Button';
import { SIZE } from 'app/constants/common';
// import facebookIcon from 'app/icons/svg-facebook.svg';
// import instagramIcon from 'app/icons/svg-instagram.svg';
import twitterIcon from 'app/icons/svg-twitter.svg';
import { ClassName, ScrollCallback } from 'app/types/common';
import classNames from 'classnames';

export const FooterScene = ({ onScroll }: ScrollCallback) => {
  const renderContactUsBlock = ({ className }: ClassName) => (
    <div className={classNames('text-2sm', className)}>
      <span className="text-blue-500">Contact us: </span>
      <span className="text-blue-100">Info@BuildYourIndyfund.com</span>
    </div>
  );

  return (
    <footer id="footer-scene" className="bg-black-900 pb-6 pt-10 md:pb-7 lg:pt-20 lg:pb-10">
      <div className="custom-container">
        <div className="flex flex-col items-start justify-between 2md:flex-row">
          <div className="flex items-start">
            {/*<div className="mr-12 flex flex-col items-start md:mr-[76px]">*/}
            {/*  <p className="text-xl-higher font-bold text-blue-900">Get to Know Us</p>*/}

            {/*  <button className="mt-6 text-blue-100 transition-colors hover:text-gray-600" onClick={() => onScroll('')}>*/}
            {/*    About*/}
            {/*  </button>*/}

            {/*  <button className="mt-4 text-blue-100 transition-colors hover:text-gray-600" onClick={() => onScroll('')}>*/}
            {/*    Blog*/}
            {/*  </button>*/}
            {/*</div>*/}

            <div className="flex flex-col items-start">
              <p className="text-xl-higher font-bold text-blue-900">Legal</p>

              {/*<button className="mt-6 text-blue-100 transition-colors hover:text-gray-600" onClick={() => onScroll('')}>*/}
              {/*  Privacy Policy*/}
              {/*</button>*/}

              <a
                className="mt-6 text-blue-100 transition-colors hover:text-gray-600"
                href="/TermsOfUse.docx"
                target="_blank"
                download
              >
                Terms Of Use
              </a>
            </div>
          </div>

          <Button
            className="mt-10 hidden 2md:mt-0 2md:block"
            size={SIZE.L}
            rounded={true}
            onClick={() => onScroll('welcome-screen')}
          >
            Get Early Access
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-center 2md:mt-20 2md:items-start">
          <h1 className="text-center text-blue-900 2md:text-start">
            Create your own
            <br className="hidden md:block" />
            <span className="md:hidden">&nbsp;</span>unique Indyfund
          </h1>

          <p className="mt-4 text-center text-2sm text-blue-100 2md:w-[660px] 2md:text-start">
            <strong className="text-blue-100">Disclaimer:</strong> An Indyfund is not a separate fund vehicle or a
            third-party separately managed account. Indyfund is the internal name given to a portfolio created within
            our system by our users. It is not considered to be a fund in any legal or regulatory sense.
          </p>

          <Button className="mt-8 2md:hidden" size={SIZE.L} onClick={() => onScroll('welcome-screen')}>
            Get Early Access
          </Button>
        </div>

        <div className="mt-20 flex items-center justify-between">
          <div className="flex">
            {/*<a className="mr-2" href="https://facebook.com" target="_blank" rel="noreferrer">*/}
            {/*  <img src={facebookIcon} alt="" />*/}
            {/*</a>*/}
            <a className="mr-2" href="https://twitter.com/YourIndyfund" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="" />
            </a>
            {/*<a href="https://instagram.com" target="_blank" rel="noreferrer">*/}
            {/*  <img src={instagramIcon} alt="" />*/}
            {/*</a>*/}
          </div>

          {renderContactUsBlock({ className: 'hidden md:block' })}

          <p className="text-xs text-blue-900">© 2022 Build Your Indyfund</p>
        </div>

        <div className="mt-4 flex justify-center md:hidden">{renderContactUsBlock({ className: '' })}</div>
      </div>
    </footer>
  );
};
