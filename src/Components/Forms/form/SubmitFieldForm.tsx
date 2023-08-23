import {useFormikContext} from 'formik';

type SubmitFieldForm = {
  title: string;
};

export const SubmitFieldForm = <T,>({title}: SubmitFieldForm) => {
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
