import React from 'react';
import {View} from 'react-native';
import {Folder, IconsNames} from '../../../../globalTypes';
import {AppButton} from '../../../Modules/AppButton';

type ItemProps = {
  folder: Folder;
  isActive: boolean;
  onPressEdit: (val: Folder) => void;
  onChangeActiveFolder: (val: Folder) => void;
  onPressDelete: (val: Folder) => void;
};

export const FolderItem = ({
  folder,
  isActive,
  onPressEdit,
  onChangeActiveFolder,
  onPressDelete,
}: ItemProps) => (
  <View className="p-1 relative">
    <AppButton
      icon={isActive ? IconsNames.OPENFOLDER : IconsNames.FOLDER}
      color="#fb923c"
      size={40}
      onPress={() => onChangeActiveFolder(folder)}
      title={folder.name}
      className="bg-transparent rounded  shadow-md"
      titleStyle="text-blue-400"
    />
    <View className="flex flex-row absolute -top-2 right-1">
      <AppButton
        icon={IconsNames.DELETE}
        size={16}
        onPress={() => onPressDelete(folder)}
        className=" flex justify-center items-center bg-transparent rounded p-2"
      />
      <AppButton
        icon={IconsNames.EDIT}
        size={16}
        onPress={() => onPressEdit(folder)}
        className=" flex justify-center items-center bg-transparent rounded p-2"
      />
    </View>
  </View>
);
