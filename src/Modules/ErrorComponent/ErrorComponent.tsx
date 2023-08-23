import {Text, View} from 'react-native';

type Props = {
  message: string;
};

export const ErrorComponent = ({message}: Props) => {
  return (
    <View className="mt-1 pl-2">
      <Text className="text-red-600 text-sm">{message}</Text>
    </View>
  );
};
