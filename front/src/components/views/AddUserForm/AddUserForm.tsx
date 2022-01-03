import React, { useState } from 'react';

import { addUser, getUsers } from '../../../state/users/actions.users';
import { addUserSchema } from './AddUseForm.schema';
import { useAppDispatch } from '../../../hooks/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  AddUserButton,
  StyleModal,
  ButtonContainer,
  TitleContainer,
  Form,
  SendButtonContainer,
  Error,
} from './AddUserForm.styled.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button';

const Asterisk = () => {
  return (
    <span id="*" style={{ color: 'red' }}>
      <b>*</b>
    </span>
  );
};

type Inputs = {
  name: string;
  description: string;
  photo: string;
};

interface PropsForm {
  page: number;
  limit: number;
}

const AddUserForm: React.FunctionComponent<PropsForm> = ({ page, limit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(addUserSchema),
  });

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data) return;
    dispatch(addUser(data));
    dispatch(getUsers({ page, limit }));
    setIsOpen(false);
  };

  return (
    <ButtonContainer>
      <AddUserButton onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faPlusCircle} />
        {''} Agregar Usuario
      </AddUserButton>

      <StyleModal isOpen={isOpen}>
        <TitleContainer>
          <h3>Agregar nuevo contacto</h3>
        </TitleContainer>

        <Form id="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="photo">
            URL imagen de perfil <Asterisk />:
          </label>
          <input {...register('photo')} type="text" />
          <Error>{errors.photo?.message}</Error>

          <label htmlFor="name">
            Nombre <Asterisk />:
          </label>
          <input {...register('name')} type="text" />
          <Error>{errors.name?.message}</Error>

          <label htmlFor="description">
            Descripción <Asterisk />:
          </label>
          <input id="description" {...register('description')} type="textarea" />
          <Error>{errors.description?.message}</Error>

          <SendButtonContainer>
            <Button type="submit">Guardar</Button>
          </SendButtonContainer>
        </Form>
      </StyleModal>
    </ButtonContainer>
  );
};
export default AddUserForm;
