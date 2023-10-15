import React, {useState} from 'react';

import {AddNewItemComponent} from '../../../Modules/AddNewItemComponent';
import {AppForm} from '../../Forms/form/AppForm';
import * as Yup from 'yup';
import {FormikValues} from 'formik';

const taskSchema = Yup.object().shape({
  task: Yup.string().min(2),
});

export const NewTask = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (val: FormikValues) => {
    console.log(val);
  };
  return (
    <AppForm
      initialValues={{
        task: '',
      }}
      onSubmit={onSubmit}
      validationSchema={taskSchema}
      validateOnMount={false}>
      <AddNewItemComponent name="task" isLoading={isLoading} />
    </AppForm>
  );
};
