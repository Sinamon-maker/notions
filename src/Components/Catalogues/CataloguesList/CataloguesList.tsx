import {FlatList} from 'react-native';
import {ListItem} from '../ListItem/ListItem';
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
    id: '58694a0f-3da1-471f-bd96-144571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c655-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58696a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-a2d5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-44f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58690a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export const CataloguesList = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) => <ListItem title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
};
