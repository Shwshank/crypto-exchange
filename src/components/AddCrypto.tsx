import React, { useCallback, useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { CURRENCY_QUERY } from '../graphQL/querty'
import { currencyType } from '../App'

interface Iprops {
  currencyList: currencyType[],
  setCurrency: React.Dispatch<React.SetStateAction<currencyType[]>>
}


const AddCrypto: React.FC<Iprops> =({currencyList, setCurrency}) => {

  const [name, setName] = useState('')
  const [getCurrency, { loading, data }] = useLazyQuery(CURRENCY_QUERY)

  useEffect(()=>{

    if(data && name){
      
      if(data?.markets.length){
        
        setCurrency([...currencyList, { 
          name: name.toUpperCase(), 
          value: data.markets[0].ticker.lastPrice }])
          
          setName('')
      }else {
        alert("Data not available")
      }
    }
  },[data])

  const updateName = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }

  const checkCurrency = (): void=>{
    let flag = false
    flag = currencyList.some((cur: currencyType)=>{
      if(cur.name === name.toUpperCase() )
      return true
    })

    if(!flag){
      getCurrency({
        variables: {
          curr: name,
        },
      })
    } else {
      setName('')
      alert(' This currency already exists! ')
    }

  }

  return (
    <>
        <div className="whiteBox">
            <br /><br />

            <input type="text" className="currecyInp" placeholder="CRYPTOCURRENCY CODE" 
            value={name} onChange={e=>updateName(e)}
            />

            <br />

            <button className="addButton"
            onClick={e=>{
              e.preventDefault()
              checkCurrency()
            }}
            disabled={name.length? false: true}
            >
                { loading&&name ? 'Fetching...': 'Add'}
            </button>

            <br />

            <div className="conditionText">
                Use of this service is subject to terms and conditions.
            </div>
        </div>
    </>
  )
}

export default AddCrypto;