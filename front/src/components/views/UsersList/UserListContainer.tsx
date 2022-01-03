import { FunctionComponent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getAllUsers, getUsers } from '../../../state/users/actions.users';
import { selectUsers } from '../../../state/users/selectors.users';
import { LoadingState } from '../../../typings/state.types';

import Header from '../../Header';
import Paginator from '../../Paginator';
import UsersList from './UsersList';
import { ListWrapper } from './UsersList.styled';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { loading, users } = useAppSelector(selectUsers);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const limit = 5;
  const showUsersList = LoadingState.COMPLETED && users.length !== 0;

  //Cada vez que actualizamos la página, traemos los usuarios correspondientes.
  useEffect(() => {
    dispatch(getUsers({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  const handlerPaginate = async (e: any) => {
    if (e.target.id === 'next') {
      setCurrentPage(currentPage + 1);
    }
    if (e.target.id === 'prev') {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ListWrapper>
      <Header page={currentPage} limit={limit} />

      {loading === LoadingState.PENDING && <p>Loading ... </p>}

      {!users.length && currentPage === 1 && <p>No hay usuarios para mostrar ...</p>}

      {loading === LoadingState.FAILURE && <p>Ocurrió un error... </p>}

      {showUsersList && (
        <UsersList
          limit={limit}
          page={currentPage}
          users={users}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Paginator
        page={currentPage}
        handlerPaginate={handlerPaginate}
        limit={limit}
        //lastPage={lastPage}
      />
    </ListWrapper>
  );
};

export default UsersListContainer;
