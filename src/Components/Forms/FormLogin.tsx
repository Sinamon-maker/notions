import {IconsNames} from '../../../globalTypes';
import {AppForm} from './form/AppForm';
import {InputFieldForm} from './form/InputFieldForm';
import {SubmitFieldForm} from './form/SubmitFieldForm';
import {userLoginSchema} from './schema/loginSchema';

export const TestForm = () => {
  return (
    <AppForm
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
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
