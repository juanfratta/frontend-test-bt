import { FunctionComponent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getUsers } from '../../../state/users/actions.users';
import { selectUsers } from '../../../state/users/selectors.users';
import { LoadingState } from '../../../typings/state.types';
import Header from '../../Header';

import Paginator from '../../Paginator';
import SearchUser from '../../SearchUser';
import AddUserForm from '../AddUserForm';
import { UsersList } from './UsersList';
import { ListWrapper } from './UsersList.styled';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { loading, users } = useAppSelector(selectUsers);
  const [page, setPage] = useState<number>(1);

  const limit = 5;
  const showUsersList = LoadingState.COMPLETED && users.length !== 0;
  const haveUsers = LoadingState.COMPLETED && users.length ? true : false;

  useEffect(() => {
    dispatch(getUsers({ page, limit }));
  }, [dispatch, page]);

  const handlerPaginate = (e: any) => {
    if (e.target.id === 'next') {
      users.length && setPage(page + 1);
    }
    if (e.target.id === 'prev') {
      page > 1 && setPage(page - 1);
    }
  };

  return (
    <ListWrapper>
      <Header />

      {loading === LoadingState.PENDING && <p>Loading ... </p>}
      {!haveUsers && page === 1 && <p>No hay usuarios para mostrar ...</p>}
      {!haveUsers && page > 1 && <p>No hay más usuarios ...</p>}
      {loading === LoadingState.FAILURE && <p>Error</p>}

      {showUsersList && <UsersList limit={limit} page={page} users={users} />}

      <Paginator haveUsers={haveUsers} page={page} handlerPaginate={handlerPaginate} />
    </ListWrapper>
  );
};

export default UsersListContainer;
