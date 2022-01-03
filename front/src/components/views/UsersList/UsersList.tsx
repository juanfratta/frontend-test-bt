import { FunctionComponent, memo, useEffect } from 'react';

import { useAppDispatch } from '../../../hooks/hooks';
import { getAllUsers, getUsers, removeUser } from '../../../state/users/actions.users';
import { User } from '../../../typings/user.types';

import UserItem from '../../UserItem';

import { List, HeaderList } from './UsersList.styled';

interface UsersList {
  limit: number;
  page: number;
  users: User[];
  setCurrentPage: any;
}

const UsersList: FunctionComponent<UsersList> = ({
  users,
  page,
  limit,
  setCurrentPage,
}) => {
  const dispatch = useAppDispatch();

  //Al actualizar la lista de usuarios, traemos también todos los usuarios para calcular la cantidad total de páginas.
  //Idealmente, esta data debería venir desde el back, para evitar esta llamada.

  useEffect(() => {
    console.log('entro en userslist');
    dispatch(getAllUsers());
  }, [dispatch, getAllUsers]);

  const handlerDelete = (id: number) => {
    dispatch(removeUser(id));
    dispatch(getUsers({ page, limit }));

    if (users.length === 1) {
      setCurrentPage(page - 1);
    }
  };

  return (
    <List>
      <HeaderList>
        <h4>Nombre</h4>
        <h4>Descripción</h4>
      </HeaderList>
      {users.map((user) => (
        <UserItem key={user.id} user={user} handlerDelete={handlerDelete} />
      ))}
    </List>
  );
};

export default memo(UsersList);
