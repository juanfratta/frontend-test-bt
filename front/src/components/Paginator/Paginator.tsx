import { FunctionComponent, SyntheticEvent } from 'react';

interface PaginatorProps {
  page: number;
  lastPage: number;
  handlerPaginate: (e: SyntheticEvent) => void;
}

const Paginator: FunctionComponent<PaginatorProps> = ({
  page,
  handlerPaginate,
  lastPage,
}) => {
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
