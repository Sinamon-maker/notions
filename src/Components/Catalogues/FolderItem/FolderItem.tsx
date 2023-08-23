import {View} from 'react-native';
import {IconsNames} from '../../../../globalTypes';
import {AppButton} from '../../../Modules/AppButton/AppButton';

type ItemProps = {title: string};

export const FolderItem = ({title}: ItemProps) => (
  <View className="p-1">
    <AppButton
      name={IconsNames.FOLDER}
      color="#fb923c"
      size={40}
      onPress={() => console.log('folder')}
      title={title}
      className="bg-transparent rounded p-2 shadow-md"
      titleStyle="text-blue-400"
    />
  </View>
);
