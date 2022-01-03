import { FunctionComponent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { getUserByName } from '../../state/users/actions.users';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input, SearchWrapper } from './SearchUser.styled';

interface SearchUserProps {}

const SearchUser: FunctionComponent<SearchUserProps> = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const enter = 'Enter' || 'NumpadEnter';

  const onSubmit = (e: any) => {
    if (e.key === enter) {
      dispatch(getUserByName(value));
      setValue('');
    }
  };
  return (
    <SearchWrapper>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => onSubmit(e)}
        placeholder="Buscar contacto..."
      />
      <FontAwesomeIcon
        icon={faSearch}
        style={{ position: 'absolute', left: '5px', color: 'orange' }}
      />
    </SearchWrapper>
  );
};

export default SearchUser;
