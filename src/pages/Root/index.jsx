import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../../components/DefaultLayout';
import Home from '../Home';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teste" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
