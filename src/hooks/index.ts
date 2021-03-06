import { useContext } from 'react';
import axios from 'axios';

import {
  AppDispatch,
  AppDispatchContext,
  AppStateContext,
  State,
} from '../context/Provider';
import {
  PageState,
  PageStateContext,
  PageDispatch,
  PageDispatchContext,
} from './../context/PageProvider';

export function useAppState(): State {
  const state = useContext(AppStateContext);

  return state;
}

export function usePageState(): PageState {
  const state = useContext(PageStateContext);

  return state;
}

export function useAppDispatch(): AppDispatch {
  const dispatch = useContext(AppDispatchContext);
  return dispatch;
}

export function usePageDispatch(): PageDispatch {
  const dispatch = useContext(PageDispatchContext);

  return dispatch;
}

export function useCard() {
  const dispatch = useAppDispatch();
  const { cardList } = useAppState();

  const getCards = async () => {
    try {
      const response = await axios.get('http://localhost:4004/cards');
      // dispatch(createAction(ActionType.SET_CARD_LIST, response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return { cardList, getCards };
}
