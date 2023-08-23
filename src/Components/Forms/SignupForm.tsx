import {InputComponent} from '../../Modules/InputComponent/InputComponent';
import {IconsNames} from '../../../globalTypes';
import {AppButton} from '../../Modules/AppButton/AppButton';
import {View} from 'react-native';
import {ErrorComponent} from '../../Modules/ErrorComponent/ErrorComponent';

import {useSignupHook} from './hooks/useSignupHook';
import {FormWrapper} from './ui/FormFieldWrapper/FormWrapper/FormWrapper';
import {FormFieldWrapper} from './ui/FormFieldWrapper/FormFieldWrapper';
import {useFormHook} from './hooks/useFormHook';
import {UserSignup, userSignupSchema} from './schema/signupSchema';

export const SignupForm = () => {
  const {data, handleChange, errorData, handleBlur, setIsSubmitted} =
    useFormHook<UserSignup>(
      {displayName: '', email: '', password: ''},
      {displayName: [], email: [], password: []},
      userSignupSchema,
    );
  const handleSubmit = () => {
    setIsSubmitted(true);
    handleBlur(data, userSignupSchema);

    console.log('2', data, errorData);
  };
  return (
    <FormWrapper>
      <FormFieldWrapper>
        <InputComponent
          name={IconsNames.ACCOUNT}
          placeholder="DisplayName"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          textContentType="name"
          errorProp={!!errorData.displayName.length}
          background="bg-blue-50"
          color="#fb923c"
          value={data.displayName}
          onChangeText={text => handleChange('displayName', text)}
        />
        {errorData &&
          errorData.displayName &&
          errorData.displayName.map(err => (
            <ErrorComponent key={err} message={err} />
          ))}
      </FormFieldWrapper>
      <FormFieldWrapper>
        <InputComponent
          name={IconsNames.EMAIL}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          errorProp={!!errorData.email.length}
          background="bg-blue-50"
          color="#fb923c"
          value={data.email}
          onChangeText={text => handleChange('email', text)}
        />
        {errorData &&
          errorData.email &&
          errorData.email.map(err => (
            <ErrorComponent key={err} message={err} />
          ))}
      </FormFieldWrapper>
      <FormFieldWrapper>
        <InputComponent
          name={IconsNames.LOCK}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          secureTextEntry={true}
          textContentType="password"
          errorProp={!!errorData.password.length}
          background="bg-blue-50"
          color="#fb923c"
          value={data.password}
          onChangeText={text => handleChange('password', text)}
        />
        {errorData &&
          errorData.password &&
          errorData.password.map(err => (
            <ErrorComponent key={err} message={err} />
          ))}
      </FormFieldWrapper>
      <FormFieldWrapper>
        <AppButton
          title="Signup"
          className="flex items-center justify-center rounded-xl py-2"
          titleStyle="text-lg text-slate-50"
        />
      </FormFieldWrapper>
    </FormWrapper>
  );
};
