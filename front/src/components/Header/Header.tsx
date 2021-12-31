import { FunctionComponent } from 'react';
import SearchUser from '../SearchUser';
import AddUserForm from '../views/AddUserForm';
import { HeaderContainer } from './Header.styled';

interface HeaderProps {
  page: number;
  limit: number;
}

const Header: FunctionComponent<HeaderProps> = ({ ...props }) => {
  return (
    <HeaderContainer>
      <SearchUser /> <AddUserForm {...props} />
    </HeaderContainer>
  );
};

export default Header;
