import axios from 'axios';
import { ServiceResponse } from '../../typings/service.types';
import { User } from '../../typings/user.types';

const URL = 'http://localhost:4000';

const users_svc = {
  //action para para traer los usuarios y si le paso los parámetros, usuario por página
  async fetchUsers(page?: number, limit?: number): Promise<ServiceResponse<User[]>> {
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

  //action para traer un usuario específico
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

  //action para crear un nuevo usuario
  async postUser(user: User): Promise<ServiceResponse<any>> {
    try {
      const { data } = await axios.post(`${URL}/api/users`, user);

      return { success: true, data };
    } catch (e) {
      const error =
        e instanceof Error
          ? e
          : new Error('Ocurrió un error al intentar agregar el usuario');
      return { success: false, error };
    }
  },

  //action para eliminar un usuario
  async deleteUser(id: number): Promise<ServiceResponse<any>> {
    try {
      const resp = await axios.delete(`${URL}/api/users/${id}`);

      let userDeleted;

      if (resp.status === 200) {
        userDeleted = id;
      }

      return { success: true, data: userDeleted };
    } catch (e) {
      const error =
        e instanceof Error
          ? e
          : new Error('Ocurrió un error al intentar borrar el usuario');
      return { success: false, error };
    }
  },
};

export default users_svc;
