import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bosses from '../pages/Bosses';
import Collectibles from '../pages/Collectibles';
import FrequentlyAsked from '../pages/FrequentlyAsked';
import Gummi from '../pages/Gummi';

import Home from '../pages/Home';
import RunRoute from '../pages/RunRoute';
import Synthesis from '../pages/Synthesis';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/synthesis" element={<Synthesis />}></Route>
      <Route exact path="/faq" element={<FrequentlyAsked />}></Route>
      <Route exact path="/route" element={<RunRoute />}></Route>
      <Route exact path="/bosses" element={<Bosses />}></Route>
      <Route exact path="/collectibles" element={<Collectibles />}></Route>
      <Route exact path="/gummi" element={<Gummi />}></Route>
    </Routes>
  );
};

export default Main;
