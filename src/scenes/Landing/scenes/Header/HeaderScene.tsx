import React from 'react';
import { Button } from 'app/components/Button/Button';
import { ScrollCallback } from 'app/types/common';

type HeaderLink = {
  label: string;
  scrollElementId: string;
  visible: boolean;
};

const links: HeaderLink[] = [
  {
    label: 'Features',
    scrollElementId: 'expectation-scene',
    visible: true,
  },
  {
    label: 'Indyfund Builders',
    scrollElementId: 'builders-scene',
    visible: false,
  },
  {
    label: 'Our Philosophy',
    scrollElementId: 'our-philosophy-scene',
    visible: true,
  },
];

export const HeaderScene = ({ onScroll }: ScrollCallback) => {
  return (
    <header className="bg-black-900">
      <div className="custom-container flex justify-center pt-5 sm:pt-20 lg:items-center lg:justify-between lg:pt-10">
        <div>
          <img className="w-44 sm:w-64 lg:w-full" alt="Logo" src="/logo-white.svg" />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {links.map((link) => {
              if (!link.visible) {
                return null;
              }

              return (
                <li key={link.label} className="mr-10">
                  <button
                    className="text-gray-700 transition-colors hover:text-gray-600"
                    onClick={() => onScroll(link.scrollElementId)}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}

            <Button className="py-2" onClick={() => onScroll('welcome-screen')}>
              Get Early Access
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
