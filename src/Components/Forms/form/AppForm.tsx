import React, {ReactNode} from 'react';
import {Formik, FormikValues, FormikConfig} from 'formik';

import * as Yup from 'yup';

type FormData<T extends Yup.Maybe<Yup.AnyObject>> = FormikConfig<T> & {
  initialValues: T;
  onSubmit: (val: T) => void;
  validationSchema: Yup.ObjectSchema<T> | undefined;
  children: ReactNode;
  validateOnMount?: boolean;
};

export const AppForm = <T extends FormikValues>(props: FormData<T>) => {
  const {initialValues, onSubmit, children, validateOnMount, ...rest} = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnMount={validateOnMount}
      {...rest}>
      {() => <>{children}</>}
    </Formik>
  );
};
