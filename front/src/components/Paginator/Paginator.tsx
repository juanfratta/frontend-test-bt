import { FunctionComponent } from 'react';

interface PaginatorProps {
  haveUsers: boolean;
  page: number;
  handlerPaginate: (e: any) => void;
}

const Paginator: FunctionComponent<PaginatorProps> = ({
  page,
  handlerPaginate,
  haveUsers,
}) => {
  return (
    <>
      {!haveUsers && (
        <button id='next' onClick={(e) => handlerPaginate(e)}>
          NexPage
        </button>
      )}
      {page > 1 && (
        <button id='prev' onClick={(e) => handlerPaginate(e)}>
          PrevPage
        </button>
      )}
    </>
  );
};

export default Paginator;
