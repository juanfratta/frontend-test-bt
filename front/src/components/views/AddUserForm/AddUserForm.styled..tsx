import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyleModal = Modal.styled`
width: 300px;
height: 400px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: orange;
`;

export const AddUserButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background: #fab43d;
  color: #fff;
  font-weight: 600;
`;

export const ModalContent = styled.div``;
