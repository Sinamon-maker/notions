import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconComponent} from '../../../Modules/IconComponent/IconComponent';
import {IconsNames} from '../../../../globalTypes';
import {AppButton} from '../../../Modules/AppButton/AppButton';
import type {ProfileScreenNavigationProps} from '../../../Navigation/types';

type ItemProps = {title: string};

export const ListItem = ({title}: ItemProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProps>();
  return (
    <View className="p-2 flex-row justify-between items-center  border border-pink-50 rounded-lg mt-2">
      <AppButton
        title={title}
        onPress={() => navigation.navigate('Tasks')}
        className="grow px-2 py-1 bg-transparent"
        titleStyle="text-slate-50 text-lg"
      />

      <IconComponent name={IconsNames.DELETE} color="white" size={20} />
    </View>
  );
};
