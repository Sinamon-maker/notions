import React from 'react';
import {FormSignup} from '../../Components/Forms/FormSignup';

import {ScreenWrapper} from '../../Modules/ScreenWrapper';

export const SignupScreen = () => {
  return (
    <ScreenWrapper style="px-2 h-full">
      <FormSignup />
    </ScreenWrapper>
  );
};
