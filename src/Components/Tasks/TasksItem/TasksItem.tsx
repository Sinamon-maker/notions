import {Text, View} from 'react-native';
import {Task, IconsNames} from '../../../../globalTypes';
import {AppButton} from '../../../Modules/AppButton/AppButton';
import {useNavigation} from '@react-navigation/native';
import {PropsToEditTask} from '../../../Navigation/types';

type Props = {
  task: Task;
};

export const TasksItem = ({task}: Props) => {
  const navigation = useNavigation<PropsToEditTask>();
  return (
    <View className="w-full flex flex-row  bg-blue-600  py-2">
      <View className="mr-2 ml-2 mt-1">
        <Text className="text-slate-50 text-lg">1</Text>
      </View>
      <View className="flex flex-row grow shrink">
        <View>
          <AppButton
            className="w-6 h-6 border border-[#fb923c] rounded-full mr-2 mt-1"
            onPress={() => console.log('editTask')}
          />
        </View>
        <View className="grow shrink">
          <View className="  bg-green-400">
            <Text className="text-slate-50 text-lg">{task.text}</Text>
          </View>
          <View className="grow shrink bg-orange-400">
            <Text className="text-slate-50 text-lg">{task.text}</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row items-center bg-green-200">
        <AppButton
          name={IconsNames.UNFOLD}
          size={16}
          onPress={() => console.log('editTask')}
          className=" flex justify-center items-center w-8 h-8 ml-2"
        />
        <AppButton
          name={IconsNames.EDIT}
          size={18}
          onPress={() => navigation.navigate('TasksEdit')}
          className=" flex justify-center items-center w-8 h-8 ml-2"
        />
        <AppButton
          name={IconsNames.DELETE}
          size={18}
          onPress={() => console.log('editTask')}
          className="flex justify-center items-center w-8 h-8 ml-2"
        />
      </View>
    </View>
  );
};
