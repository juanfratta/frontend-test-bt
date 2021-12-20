import React, { useState } from 'react';

import { addUser } from '../../../state/users/actions.users';
import { addUserSchema } from './AddUseForm.schema';
import { useAppDispatch } from '../../../hooks/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from 'react-modal';
import { AddUserModal, customStyles } from './AddUserForm.styled.';

type Inputs = {
  name: string;
  description: string;
  photo: string;
};

const AddUserForm: React.FunctionComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(addUserSchema),
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data) return;

    dispatch(addUser(data));
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Modal">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="photo">Imagen:</label>
          <input {...register('photo')} type="text" />
          <p>{errors.photo?.message}</p>

          <label htmlFor="name">Nombre</label>
          <input {...register('name')} type="text" />
          <span>{errors.name?.message}</span>

          <label htmlFor="description">Descripción:</label>
          <input {...register('description')} type="text" />
          <span>{errors.description?.message}</span>

          <input type="submit" onClick={() => setIsOpen(false)} />
          <button onClick={() => setIsOpen(false)}>Cerrar modal</button>
        </form>
      </Modal>
    </>
  );
};
export default AddUserForm;
