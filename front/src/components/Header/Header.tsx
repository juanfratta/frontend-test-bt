import { FunctionComponent } from 'react';
import SearchUser from '../SearchUser';
import AddUserForm from '../views/AddUserForm';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div>
      <SearchUser /> <AddUserForm />
    </div>
  );
};

export default Header;
