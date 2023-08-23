import {View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const FormWrapper = ({children}: Props) => {
  return <View className="mt-20">{children}</View>;
};
