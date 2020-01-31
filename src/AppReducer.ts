import { createContext, Dispatch } from 'react'

export enum AppActionType {
  SET_ALL_TRANSACTIONS_DATA = 'SET_ALL_TRANSACTIONS_DATA'
}

export interface IAppAction {
  allTransactionsData?: any
  type: AppActionType
}

export const initialState = {
  allTransactionsData: null
}

interface IContextProps {
  state: typeof initialState
  dispatch: Dispatch<IAppAction>
}

export const AppContext = createContext({} as IContextProps)

export function AppReducer(state: any, action: IAppAction) {
  switch (action.type) {
    case AppActionType.SET_ALL_TRANSACTIONS_DATA:
      return {
        ...state,
        allTransactionsData: action.allTransactionsData
      }
    default:
      return state
  }
}
