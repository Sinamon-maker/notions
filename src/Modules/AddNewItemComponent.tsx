import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {IconsNames} from '../../globalTypes';
import {AppButton} from './AppButton';

import {InputComponent} from './InputComponent';
import {useFormikContext} from 'formik';
import {ErrorComponent} from './ErrorComponent';

type AddNewItemComponentProps<T> = {
  name: keyof T & string;
  isLoading: boolean;
};

export const AddNewItemComponent = <T extends {[key: string]: string}>({
  name,
  isLoading,
}: AddNewItemComponentProps<T>) => {
  const {handleChange, setFieldTouched, touched, errors, values, handleSubmit} =
    useFormikContext<T>();

  return (
    <>
      {errors[name] && touched[name] && (
        <ErrorComponent message={errors[name] as string} />
      )}
      <View className="shrink-1 w-full flex flex-row items-center px-2 py-1 border-b border-blue-600 rounded-lg mb-2">
        <InputComponent
          className="flex-1 px-2 pb-2 text-slate-50 text-lg"
          placeholder="new catalogue"
          placeholderTextColor={'#94a3b8'}
          errorProp={errors[name] && touched[name] ? !!errors[name] : false}
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          value={values[name]}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#2563eb" />
          ) : (
            <AppButton
              icon={IconsNames.ADD}
              size={18}
              className="flex justify-center items center"
              onPress={handleSubmit}
            />
          )}
        </InputComponent>
      </View>
    </>
  );
};
