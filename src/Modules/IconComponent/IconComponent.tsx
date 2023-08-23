import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from '../../../globalTypes';

interface Props {
  icon: IconProps;
}

export const IconComponent = ({name, size, color}: IconProps) => {
  return (
    <Icon
      name={name}
      size={size ? size : 30}
      color={color ? color : '#F8FAFC'}
    />
  );
};
