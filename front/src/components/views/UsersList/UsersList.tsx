import { FunctionComponent } from 'react';

import { useAppDispatch } from '../../../hooks/hooks';
import { getAllUsers, getUsers, removeUser } from '../../../state/users/actions.users';
import { User } from '../../../typings/user.types';

import UserItem from '../../UserItem';

import { List, HeaderList } from './UsersList.styled';

interface UsersList {
  limit: number;
  page: number;
  users: User[];
  setPage: any;
}
export const UsersList: FunctionComponent<UsersList> = ({
  users,
  page,
  limit,
  setPage,
}) => {
  const dispatch = useAppDispatch();

  const handlerDelete = async (id: number) => {
    await dispatch(removeUser(id));
    await dispatch(getUsers({ page, limit }));

    if (users.length === 1) {
      setPage(page - 1);
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
