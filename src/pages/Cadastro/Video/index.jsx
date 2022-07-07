import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from './../../../components/FormField/index';
import useForm from './../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({});

  function handleSubmit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria;
    });

    console.log('categoriaEscolhida', categoriaEscolhida);

    videosRepository.createVideo({
      titulo: values.titulo,
      url: values.url,
      categoriaId: 2,
    });
    navigate('/');
  }

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <>
      <h1>Cadastro de Video</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          onChange={handleChange}
          type="text"
          label="Titulo"
          name="titulo"
          value={values.titulo}
        />
        <FormField
          onChange={handleChange}
          type="text"
          label="URL"
          name="url"
          value={values.url}
        />
        <FormField
          onChange={handleChange}
          label="Categoria"
          name="categoria"
          suggestions={categoryTitles}
          value={values.categoria}
        />

        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </>
  );
}

export default CadastroVideo;
