import React from 'react';
import {ScreenWrapper} from '../Modules/ScreenWrapper/ScreenWrapper';

import {LoginForm} from '../Components/Forms/LoginForm';
import {FormLogin} from '../Components/Forms/FormLogin';

export const LoginScreen = () => {
  return (
    <ScreenWrapper style="px-2 h-full">
      <FormLogin />
    </ScreenWrapper>
  );
};
