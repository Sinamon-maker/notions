import React from 'react';
import {IconsNames} from '../../../globalTypes';

import {View, TextInput} from 'react-native';

import {IconComponent} from '../IconComponent/IconComponent';

export const SearchComponent = () => {
  return (
    <View className="w-full flex flex-row items-center px-2 py-1 border border-slate-50 rounded-lg">
      <IconComponent name={IconsNames.SEARCH} />
      <TextInput
        className="flex-1 pb-2 px-2  text-lg  text-slate-50"
        onChangeText={e => console.log(e)}
        value=""
        placeholder="type your search"
        placeholderTextColor={'#94a3b8'}
      />
    </View>
  );
};
