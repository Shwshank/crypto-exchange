import React, { useState, useEffect } from 'react'
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Index from './components/Index'

export interface currencyType {
  name: string
  value: number
}

export interface currencyListType {
  list: currencyType[]
}

const App: React.FC = () => {
  const [currencyList, setCurrencyList] = useState<currencyListType['list']>([])

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
