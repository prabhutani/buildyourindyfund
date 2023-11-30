import React, { useCallback } from 'react';
import { HeaderScene } from 'app/scenes/Landing/scenes/Header/HeaderScene';
import { WelcomeScene } from 'app/scenes/Landing/scenes/Welcome/WelcomeScene';
import { HelpScene } from 'app/scenes/Landing/scenes/Help/HelpScene';
import { PhilosophyScene } from 'app/scenes/Landing/scenes/Philosophy/PhilosophyScene';
import { FooterScene } from 'app/scenes/Landing/scenes/Footer/FooterScene';

export const LandingScene = () => {
  const handleLinkClick = useCallback((scrollElementId: string): void => {
    const element = document.getElementById(scrollElementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <HeaderScene onScroll={handleLinkClick} />

      <main>
        <WelcomeScene onScroll={handleLinkClick} />

        <HelpScene onScroll={handleLinkClick} />

        {/* Deprecated */}
        {/* <BuildersScene /> */}

        <PhilosophyScene />
      </main>

      <FooterScene onScroll={handleLinkClick} />
    </div>
  );
};
