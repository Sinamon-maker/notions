import React from 'react';
import {View} from 'react-native';
import {IconsNames} from '../../../../globalTypes';
import {AppButton} from '../../../Modules/AppButton';

type CreateFolderProps = {title: string; onPressCreate: () => void};

export const AddFolder = ({title, onPressCreate}: CreateFolderProps) => (
  <View className="p-1">
    <AppButton
      icon={IconsNames.ADD}
      color="#fb923c"
      size={40}
      onPress={onPressCreate}
      title={title}
      className="bg-transparent rounded p-2 shadow-md"
      titleStyle="text-blue-400"
    />
  </View>
);
