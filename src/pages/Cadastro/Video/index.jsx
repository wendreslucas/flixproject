import React from 'react';
import { Link } from 'react-router-dom';
import FormField from './../../../components/FormField/index';

function CadastroVideo() {
  return (
    <>
      <h1>Cadastro de Video</h1>
      <form>
        <FormField label="Titulo" name="titulo" type="text" />
      </form>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </>
  );
}

export default CadastroVideo;
