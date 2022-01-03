import styled from 'styled-components';
import Modal from 'styled-react-modal';
import Button from '../../common/Button';

export const StyleModal = Modal.styled`
width: 600px;
display: flex;
flex-direction:column;
align-items: center;
background-color: lightGray;
`;

export const AddUserButton = styled(Button)`
  height: 100%;
  position: absolute;
  right: 0;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid grey;

  h3 {
    color: #4b4a4a;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;

  label {
    margin: 5px 0;
  }

  input {
    color: grey;
    padding: 5px 2px;
  }

  #description {
    height: 80px;
  }
`;

export const SendButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
export const Error = styled.p`
  color: red;
  font-weight: 600;
`;
