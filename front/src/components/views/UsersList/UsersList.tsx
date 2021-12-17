import { FunctionComponent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getUserByName, getUsers, removeUser } from '../../../state/users/actions.users';
import { selectUsers } from '../../../state/users/selectors.users';
import { LoadingState } from '../../../typings/state.types';
import { User } from '../../../typings/user.types';
import AddUserForm from '../AddUserForm';

const UsersList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { loading, users } = useAppSelector(selectUsers);

  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  const limit = 2;
  const showUsersList = LoadingState.COMPLETED && users.length !== 0;
  const noUsers = LoadingState.COMPLETED && !users.length;

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

  const hanlderSearch = () => {
    dispatch(getUserByName(value));
    setValue('');
  };

  const handlerDelete = (id: number) => {
    dispatch(removeUser(id));
    dispatch(getUsers({ page, limit }));
  };

  return (
    <div>
      <AddUserForm />
      <button id='next' onClick={(e) => handlerPaginate(e)}>
        NexPage
      </button>
      {page > 1 && (
        <button id='prev' onClick={(e) => handlerPaginate(e)}>
          PrevPage
        </button>
      )}
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => hanlderSearch()}>buscar usuario</button>

      {loading === LoadingState.PENDING && <p>Loading ... </p>}
      {/* TODO: puedo preguntar solo por noUsers y pasarle la page
         como prop a un componente message*/}
      {noUsers && page === 1 && <p>No hay usuarios para mostrar ...</p>}
      {noUsers && page > 1 && <p>No hay más usuarios ...</p>}

      {showUsersList &&
        users.map((user) => (
          <div key={user.id}>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => handlerDelete(user.id!)}>Delete</button>
          </div>
        ))}
      {loading === LoadingState.FAILURE && <p>Error</p>}
    </div>
  );
};

export default UsersList;
