import { Clients } from './../../feature/Clients/models/Clients';
import { axiosIntance } from '../config/AxiosConfig';

export const ClientsRepository = {
  getListOfClients: () => axiosIntance.get<Clients[]>('/Clientes'),
  addNewClients: (clients: Clients) =>
    axiosIntance.post<Clients>('/Clientes', clients),
};
