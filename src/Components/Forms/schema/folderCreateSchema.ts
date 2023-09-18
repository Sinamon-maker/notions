import * as Yup from 'yup';

export const createFolderSchema = Yup.object().shape({
  folder: Yup.string()
    .trim()
    .required()
    .min(3, 'Length should be more then 3 chatacters')
    .max(20, 'Length schould be less then 20 characters'),
});
