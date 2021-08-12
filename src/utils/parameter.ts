import { useCallback, useReducer } from 'react';

type ObjectReducerActionType<T> =
  | { type: 'SET_VALUE'; data: T }
  | { type: 'SET_OBJECT'; data: T }
  | { type: 'REMOVE_OBJECT'; key: any }
  | { type: 'INIT' };

interface ObjectReducerInterface {
  <T extends ObjectInterface>(state: T, action: ObjectReducerActionType<T>): any;
}
const ObjectReducer: ObjectReducerInterface = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, ...action.data };
    case 'SET_OBJECT':
      return action.data;
    case 'REMOVE_OBJECT':
      delete state[action.key];
      return { ...state };
    case 'INIT':
      return {};
  }
};

export const useObjectParameter = <T>(): {
  param: T;
  addParameter: (data: T) => void;
  init: () => void;
  removeKeyParameter: (key: string) => void;
} => {
  const [param, setParam] = useReducer(ObjectReducer, {});

  const addParameter = useCallback(
    (data) => {
      setParam({ type: 'SET_VALUE', data });
    },
    [param],
  );

  const removeKeyParameter = useCallback(
    (key: string) => {
      setParam({ type: 'REMOVE_OBJECT', key });
    },
    [param],
  );

  const init = useCallback(() => {
    setParam({ type: 'INIT' });
  }, []);

  return {
    param,
    addParameter,
    init,
    removeKeyParameter,
  };
};
