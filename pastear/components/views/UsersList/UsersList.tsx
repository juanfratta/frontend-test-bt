import React, { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getUsers } from '../../../state/users/actions.users';
import { selectUsers } from '../../../state/users/selectors.users';

export const UsersList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(users);

  return (
    <div>
      <h1>Users List</h1>
    </div>
  );
};
