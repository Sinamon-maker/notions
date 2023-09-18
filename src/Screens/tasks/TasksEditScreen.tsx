import React from 'react';
import {ScreenWrapper} from '../../Modules/ScreenWrapper';
import {InputComponent} from '../../Modules/InputComponent';
import {AppButton} from '../../Modules/AppButton';
import {View} from 'react-native';
import {PropsNavigationTasksEdit} from '../../Navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const TasksEditScreen = ({navigation}: PropsNavigationTasksEdit) => {
  const error = '';
  return (
    <ScreenWrapper style="px-2 h-full">
      <View className="mt-20">
        <InputComponent
          placeholder="task"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          background="bg-blue-50"
          color="#fb923c"
        />
        <InputComponent
          placeholder="Detailes"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          background="bg-blue-50"
          color="#fb923c"
          multiline
        />
        <AppButton
          title="Save"
          className="flex items-center justify-center rounded-xl py-2"
          titleStyle="text-lg text-slate-50"
          onPress={() => navigation.navigate('Tasks')}
        />
      </View>
    </ScreenWrapper>
  );
};
