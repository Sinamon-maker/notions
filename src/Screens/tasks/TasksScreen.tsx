import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {MyDropdown} from '../../Components/MyDropdown/MyDropdown';

import {SortingButtons} from '../../Components/Tasks/SortingButtons/SortingButton';
import {TasksList} from '../../Components/Tasks/TasksList/TasksList';
import {NewTask} from '../../Components/Tasks/NewTask/NewTask';
import {ScreenWrapper} from '../../Modules/ScreenWrapper';
import {TasksFoldersList} from '../../Components/Tasks/TasksFolderList/TasksFolderList';
import {SelectCatalogue} from '../../Components/Tasks/SearchTasks/SelectCatalogue';
import {View} from 'react-native';
import {DropdownCatalogues} from '../../Components/Tasks/SearchTasks/DropdownCatalogues';

export function TasksScreen(): JSX.Element {
  return (
    <ScreenWrapper>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#2563eb', '#fb923c']}
        className="h-full p-2 flex">
        <View className="flex flex-col">
          <TasksFoldersList />
          <SelectCatalogue />
          <DropdownCatalogues />

          <SortingButtons />

          <TasksList />
          <NewTask />
        </View>
      </LinearGradient>
    </ScreenWrapper>
  );
}
