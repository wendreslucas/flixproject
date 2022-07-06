import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { api } from './../../../services/api';
import useForm from './../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    description: '',
    cor: '',
  };

  const { handleChange, clearForm, values } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  }

  useEffect(() => {
    api.get('/categorias').then((res) => {
      setCategorias(res.data);
      console.log(categorias);
    });
  }, []);

  return (
    <>
      <h1>Cadastro de Categorias</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="nome"
          onChange={handleChange}
          type="text"
          value={values.nome}
        />
        <FormField
          label="Descrição"
          name="descricao"
          onChange={handleChange}
          type="textarea"
          value={values.descricao}
        />
        <FormField
          label="Cor"
          name="cor"
          onChange={handleChange}
          type="color"
          value={values.cor}
        />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </>
  );
}

export default CadastroCategoria;
