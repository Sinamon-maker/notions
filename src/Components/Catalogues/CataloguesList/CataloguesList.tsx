import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {ListItem} from './ListItem';
import userStore from '../../../store/auth/userStore';
import useCatalogueStore from '../../../store/auth/catalogueStore';
import {useGetDataById} from '../../../api/useGetDataById';
import {Data} from '../../../../globalTypes';

export const CataloguesList = () => {
  const user = userStore(s => s.user);
  const activeFolder = useCatalogueStore(s => s.activeFolder);
  const searchQuery = useCatalogueStore(s => s.searchQuery);
  const {data: catalogues} = useGetDataById<Data>('tasks', user?.uid);

  console.log('search', searchQuery);

  const filterData = (arr: Data[] | undefined, query: string) => {
    if (arr && arr.length !== 0) {
      return arr.filter(it =>
        it.title.toLowerCase().includes(query.toLocaleLowerCase()),
      );
    }
    return [];
  };

  const filteredCatalogues = filterData(catalogues, searchQuery);
  console.log(
    'filtered catalogue',
    filteredCatalogues,
    searchQuery,
    catalogues,
  );
  if (!activeFolder) {
    return (
      <View className="grow items-center align-center">
        <Text className="align-center text-lg text-slate-50">
          Please, choose folder
        </Text>
      </View>
    );
  }
  if (!catalogues || catalogues.length === 0) {
    return (
      <View className="grow items-center align-center">
        <Text className="align-center text-lg text-slate-50">
          No catalogues yet, start creating
        </Text>
      </View>
    );
  }
  if (filteredCatalogues.length === 0) {
    return (
      <View className="grow items-center align-center">
        <Text className="align-center text-lg text-slate-50">
          Nothing found
        </Text>
      </View>
    );
  }
  return (
    <View className="grow">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCatalogues}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
