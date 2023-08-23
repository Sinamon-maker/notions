import {View} from 'react-native';

type Props = {
  children: React.ReactNode;
  gap?: number;
};
export const FormFieldWrapper = ({gap = 10, children}: Props) => {
  return <View className={`mb-${gap}`}>{children}</View>;
};
