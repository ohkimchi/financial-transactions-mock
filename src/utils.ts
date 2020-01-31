import { AppActionType } from './AppReducer'

export const getAllTransactionsData = async (dispatch: any) => {
  await fetch('http://localhost:3000/getAllTransactionsData').then(
    async (res: any) => {
      const resObj = await res.json()
      const { items } = resObj
      dispatch({
        allTransactionsData: items,
        type: AppActionType.SET_ALL_TRANSACTIONS_DATA
      })
    }
  )
}
