import { axiosIntance } from '../config/AxiosConfig';

export const ClientsRepository = {
  getListOfClients: () => axiosIntance.get('/Clientes'),
  addNewClients: (clients: any) => axiosIntance.post('/Clientes', clients),
  removeClients: (clients: any) =>
    axiosIntance.delete(`/clientes/${clients.id}`, clients),
};
