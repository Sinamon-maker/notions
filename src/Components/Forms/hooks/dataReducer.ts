import {FormAction} from './hooks.types';

export const formDataReducer = <T extends Record<string, string | boolean>>(
  state: T,
  action: FormAction,
): T => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        [action.payload.field]: action.payload.text,
      };

    case 'remove': {
      const newState = Object.keys(state).reduce((acc, rec) => {
        acc = {...acc, [rec]: ''};
        return acc;
      }, {} as T);
      return {
        ...state,
        ...newState,
      };
    }
    default:
      return state;
  }
};
