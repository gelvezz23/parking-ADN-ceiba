import { axiosIntance } from '../config/AxiosConfig';

export const DaysRepository = {
  getListOfDays: () => axiosIntance.get('/days'),
};
