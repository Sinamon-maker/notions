import React, {useState} from 'react';

import {AddNewItemComponent} from '../../../Modules/AddNewItemComponent';
import {AppForm} from '../../Forms/form/AppForm';
import * as Yup from 'yup';
import {FormikValues} from 'formik';
import {useCreateData} from '../../../api/useCreateData';
import userStore from '../../../store/auth/userStore';
import useCatalogueStore from '../../../store/auth/catalogueStore';
import {ErrorComponent} from '../../../Modules/ErrorComponent';

const catalogueSchema = Yup.object().shape({
  catalogue: Yup.string().min(2, 'Catalogue shoud be more then 1 letter'),
});

export const NewCatalogue = () => {
  const {err, loading: isLoading, createData} = useCreateData();
  const user = userStore(s => s.user);
  const activeFolder = useCatalogueStore(s => s.activeFolder);
  const errNoFolder = activeFolder === 'all' || !activeFolder ? true : false;

  const onSubmit = (val: FormikValues) => {
    if (user && !errNoFolder) {
      const newCatalogue = {
        title: val.catalogue,
        userId: user?.uid,
        displayName: user?.displayName,
        createdAt: +new Date(),
        tasks: [],
        folder: activeFolder,
      };

      createData('tasks', newCatalogue);
    }
  };
  return (
    <>
      {errNoFolder && <ErrorComponent message={'choose folder'} />}

      <AppForm
        initialValues={{
          catalogue: '',
        }}
        onSubmit={onSubmit}
        validationSchema={catalogueSchema}
        validateOnMount={false}>
        <AddNewItemComponent name="catalogue" isLoading={isLoading} />
      </AppForm>
    </>
  );
};
