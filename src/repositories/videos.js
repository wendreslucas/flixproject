import { api } from '../services/api';
import { toast } from 'react-toastify';

const createVideo = async (values) => {
  const video = {
    titulo: values.titulo,
    url: values.url,
    categoriaId: values.categoriaId,
  };
  try {
    await api.post('/videos', video);
    toast.success('Video cadastrado com sucesso!');
  } catch (error) {}
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createVideo,
};
