import {useReducer, useState} from 'react';
import {ZodError, ZodObject} from 'zod';
import {UserLogin, userLoginSchema} from '../schema/loginSchema';
import {z} from 'zod';
import {AnySchema, ValidationError, object} from 'yup';
import {
  FormAction,
  ErrorForm,
  FormErrorAction,
  YupSchemaObject,
} from './hooks.types';
import React from 'react';
import {formDataReducer} from './dataReducer';
import {formErrorReducer} from './erorReducer';

export const useFormHook = <T extends Record<string, string>>(
  value: T,
  errorValues: ErrorForm<T>,
  schemaValidation?: YupSchemaObject<T>,
) => {
  const initialData = value;

  const initialErrorData = errorValues;

  const [data, setFormData] = useReducer<(state: T, action: FormAction) => T>(
    formDataReducer,
    initialData,
  );

  const [errorData, setErrorData] = useReducer<
    (state: ErrorForm<T>, action: FormErrorAction) => ErrorForm<T>
  >(formErrorReducer, initialErrorData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (name: keyof T & string, text: string) => {
    setFormData({type: 'add', payload: {field: name, text}});
    if (isSubmitted) {
      if (schemaValidation) handleBlur(data, schemaValidation);
    }
  };

  function handleBlur(dat: T, schema: YupSchemaObject<T>) {
    if (schema) {
      clearErrors();

      validate(dat, schema).catch((err: ValidationError) => {
        console.log('validate', dat, err);
        mapErrors(err);
      });
    }
  }

  const validate = React.useCallback(
    async (val: Partial<T>, schema: YupSchemaObject<T>) => {
      if (schema) {
        const newSchema = object(schema);
        await newSchema.validate(val, {abortEarly: false});
      }
    },
    [],
  );

  function mapErrors(err: ValidationError) {
    clearErrors();
    console.log('jjj', err.inner);
    err.inner.forEach(error => {
      const fieldName = error.path as keyof T & string;
      setErrorData({
        type: 'add',
        payload: {field: fieldName, text: error.message},
      });
    });
  }

  function clearErrors() {
    setErrorData({type: 'remove'});
  }

  return {
    data,
    errorData,
    handleChange,

    setIsSubmitted,

    handleBlur,
  };
};
