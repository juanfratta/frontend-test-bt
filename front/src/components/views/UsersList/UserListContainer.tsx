import { FunctionComponent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getAllUsers, getUsers } from '../../../state/users/actions.users';
import { selectUsers } from '../../../state/users/selectors.users';
import { LoadingState } from '../../../typings/state.types';

import Header from '../../Header';
import Paginator from '../../Paginator';
import { UsersList } from './UsersList';
import { ListWrapper } from './UsersList.styled';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { loading, users, totalUsers } = useAppSelector(selectUsers);
  const [page, setPage] = useState<number>(1);

  const limit = 5;
  const showUsersList = LoadingState.COMPLETED && users.length;
  const lastPage = Math.ceil(totalUsers?.length / limit);

  //Al cargar la app traemos todos los usuarios para calcular la cantidad total de páginas.
  //Idealmente, esta data debería venir desde el back, para evitar esa llamada.

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  //Cada vez que actualizamos la página, traemos los usuarios corresondientes.
  useEffect(() => {
    dispatch(getUsers({ page, limit }));
  }, [dispatch, page]);

  const handlerPaginate = (e: any) => {
    if (e.target.id === 'next') {
      setPage(page + 1);
    }
    if (e.target.id === 'prev') {
      setPage(page - 1);
    }
  };

  //Si ya no tengo usuarios,< retrocedo una página.

  return (
    <ListWrapper>
      <Header page={page} limit={limit} />

      {loading === LoadingState.PENDING && <p>Loading ... </p>}

      {!users.length && page === 1 && <p>No hay usuarios para mostrar ...</p>}

      {loading === LoadingState.FAILURE && <p>Error</p>}

      {showUsersList && (
        <UsersList limit={limit} page={page} users={users} setPage={setPage} />
      )}

      <Paginator page={page} lastPage={lastPage} handlerPaginate={handlerPaginate} />
    </ListWrapper>
  );
};

export default UsersListContainer;
