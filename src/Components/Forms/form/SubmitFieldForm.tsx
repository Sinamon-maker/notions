import React from 'react';
import {useFormikContext} from 'formik';
import {AppButton} from '../../../Modules/AppButton';
import {View, ActivityIndicator} from 'react-native';

type SubmitFieldFormProps = {
  title: string;
  loading: boolean;
};

export const SubmitFieldForm = <T,>({title, loading}: SubmitFieldFormProps) => {
  const {handleSubmit} = useFormikContext<T>();
  return (
    <View className="mt-2">
      {loading ? (
        <ActivityIndicator size="small" color="#2563eb" />
      ) : (
        <AppButton
          title={title}
          className="flex items-center justify-center rounded-xl py-2"
          titleStyle="text-lg text-slate-50"
          onPress={handleSubmit}
        />
      )}
    </View>
  );
};
