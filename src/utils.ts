import { AppActionType } from './AppReducer'

export const getAllTransactionsData = async (dispatch: any) => {
  await fetch('http://localhost:3000/getAllTransactionsData').then(
    async (res: any) => {
      const resObj = await res.json()
      const { items } = resObj
      const updatedItems = items.map((item: any) => {
        const { id, created, updated, amount, currency, state, initiatorDetails } = item
        return {
          id, created, updated, amount, currency, state, initiatorDetails
        }
      })
      console.log(updatedItems)
      dispatch({
        allTransactionsData: updatedItems,
        type: AppActionType.SET_ALL_TRANSACTIONS_DATA
      })
    }
  )
}
