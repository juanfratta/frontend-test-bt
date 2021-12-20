import { FunctionComponent } from 'react';

import { useAppDispatch } from '../../../hooks/hooks';
import { getUsers, removeUser } from '../../../state/users/actions.users';
import { User } from '../../../typings/user.types';
import SearchUser from '../../SearchUser';
import UserItem from '../../UserItem';
import { List, HeaderList } from './UsersList.styled';

interface UsersList {
  limit: number;
  page: number;
  users: User[];
}
export const UsersList: FunctionComponent<UsersList> = ({ users, page, limit }) => {
  const dispatch = useAppDispatch();

  const handlerDelete = (id: number) => {
    dispatch(removeUser(id));
    dispatch(getUsers({ page, limit }));
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
