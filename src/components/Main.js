import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Main;
