import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyNotes from '../pages/MyNotes';
import Register from '../pages/Register';

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mynotes" element={<MyNotes />} />
    </Routes>
  );
};

export default PageRoute;
