import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutScene } from 'app/scenes/Layout/LayoutScene';
import { LandingScene } from 'app/scenes/Landing/LandingScene';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutScene />}>
          <Route index element={<LandingScene />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
