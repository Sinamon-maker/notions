import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {IconComponent} from '../IconComponent/IconComponent';
import {IconProps} from '../../../globalTypes';

interface BtnStyle extends TouchableOpacityProps {
  className?: string;
}

interface TextProps {
  title?: string;
  titleStyle?: string;
}

type CombinedProps = BtnStyle & Partial<IconProps> & TextProps;
export const AppButton = ({
  onPress,
  title,
  className = 'bg-blue-600 rounded p-2',
  titleStyle = 'text-slate-50',
  name,
  ...props
}: CombinedProps) => (
  <TouchableOpacity onPress={onPress} className={className} {...props}>
    {name && <IconComponent name={name} {...props} />}
    {title && <Text className={titleStyle}>{title}</Text>}
  </TouchableOpacity>
);
