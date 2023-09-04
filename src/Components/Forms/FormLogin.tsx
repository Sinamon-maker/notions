import React from 'react';
import {IconsNames} from '../../../globalTypes';
import {AppForm} from './form/AppForm';
import {InputFieldForm} from './form/InputFieldForm';
import {SubmitFieldForm} from './form/SubmitFieldForm';
import {userLoginSchema} from './schema/loginSchema';
import useLogin from '../../api/useLogin';
import {FormikValues} from 'formik';

export const FormLogin = () => {
  const {error, login} = useLogin();
  console.log('err login', error);
  const submit = (values: FormikValues) => {
    console.log('hjhj');
    const res = login(values.email, values.password);
    console.log(res);
  };
  return (
    <AppForm
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => submit(values)}
      validationSchema={userLoginSchema}
      validateOnMount={false}>
      <InputFieldForm
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        background="bg-blue-50"
        color="#fb923c"
        name="email"
      />
      <InputFieldForm
        icon={IconsNames.LOCK}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        secureTextEntry={true}
        textContentType="password"
        background="bg-blue-50"
        color="#fb923c"
        name="password"
      />

      <SubmitFieldForm title="Login" />
    </AppForm>
  );
};
