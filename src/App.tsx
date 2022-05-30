import React, { useState, useEffect } from 'react'
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Index from './components/Index'


// Currency will be stored in an array
// for Example":
/* [
    { name: "BTC", value: 123321 }
    { name: "XRP", value: 534 }
 ]
 */
 
export interface currencyType {
  name: string
  value: number
}

export interface currencyListType {
  list: currencyType[]
}

const App: React.FC = () => {

  // Initialize empltty array 
  // CurrencyList will be updated in two senarios
  // 1. user add new currency
  // 2. user deletes any currency for the list

  const [currencyList, setCurrencyList] = useState<currencyListType['list']>([])


  // initialize appolo client
  // with in memory cache

  const client = new ApolloClient({
    uri: 'https://api.blocktap.io/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Index currencyList={currencyList} setCurrency={setCurrencyList} />
      </div>
    </ApolloProvider>
  )
}

export default App
