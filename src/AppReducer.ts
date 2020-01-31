import { createContext, Dispatch } from 'react'

export enum AppActionType {
  SET_ALL_TRANSACTIONS_DATA = 'SET_ALL_TRANSACTIONS_DATA',
  SET_TARGET_TRANSACTION = 'SET_TARGET_TRANSACTION'
}
export interface ITransactionObj {
  id: string
  created: string
  updated: string
  amount: number
  currency: string
  state: string
  contactName: string
}

export interface IAppAction {
  allTransactionsData?: any
  targetTransaction?: ITransactionObj
  type: AppActionType
}

export const initialState = {
  allTransactionsData: null,
  targetTransaction: null
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
    case AppActionType.SET_TARGET_TRANSACTION:
      return {
        ...state,
        targetTransaction: action.targetTransaction
      }
    default:
      return state
  }
}
