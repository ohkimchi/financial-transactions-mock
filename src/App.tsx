import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'
import './App.css'
import { AppContext, AppReducer, initialState } from './AppReducer'
import { getAllTransactionsData } from './utils'

const TransactionDivWrapper = styled.div`
  padding: 5px;
  background: white;
`
const TransactionDiv = styled.div`
margin: 5px;
background: lightgrey;
`
const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { allTransactionsData } = state

  useEffect(() => {
    getAllTransactionsData(dispatch)
  }, [])

  useEffect(() => {
    if (allTransactionsData) {
      allTransactionsData.map((trans: any) => {
        Object.entries(trans).map((entry: any) => console.log(entry))
      })
    }

  }, [allTransactionsData])

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div className='App'>
        { allTransactionsData && allTransactionsData.map((trans: any) => {
          return (
            <TransactionDivWrapper>
              <TransactionDiv>
                { Object.entries(trans).map((entry: any) => {
                  return (
                    <div>{ entry.toString() }</div>
                  )
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
