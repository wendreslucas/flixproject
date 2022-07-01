import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categoria, setCategoria] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Categoria: ' + categoria);
    setCategoria('');
  }

  return (
    <>
      <h1>Cadastro de Categorias</h1>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <label>Nome da Categoria</label>
        <input
          onChange={(e) => setCategoria(e.target.value)}
          type="text"
          value={categoria}
        />
        <button>Cadastrar</button>
      </form>
    </>
  );
}

export default CadastroCategoria;
