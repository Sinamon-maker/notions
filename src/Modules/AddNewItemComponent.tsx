import React from 'react';
import {TextInput, View} from 'react-native';
import {IconsNames} from '../../globalTypes';
import {AppButton} from './AppButton';

export const AddNewItemComponent = () => {
  return (
    <View className="shrink-1 w-full flex flex-row items-center px-2 py-1 border-b border-blue-600 rounded-lg mb-2">
      <TextInput
        className="flex-1 px-2 pb-1 text-slate-50 text-lg "
        onChangeText={e => console.log(e)}
        value=""
        placeholder="new catalogue"
        placeholderTextColor={'#94a3b8'}
      />
      <AppButton
        icon={IconsNames.ADD}
        size={18}
        className="flex justify-center items center"
        onPress={() => console.log('Add catalogue')}
      />
    </View>
  );
};
