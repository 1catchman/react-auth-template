import * as React from 'react';

interface PropChildren {
  children: React.ReactNode;
}

interface ActionTypes {
  type: string;
  payload?: {
    type: string;
    text: string;
  };
}

interface AlertValues {
  show: (type: string, text: string) => void;
  hide: () => void;
  alert: {
    type?: 'success' | 'error' | 'warning' | 'info';
    text?: string;
    visible: boolean;
  };
}

const initialState = { visible: false };

const reducer = (state: typeof initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'show-alert':
      return { ...action.payload, visible: true };
    case 'hide-alert':
      return { ...state, visible: false };
    default:
      return state;
  }
};

export const AlertContext = React.createContext({} as AlertValues);

export const useAlert = () => {
  return React.useContext(AlertContext);
};

export const AlertProvider = ({ children }: PropChildren) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const show = (text: string, type: string) => {
    dispatch({
      type: 'show-alert',
      payload: { text, type }
    });
  };

  const hide = () => dispatch({ type: 'hide-alert' });

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
