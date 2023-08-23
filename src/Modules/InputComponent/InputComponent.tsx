import {TextInput, TextInputProps, View, ViewProps} from 'react-native';
import {IconComponent} from '../IconComponent/IconComponent';
import {IconProps} from '../../../globalTypes';

interface Props extends ViewProps {
  errorProp?: boolean;
  width?: string;
  background?: string;
}

type CombinedProps = Partial<IconProps> & TextInputProps & Props;

export const InputComponent = ({
  background = 'transparent',
  name,
  errorProp = false,
  width = '100%',
  ...input
}: CombinedProps) => {
  const style =
    'w-full flex flex-row items-center px-2 py-1 border border-slate-50  rounded-lg mb-1';
  const errorStyle = 'border-red-600';
  const resultStyle = errorProp
    ? `${style} ${errorStyle} ${background}`
    : `${style} ${background}`;
  return (
    <View className={resultStyle} style={{width}}>
      {name && <IconComponent name={name} {...input} />}
      <TextInput
        className="flex-1 pb-2 px-2  text-lg  text-slate-600 "
        value=""
        placeholderTextColor={'#94a3b8'}
        {...input}
      />
    </View>
  );
};
