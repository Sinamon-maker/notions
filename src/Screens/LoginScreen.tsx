import {ScreenWrapper} from '../Modules/ScreenWrapper/ScreenWrapper';

import {LoginForm} from '../Components/Forms/LoginForm';

export const LoginScreen = () => {
  return (
    <ScreenWrapper style="px-2 h-full">
      <LoginForm />
    </ScreenWrapper>
  );
};
