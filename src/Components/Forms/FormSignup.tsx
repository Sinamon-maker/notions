import React from 'react';
import {FormikValues} from 'formik';
import useSignup from '../../api/useSignup';
import {InputFieldForm} from './form/InputFieldForm';
import {AppForm} from './form/AppForm';
import {SubmitFieldForm} from './form/SubmitFieldForm';
import {ErrorComponent} from '../../Modules/ErrorComponent';
import {IconsNames} from '../../../globalTypes';
import {userSignupSchema} from './schema/signupSchema';

export const FormSignup = () => {
  const {err, signup, loading} = useSignup();

  const submit = (values: FormikValues) => {
    console.log('signup');
    const res = signup(values.displayName, values.email, values.password);
    console.log(res);
  };
  return (
    <AppForm
      initialValues={{
        displayName: '',
        email: '',
        password: '',
      }}
      onSubmit={values => submit(values)}
      validationSchema={userSignupSchema}
      validateOnMount={false}>
      <InputFieldForm
        icon={IconsNames.ACCOUNT}
        name="displayName"
        placeholder="DisplayName"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        textContentType="name"
        background="bg-blue-50"
        color="#fb923c"
      />
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
      <ErrorComponent message={err} />
      <SubmitFieldForm title="Signup" loading={loading} />
    </AppForm>
  );
};
