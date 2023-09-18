import React from 'react';
import {ScreenWrapper} from '../../Modules/ScreenWrapper';

import {FormLogin} from '../../Components/Forms/FormLogin';

export const LoginScreen = () => {
  return (
    <ScreenWrapper style="px-2 h-full">
      <FormLogin />
    </ScreenWrapper>
  );
};
