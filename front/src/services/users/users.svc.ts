import axios from 'axios';
import { ServiceResponse } from '../../typings/service.types';
import { User } from '../../typings/user.types';

const URL = 'http://localhost:4000';

const users_svc = {
  async fetchUsers(page: number, limit: number): Promise<ServiceResponse<User[]>> {
    try {
      const params = { _page: page, _limit: limit };

      const { data } = await axios.get(`${URL}/api/users`, { params });

      return { success: true, data };
    } catch (catchError) {
      const error =
        catchError instanceof Error
          ? catchError
          : new Error('Ocurrió un error al intentar consultar los usuarios.');
      return { success: false, error };
    }
  },

  async fetchUser(name: string): Promise<ServiceResponse<User>> {
    try {
      const params = { q: name };
      const { data } = await axios.get(`${URL}/api/users`, { params });
      return { success: true, data };
    } catch (e) {
      const error =
        e instanceof Error ? e : new Error('Ocurrió un error al buscar el usuario');
      return { success: false, error };
    }
  },
};

export default users_svc;
