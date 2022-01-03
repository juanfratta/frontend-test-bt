import { FunctionComponent } from 'react';
import { User } from '../../typings/user.types';
import { UserStyle, NameContainer, Description } from './UserItem.styled';

interface UserItemProps {
  user: User;
  handlerDelete: (id: number) => void;
}

const UserItem: FunctionComponent<UserItemProps> = ({ user, handlerDelete }) => {
  return (
    <UserStyle>
      <NameContainer id="name">
        <img src={user.photo} />
        <div>
          <h4>{user.name}</h4>
          <p id="delete" onClick={() => handlerDelete(user.id!)}>
            Eliminar
          </p>
        </div>
      </NameContainer>
      <Description>{user.description}</Description>
    </UserStyle>
  );
};

export default UserItem;
