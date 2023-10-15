import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconComponent} from '../../../Modules/IconComponent';
import {Data, IconsNames} from '../../../../globalTypes';
import {AppButton} from '../../../Modules/AppButton';
import type {ProfileScreenNavigationProps} from '../../../Navigation/types';
import useCatalogueStore from '../../../store/auth/catalogueStore';

type ItemProps = {item: Data};

export const ListItem = ({item}: ItemProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProps>();
  const setActiveCatalogue = useCatalogueStore(s => s.setActiveCatalogue);

  const onCataloguePress = () => {
    setActiveCatalogue(item);
    console.log('cataloguePress');
    navigation.navigate('TasksList');
  };
  return (
    <View className="p-2 flex-row justify-between items-center  border border-pink-50 rounded-lg mt-2">
      <AppButton
        title={item.title}
        onPress={onCataloguePress}
        className="grow px-2 py-1 bg-transparent"
        titleStyle="text-slate-50 text-lg"
      />

      <IconComponent icon={IconsNames.DELETE} color="white" size={20} />
    </View>
  );
};
