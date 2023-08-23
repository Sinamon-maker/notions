import {ScrollView, View} from 'react-native';
import {TaskFolderItem} from '../TaskFolderItem/TaskFolderItem';
import LinearGradient from 'react-native-linear-gradient';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export const TasksFoldersList = () => {
  return (
    <View className="mb-2">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['rgba(37, 99, 235, 0.5)', 'rgba(251, 146, 60, 0.5)']}
        className="rounded-md">
        <ScrollView
          horizontal={true}
          className="  pb-1  "
          contentContainerStyle={{padding: 0}}>
          {DATA.map(item => (
            <TaskFolderItem key={item.id} title={item.title} />
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
