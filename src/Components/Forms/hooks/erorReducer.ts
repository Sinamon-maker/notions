import {FormErrorAction, ErrorForm} from './hooks.types';

export const formErrorReducer = <T>(
  state: ErrorForm<T>,
  action: FormErrorAction,
): ErrorForm<T> => {
  switch (action.type) {
    case 'add': {
      const fieldName = action.payload.field as keyof ErrorForm<T>;

      return {
        ...state,
        [action.payload.field]: [...state[fieldName], action.payload.text],
      };
    }
    case 'change':
      return {
        ...state,
        [action.payload]: [],
      };

    case 'remove': {
      const newState = Object.keys(state).reduce((acc, rec) => {
        acc = {...acc, [rec]: []};
        return acc;
      }, {} as ErrorForm<T>);

      return {
        ...state,
        ...newState,
      };
    }
    default:
      return state;
  }
};
