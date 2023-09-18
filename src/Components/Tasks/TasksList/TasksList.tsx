import React from 'react';
import {FlatList, View} from 'react-native';
import {TasksItem} from '../TasksItem/TasksItem';
import {Separator} from '../../../Modules/Separator';

const DATA = [
  {
    created: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'First Item jgkg kjkg kjhkh kjhkh khjkh k mb',
    status: true,
  },
  {
    created: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    text: 'Second Item',
    status: true,
  },
  {
    created: '58694a0f-3da1-471f-bd96-145571e29d72',
    text: 'Create haus',
    status: true,
  },
  {
    created: 'bd7acbe0-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'First Item jgkg kjkg kjhkh kjhkh khjkh k mb',
    status: true,
  },
  {
    created: '3ac68afc-c609-48d3-a4f8-fbd91aa97f63',
    text: 'Second Item',
    status: true,
  },
  {
    created: '58694a0f-3da0-471f-bd96-145571e29d72',
    text: 'Create haus',
    status: true,
  },
  {
    created: 'bd7acbo0-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'First Item jgkg kjkg kjhkh kjhkh khjkh k mb',
    status: true,
  },
  {
    created: '3ac68afp-c609-48d3-a4f8-fbd91aa97f63',
    text: 'Second Item',
    status: true,
  },
  {
    created: '58694a0m-3da0-471f-bd96-145571e29d72',
    text: 'Create haus',
    status: true,
  },
];

export const TasksList = () => {
  return (
    <View className="grow">
      <FlatList
        style={{borderRadius: 6}}
        data={DATA}
        renderItem={({item}) => <TasksItem task={item} />}
        keyExtractor={item => item.created}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
