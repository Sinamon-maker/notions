import React from 'react';
import {ScrollView, View, Text, Alert} from 'react-native';
import {FolderItem} from './FolderItem';
import userStore from '../../../store/auth/userStore';
import LinearGradient from 'react-native-linear-gradient';
import {useGetDataById} from '../../../api/useGetDataById';
import {AddFolder} from './AddFolder';
import {Folder} from '../../../../globalTypes';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../../../Navigation/types';
import {useUpdateData} from '../../../api/useUpdateData';
import useCatalogueStore from '../../../store/auth/catalogueStore';
import {AppButton} from '../../../Modules/AppButton';

export const FoldersList = () => {
  const user = userStore(s => s.user);
  const activeFolder = useCatalogueStore(s => s.activeFolder);
  const setActiveFolder = useCatalogueStore(s => s.setActiveFolder);
  const navigation = useNavigation<MainScreenNavigationProp>();

  const {data: folders} = useGetDataById<Folder>('folders', user?.uid);
  const {err, deleteData, massDeleteCatalogues} = useUpdateData();

  if (!folders) {
    return null;
  }

  const deleteFolder = (val: Folder) => {
    deleteData('folders', val.id);
    massDeleteCatalogues('tasks', val.id);
  };

  const onPressEdit = (val: Folder) => {
    navigation.push('EditFolder', val);
  };
  const onPressDelete = (val: Folder) => {
    Alert.alert(
      'Are you shure?',
      `You are foing to delete this folder: ${val.name}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteFolder(val)},
      ],
    );
  };

  const onPressCreate = () => {
    navigation.push('CreateFolder');
  };
  const onChangeActiveFolder = (val: Folder) => {
    setActiveFolder(val.id);
  };
  return (
    <View className="my-2">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['rgba(37, 99, 235, 0.5)', 'rgba(251, 146, 60, 0.5)']}
        className="rounded-md">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="grow-0 border-y border-slate-500 py-1"
          contentContainerStyle={{padding: 1}}>
          <AddFolder title="add" onPressCreate={onPressCreate} />
          {folders.length > 1 && (
            <AppButton
              title="All"
              onPress={() => setActiveFolder('All')}
              className="bg-transparent rounded  shadow-md flex items-center justify-center"
              titleStyle={
                activeFolder === 'All'
                  ? 'text-blue-400 underline font-bold'
                  : 'text-blue-400'
              }
            />
          )}
          {folders.length === 0 && (
            <View>
              <Text>No folders yet</Text>
            </View>
          )}
          {folders.length !== 0 &&
            folders.map(item => (
              <FolderItem
                key={item.id}
                folder={item}
                isActive={item.id === activeFolder}
                onPressEdit={onPressEdit}
                onChangeActiveFolder={onChangeActiveFolder}
                onPressDelete={onPressDelete}
              />
            ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
