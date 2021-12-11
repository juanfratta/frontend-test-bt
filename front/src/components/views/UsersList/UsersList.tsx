import { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getUsers } from '../../../state/users/actions.users';
import { selectUsers } from '../../../state/users/selectors.users';

export const UsersList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { loading, users } = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>{users && users.map((user) => <p key={user.id}>{JSON.stringify(user)}</p>)}</div>
  );
};
