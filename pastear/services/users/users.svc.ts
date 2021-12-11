import axios from 'axios';
import { ServiceResponse } from '../../typings/service.types';
import { User } from '../../typings/user.types';

const users_svc = {
  async fetchUsers(): Promise<ServiceResponse<User>> {
    try {
      const URL = 'http://localhost:4000';

      const { data } = await axios.get(`${URL}/api/users`);

      return { success: true, data };
    } catch (catchError) {
      const error =
        catchError instanceof Error
          ? catchError
          : new Error('Ocurrió un error desconocido');
      return { success: false, error };
    }
  },
};

export default users_svc;
