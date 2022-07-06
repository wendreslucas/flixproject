import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefaultLayout from '../../components/DefaultLayout';
import CadastroCategoria from '../Cadastro/Categoria';
import CadastroVideo from '../Cadastro/Video';
import Home from '../Home';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/cadastro/video" element={<CadastroVideo />} />
          <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
