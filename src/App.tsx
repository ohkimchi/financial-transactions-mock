import React, { useReducer, useEffect } from 'react'
import './App.css'
import { AppReducer, initialState } from './AppReducer'
import { getAllTransactionsData } from './utils'

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { allTransactionsData } = state
  console.log(allTransactionsData)

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
    <div className='App'>
      { allTransactionsData && allTransactionsData.map((trans: any) => {
        return (
          <div>
            { Object.entries(trans).map((entry: any) => {
              return (
                <div>{ entry.toString() }</div>
              )
            }) }
          </div>
        )
      }) }
    </div>
  )
}

export default App
