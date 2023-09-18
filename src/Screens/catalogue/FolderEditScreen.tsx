import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../../Modules/ScreenWrapper';
import {AppForm} from '../../Components/Forms/form/AppForm';
import {InputFieldForm} from '../../Components/Forms/form/InputFieldForm';
import {Folder, IconsNames} from '../../../globalTypes';
import {ErrorComponent} from '../../Modules/ErrorComponent';
import {SubmitFieldForm} from '../../Components/Forms/form/SubmitFieldForm';
import {editFolderSchema} from '../../Components/Forms/schema/folderEditSchema';
import {FormikValues} from 'formik';
import {AppButton} from '../../Modules/AppButton';
import {
  MainScreenNavigationProp,
  MainScreenRouteProp,
} from '../../Navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import userStore from '../../store/auth/userStore';
import {useUpdateData} from '../../api/useUpdateData';

export const FolderEditScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const user = userStore(s => s.user);

  const route = useRoute<MainScreenRouteProp>();

  const {err, updateData, loading} = useUpdateData();
  const folder = route.params as unknown as Folder;

  console.log('folder from params', folder);

  const submit = (values: FormikValues) => {
    if (user && user.uid) {
      const res = updateData('folders', {name: values.name}, user.uid);
      if (res === 'ok') {
        navigation.navigate('Main');
      }
    }
  };
  if (!folder) {
    return null;
  }

  return (
    <ScreenWrapper>
      <View className="flex justify-center align-center bg-white p-2">
        <View className="my-8 mb-14">
          <Text className="text-3xl font-semibold text-orange-400">
            Edit folder
          </Text>
        </View>
        <View className="">
          <AppForm
            initialValues={{
              oldFolderName: folder.name,
              newFolderName: '',
            }}
            onSubmit={values => submit(values)}
            validationSchema={editFolderSchema}
            validateOnMount={false}
            enableReinitialize>
            <InputFieldForm
              icon={IconsNames.FOLDER_OUTLINED}
              placeholder="Old folder name"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              textContentType="name"
              background="bg-blue-50"
              editable={false}
              color="#fb923c"
              name="oldFolderName"
            />
            <InputFieldForm
              icon={IconsNames.FOLDER_OUTLINED}
              placeholder="New folder mame"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              textContentType="name"
              background="bg-blue-50"
              color="#fb923c"
              name="newFolderName"
            />
            <ErrorComponent message={err} />
            <SubmitFieldForm title="Save" loading={loading} />
            <AppButton
              title="Cancel"
              onPress={() => navigation.navigate('Main')}
              className="flex items-center justify-center bg-orange-400 rounded-xl py-2 my-2 mt-4"
              titleStyle="text-lg text-slate-50"
            />
          </AppForm>
        </View>
      </View>
    </ScreenWrapper>
  );
};
