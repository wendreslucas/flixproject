import React from 'react';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <>
      <h1>Cadastro de Categorias</h1>
      <Link to="/cadastro/video">Cadastrar Video</Link>
    </>
  );
}

export default CadastroCategoria;
