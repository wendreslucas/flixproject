import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import { toast } from 'react-toastify';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((error) => {
        toast.error('Erro ');
      });
  }, []);

  if (!dadosIniciais) {
    return <div>...Loading</div>;
  }

  return (
    <div style={{ background: '#141414' }}>
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na area os termos, HTML, CSS, JavaScript"
              />
              <Carousel ignoreFirsVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </div>
  );
}

export default Home;
