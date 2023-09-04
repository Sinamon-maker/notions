import React from 'react';
import {useFormikContext} from 'formik';
import {FormFieldWrapper} from '../ui/FormFieldWrapper/FormFieldWrapper';
import {AppButton} from '../../../Modules/AppButton/AppButton';

type SubmitFieldFormProps = {
  title: string;
};

export const SubmitFieldForm = <T,>({title}: SubmitFieldFormProps) => {
  const {handleSubmit} = useFormikContext<T>();
  return (
    <FormFieldWrapper>
      <AppButton
        title={title}
        className="flex items-center justify-center rounded-xl py-2"
        titleStyle="text-lg text-slate-50"
        onPress={handleSubmit}
      />
    </FormFieldWrapper>
  );
};
