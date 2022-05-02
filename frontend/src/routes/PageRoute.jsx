import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MyNotes from '../pages/MyNotes';

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mynotes" element={<MyNotes />} />
    </Routes>
  );
};

export default PageRoute;
