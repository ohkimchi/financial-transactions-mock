import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'
import { getAllTransactionsData, refundOneTran } from '../utils/utils'
import './App.css'
import { AppActionType, AppContext, AppReducer, initialState } from './AppReducer'

const TransactionDivWrapper = styled.div`
  padding: 5px;
  background: white;
`
const TransactionDiv = styled.div`
  margin: 5px;
  background: lightgrey;
`

const StateDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const StateSpan = styled.span`
  color: blue;
`

const RefundButton = styled.button`
  color: red;
  font-size: 16px;
`

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { allTransactionsData } = state

  useEffect(() => {
    getAllTransactionsData(dispatch)
  }, [])

  function updateTransactionState(transaction: any) {
    console.log('allTransactionsData', allTransactionsData)
    const updatedEntry = refundOneTran(transaction, allTransactionsData)
    dispatch({
      allTransactionsData: updatedEntry,
      type: AppActionType.SET_ALL_TRANSACTIONS_DATA
    })
  }

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div className='App'>
        { allTransactionsData && allTransactionsData.map((trans: any, i: number) => {
          return (
            <TransactionDivWrapper key={ `transaction-${i}` }>
              <TransactionDiv>
                { Object.entries(trans).map((entry: any, j: number) => {
                  return (entry[0] === 'state'
                    ? <StateDiv key={ `transaction-${i}-entry-${j}` }>
                      <StateSpan>{ `${entry[0]}: ${entry[1]} ` }</StateSpan>
                      {
                        entry[1] !== 'REFUNDED'
                        && (<RefundButton
                          onClick={ () => updateTransactionState(trans) }
                        >REFUND</RefundButton>)
                      }
                    </StateDiv>
                    : <div key={ `transaction-${i}-entry-${j}` }>{ `${entry[0]}: ${entry[1]}` }</div>)
                }) }
              </TransactionDiv>
            </TransactionDivWrapper>

          )
        }) }
      </div>
    </AppContext.Provider>

  )
}

export default App
