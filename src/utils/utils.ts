import { AppActionType } from '../App/AppReducer'

export const getAllTransactionsData = async (dispatch: any) => {
  await fetch('http://localhost:3000/getAllTransactionsData').then(
    async (res: any) => {
      const resObj = await res.json()
      const { items } = resObj
      const updatedItems = items.map((item: any) => {
        const {
          id,
          created,
          updated,
          amount,
          currency,
          state,
          initiatorDetails
        } = item
        const { contactName } = initiatorDetails
        return {
          id,
          created,
          updated,
          amount,
          currency,
          state,
          contactName
        }
      })
      dispatch({
        allTransactionsData: updatedItems,
        type: AppActionType.SET_ALL_TRANSACTIONS_DATA
      })
    }
  )
}

export function refundOneTran(transaction: any, allTransactionsData: any[]) {
  const checkObjectEqual = (ele: any) =>
    JSON.stringify(ele) === JSON.stringify(transaction)
  const entryPos = allTransactionsData.findIndex(checkObjectEqual)
  const allTransactionsDataTemp = allTransactionsData

  const updatedEntry = {
    ...transaction,
    state: 'REFUNDED'
  }
  allTransactionsDataTemp[entryPos] = updatedEntry
  return allTransactionsDataTemp
}
