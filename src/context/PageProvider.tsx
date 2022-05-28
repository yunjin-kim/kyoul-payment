import React, { createContext, Dispatch, useReducer } from 'react';

import { PageActionType, PageType } from '../types';

export type PageState = {
  payPage: boolean;
  cardAddPage: boolean;
  cardEditPage: boolean;
};

type PageAction = { type: PageActionType; payload: boolean };

export type PageDispatch = Dispatch<PageAction>;

const pageState: PageState = {
  payPage: false,
  cardAddPage: false,
  cardEditPage: false,
};

export const PageStateContext = createContext<PageState>(pageState);
export const PageDispatchContext = createContext<PageDispatch>(() => null);

export function createPageAction(type: PageActionType, payload: boolean): PageAction {
  return {
    type,
    payload,
  };
}

function reducer(state: PageState, action: PageAction): any {
  console.log(state, action);
  switch (action.type) {
    case PageActionType.PAY_PAGE:
      return {
        ...state,
        payPage: action.payload,
        cardAddPage: false,
        cardEditPage: false,
      };
    case PageActionType.CARD_ADD_PAGE:
      return {
        ...state,
        payPage: false,
        cardAddPage: action.payload,
        cardEditPage: false,
      };
    case PageActionType.CARD_EDIT_PAGE:
      return {
        ...state,
        payPage: false,
        cardAddPage: false,
        cardEditPage: action.payload,
      };
  }
}

function PageProvider({ children } : { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, pageState);

  return (
    <PageStateContext.Provider value={state}>
      <PageDispatchContext.Provider value={dispatch}>{children}</PageDispatchContext.Provider>
    </PageStateContext.Provider>
  )
}

export default PageProvider;
