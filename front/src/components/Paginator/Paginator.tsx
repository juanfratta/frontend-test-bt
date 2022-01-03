import { FunctionComponent, SyntheticEvent } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectUsers } from '../../state/users/selectors.users';

interface PaginatorProps {
  page: number;
  handlerPaginate: (e: SyntheticEvent) => void;
  limit: number;
}

const Paginator: FunctionComponent<PaginatorProps> = ({ page, handlerPaginate }) => {
  const { totalUsers } = useAppSelector(selectUsers);
  let lastPage = Math.ceil(totalUsers.length / 5);

  return (
    <>
      {page < lastPage && (
        <button id="next" onClick={(e) => handlerPaginate(e)}>
          NexPage
        </button>
      )}
      {page > 1 && (
        <button id="prev" onClick={(e) => handlerPaginate(e)}>
          PrevPage
        </button>
      )}
    </>
  );
};

export default Paginator;
