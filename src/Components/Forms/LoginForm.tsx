import {IconsNames} from '../../../globalTypes';
import {AppButton} from '../../Modules/AppButton/AppButton';
import {ErrorComponent} from '../../Modules/ErrorComponent/ErrorComponent';
import {InputComponent} from '../../Modules/InputComponent/InputComponent';
import {userLoginSchema, UserLogin} from './schema/loginSchema';
import {useFormHook} from './hooks/useFormHook';
import {FormFieldWrapper} from './ui/FormFieldWrapper/FormFieldWrapper';
import {FormWrapper} from './ui/FormFieldWrapper/FormWrapper/FormWrapper';

export const LoginForm = () => {
  const {data, handleChange, errorData, handleBlur, setIsSubmitted} =
    useFormHook<UserLogin>(
      {email: '', password: ''},
      {email: [], password: []},
      userLoginSchema,
    );
  const handleSubmit = () => {
    setIsSubmitted(true);
    handleBlur(data, userLoginSchema);

    console.log('2', data, errorData);
  };

  return (
    <FormWrapper>
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
          keyboardType="default"
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
          title="Login"
          className="flex items-center justify-center rounded-xl py-2"
          titleStyle="text-lg text-slate-50"
          onPress={handleSubmit}
        />
      </FormFieldWrapper>
    </FormWrapper>
  );
};
