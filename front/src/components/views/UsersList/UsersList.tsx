import { FunctionComponent } from 'react';

import { useAppDispatch } from '../../../hooks/hooks';
import { getUsers, removeUser } from '../../../state/users/actions.users';
import { User } from '../../../typings/user.types';

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
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{JSON.stringify(user)}</p>
          <button onClick={() => handlerDelete(user.id!)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
