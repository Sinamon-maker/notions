import {View} from 'react-native';
import {AppButton} from '../../../Modules/AppButton/AppButton';

export type ItemProps = {title: string};

export const TaskFolderItem = ({title}: ItemProps) => (
  <View className="p-1">
    <AppButton
      onPress={() => console.log('folder')}
      title={title}
      className=" bg-blue-600/0.1 shadow-md rounded-md"
      titleStyle="w-full text-blue-400 text-sm whitespace-normal text-orange-400"
    />
  </View>
);
