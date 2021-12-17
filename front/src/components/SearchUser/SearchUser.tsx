import { FunctionComponent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUserByName } from '../../state/users/actions.users';

interface SearchUserProps {}

const SearchUser: FunctionComponent<SearchUserProps> = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const hanlderSearch = () => {
    dispatch(getUserByName(value));
    setValue('');
  };
  return (
    <>
      {' '}
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => hanlderSearch()}>buscar usuario</button>
    </>
  );
};

export default SearchUser;
