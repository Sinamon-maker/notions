import React from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../../Modules/ScreenWrapper';
import {AppForm} from '../../Components/Forms/form/AppForm';
import {InputFieldForm} from '../../Components/Forms/form/InputFieldForm';
import {IconsNames} from '../../../globalTypes';
import {ErrorComponent} from '../../Modules/ErrorComponent';
import {SubmitFieldForm} from '../../Components/Forms/form/SubmitFieldForm';

import {FormikValues} from 'formik';
import {createFolderSchema} from '../../Components/Forms/schema/folderCreateSchema';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../../Navigation/types';
import {AppButton} from '../../Modules/AppButton';
import userStore from '../../store/auth/userStore';
import {useCreateData} from '../../api/useCreateData';

export const FolderCreateScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const user = userStore(s => s.user);
  const {err, loading, createData} = useCreateData();

  const submit = async (values: FormikValues) => {
    if (user) {
      const folderNew = {
        name: values.folder,
        userId: user.uid,
        createdAt: +new Date(),
      };
      const res = createData('folders', folderNew);
      if (res === 'ok') {
        navigation.navigate('Main');
      }
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex w-full h-full p-2 bg-white">
        <View className="my-8 mb-14">
          <Text className="text-3xl font-semibold text-orange-400">
            Create new folder
          </Text>
        </View>
        <View className=" py-2 rounded">
          <AppForm
            initialValues={{
              folder: '',
            }}
            onSubmit={values => submit(values)}
            validationSchema={createFolderSchema}
            validateOnMount={false}>
            <InputFieldForm
              icon={IconsNames.FOLDER_OUTLINED}
              placeholder="Enter folder mame"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              textContentType="name"
              background="bg-blue-50"
              color="#fb923c"
              name="folder"
            />
            <ErrorComponent message={err} />
            <SubmitFieldForm title="Save" loading={loading} />
            <AppButton
              title="Cancel"
              onPress={() => navigation.navigate('Main')}
              className="flex items-center justify-center bg-orange-400 rounded-xl py-2 mt-4"
              titleStyle="text-lg text-slate-50"
            />
          </AppForm>
        </View>
      </View>
    </ScreenWrapper>
  );
};
