import { api } from '../services/api';

function getAllWithVideos() {
  return api.get('/categorias?_embed=videos').then(async (response) => {
    if (response.status === 200) {
      const resposta = await response.data;
      return resposta;
    }
    throw new Error('Não foi possível carregar os dados');
  });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllWithVideos,
};
