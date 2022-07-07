import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from './../../../components/FormField/index';
import useForm from './../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const navigate = useNavigate();
  const { handleChange, values } = useForm({
    titulo: 'Titulo padrão',
    url: 'https://youtu.be/MPoVCO5na3Q',
    categoria: 'Front End',
  });

  function handleSubmit(e) {
    e.preventDefault();
    videosRepository.createVideo(values);
  }

  return (
    <>
      <h1>Cadastro de Video</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          value={values.titulo}
          onChange={handleChange}
          label="Titulo"
          name="titulo"
          type="text"
        />
        <FormField
          value={values.url}
          onChange={handleChange}
          label="URL"
          name="url"
          type="text"
        />
        <FormField
          value={values.categoria}
          onChange={handleChange}
          label="Categoria"
          name="Categoria"
          type="option"
        />

        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </>
  );
}

export default CadastroVideo;
