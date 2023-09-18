import * as Yup from 'yup';

export const editFolderSchema = Yup.object().shape({
  oldFolderName: Yup.string().trim().required('email is required field'),
  newFolderName: Yup.string()
    .trim()
    .required()
    .min(3, 'Length should be more then 3 chatacters')
    .max(20, 'Length schould be less then 20 characters'),
});
