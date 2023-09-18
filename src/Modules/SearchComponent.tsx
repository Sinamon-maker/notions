import React, {forwardRef} from 'react';
import {IconsNames} from '../../globalTypes';

import {View, TextInput, TextInputProps, Pressable} from 'react-native';

import {IconComponent} from './IconComponent';

export type SearchProps = TextInputProps & {
  searchQuery: string;
  isVisible?: boolean;
  onSetQuery: (val: string) => void;
  iconClose?: boolean;
  onPressClose?: () => void;
};

export const SearchComponent = forwardRef<TextInput, SearchProps>(
  (props, ref) => {
    const {
      searchQuery,
      onSetQuery,
      iconClose,
      onPressClose,
      isVisible,
      ...rest
    } = props;
    const onChange = (val: string) => {
      onSetQuery(val);
    };
    return (
      <View className="w-full flex flex-row items-center px-2 py-1 border border-slate-50 rounded-lg">
        <IconComponent icon={IconsNames.SEARCH} />
        <TextInput
          className="flex-1 pb-2 px-2  text-lg  text-slate-50"
          onChangeText={text => onChange(text)}
          value={searchQuery}
          placeholder="type your search"
          placeholderTextColor={'#94a3b8'}
          {...rest}
          ref={ref}
        />
        {iconClose && isVisible && (
          <Pressable onPress={onPressClose}>
            <IconComponent icon={IconsNames.CLOSE} />
          </Pressable>
        )}
      </View>
    );
  },
);
