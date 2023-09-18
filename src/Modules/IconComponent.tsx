import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from '../../globalTypes';

export const IconComponent = ({icon, size, color}: IconProps) => {
  return (
    <Icon
      name={icon}
      size={size ? size : 30}
      color={color ? color : '#F8FAFC'}
    />
  );
};
