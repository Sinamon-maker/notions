import {useFormikContext} from 'formik';
import {InputComponent} from '../../../Modules/InputComponent/InputComponent';
import {IconsNames} from '../../../../globalTypes';
import {ErrorComponent} from '../../../Modules/ErrorComponent/ErrorComponent';
import type {InputComponentProps} from '../../../Modules/InputComponent/InputComponent';
import {FormFieldWrapper} from '../ui/FormFieldWrapper/FormFieldWrapper';

type InputFieldFormProps<T> = InputComponentProps & {
  name: keyof T & string;
};

export const InputFieldForm = <T extends {[key: string]: string}>(
  props: InputFieldFormProps<T>,
) => {
  const {name, ...rest} = props;
  const {handleChange, setFieldTouched, touched, errors} =
    useFormikContext<T>();
  return (
    <FormFieldWrapper>
      <InputComponent
        icon={IconsNames.EMAIL}
        {...rest}
        errorProp={errors[name] && touched[name] ? !!errors[name] : false}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />

      {errors[name] && touched[name] && (
        <ErrorComponent key={err} message={err} />
      )}
    </FormFieldWrapper>
  );
};
