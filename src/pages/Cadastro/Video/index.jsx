import React from 'react';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </>
  );
}

export default CadastroVideo;
