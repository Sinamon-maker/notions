import {SignupForm} from '../Components/Forms/SignupForm';
import {ScreenWrapper} from '../Modules/ScreenWrapper/ScreenWrapper';

export const SignupScreen = () => {
  return (
    <ScreenWrapper style="px-2 h-full">
      <SignupForm />
    </ScreenWrapper>
  );
};
