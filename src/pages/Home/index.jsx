import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'O que é Front-End?'}
      />
      <Carousel ignoreFirsVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirsVideo category={dadosIniciais.categorias[2]} />
      <Carousel ignoreFirsVideo category={dadosIniciais.categorias[3]} />
      <Carousel ignoreFirsVideo category={dadosIniciais.categorias[4]} />
    </div>
  );
}

export default Home;
