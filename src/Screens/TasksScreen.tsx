import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {MyDropdown} from '../Components/MyDropdown/MyDropdown';

import {SortingButtons} from '../Components/Tasks/SortingButtons/SortingButton';
import {TasksList} from '../Components/Tasks/TasksList/TasksList';
import {NewTask} from '../Components/Tasks/NewTask/NewTask';
import {ScreenWrapper} from '../Modules/ScreenWrapper/ScreenWrapper';
import {TasksFoldersList} from '../Components/Tasks/TasksFolderList/TasksFolderList';

export function TasksScreen(): JSX.Element {
  return (
    <ScreenWrapper>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#2563eb', '#fb923c']}
        className="h-full p-2 flex">
        <TasksFoldersList />
        <MyDropdown />

        <SortingButtons />

        <TasksList />
        <NewTask />
      </LinearGradient>
    </ScreenWrapper>
  );
}
