import gql from 'graphql-tag'

export const CURRENCY_QUERY = gql`
query ($curr: String!) {
  markets(filter: { baseSymbol: { _eq: $curr } quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
`