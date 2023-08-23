import {AnySchema, ISchema, ValidationError} from 'yup';

import {AnySchema} from 'yup';

export type AddAction = {
  type: 'add';
  payload: {field: string; text: string | boolean};
};

export type RemoveAction = {
  type: 'remove';
};

export type FormAction = AddAction | RemoveAction;

export type AddErrorAction = {
  type: 'add';
  payload: {field: string; text: string};
};

type ChangeErrorAction = {
  type: 'change';
  payload: string;
};

type RemoveErrorAction = {
  type: 'remove';
};

export type FormErrorAction =
  | AddErrorAction
  | ChangeErrorAction
  | RemoveErrorAction;

export type ErrorForm<T> = Record<keyof T, string[]>;

export type YupSchemaObject<T> = Record<keyof T, AnySchema>;
