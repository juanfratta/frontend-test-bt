import * as yup from 'yup';

const url =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const addUserSchema = yup.object({
  name: yup.string().required('Debe especificar un nombre.'),
  description: yup.string().required('Debe añadir una descripción.'),
  photo: yup
    .string()
    .matches(url, 'Ingrese una url válida')
    .required('Debe especificar un url de imagen.'),
});
