import { FunctionComponent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { getUserByName } from '../../state/users/actions.users';

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
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => onSubmit(e)}
      placeholder="Buscar contacto"
    />
  );
};

export default SearchUser;
