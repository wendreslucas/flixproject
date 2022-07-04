import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    description: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  return (
    <>
      <h1>Cadastro de Categorias</h1>
      <Link to="/">Home</Link>
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
          <li key={index}>{categoria.nome}</li>
        ))}
      </ul>
    </>
  );
}

export default CadastroCategoria;
