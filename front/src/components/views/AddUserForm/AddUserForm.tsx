import React, { useState } from 'react';

import { addUser, getAllUsers, getUsers } from '../../../state/users/actions.users';
import { addUserSchema } from './AddUseForm.schema';
import { useAppDispatch } from '../../../hooks/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ModalContent, StyleModal } from './AddUserForm.styled.';

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
    dispatch(getAllUsers());
    dispatch(getUsers({ page, limit }));
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Agregar Usuario</button>

      <StyleModal isOpen={isOpen}>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <button onClick={() => setIsOpen(false)}>cerrar</button>

          <label htmlFor="photo">Imagen:</label>
          <input {...register('photo')} type="text" />
          <p>{errors.photo?.message}</p>

          <label htmlFor="name">Nombre</label>
          <input {...register('name')} type="text" />
          <span>{errors.name?.message}</span>

          <label htmlFor="description">Descripción:</label>
          <input {...register('description')} type="text" />
          <span>{errors.description?.message}</span>

          <button type="submit">Agregar</button>
        </form>
      </StyleModal>
    </div>
  );
};
export default AddUserForm;
