import React from 'react';
import {useFormikContext} from 'formik';
import {InputComponent} from '../../../Modules/InputComponent';
import {IconsNames} from '../../../../globalTypes';
import {ErrorComponent} from '../../../Modules/ErrorComponent';
import type {InputComponentProps} from '../../../Modules/InputComponent';
import {FormFieldWrapper} from '../ui/FormFieldWrapper/FormFieldWrapper';

type InputFieldFormProps<T> = InputComponentProps & {
  name: keyof T & string;
};

export const InputFieldForm = <T extends {[key: string]: string}>(
  props: InputFieldFormProps<T>,
) => {
  const {name, ...rest} = props;
  const {handleChange, setFieldTouched, touched, errors, values} =
    useFormikContext<T>();
  return (
    <FormFieldWrapper>
      <InputComponent
        icon={IconsNames.EMAIL}
        {...rest}
        errorProp={errors[name] && touched[name] ? !!errors[name] : false}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
      />

      {errors[name] && touched[name] && (
        <ErrorComponent message={errors[name] as string} />
      )}
    </FormFieldWrapper>
  );
};
