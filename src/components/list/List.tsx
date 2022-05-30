import React, { useEffect } from 'react'
import ListItem from './ListItem'
import icon from '../../assets/icon.svg'
import { currencyType } from '../../App'

interface Iprops {
  currencyList: currencyType[],
  setCurrency: React.Dispatch<React.SetStateAction<currencyType[]>>
}

const List:React.FC<Iprops> = ({currencyList,setCurrency}) => {

  const deleteCurrency = (index: number) =>{
    let temp = currencyList;
    temp.splice(index,1)
    setCurrency([...temp])
  }

  const renderList = (): JSX.Element[]=>{
    return currencyList.map((currency: currencyType, index) =>{
      return(
        <li className="cryptoItem" key={currency.name} >
            <div className="iconImg">
                <img src={icon} alt=""/>
            </div>
            <div className="cryptoText">
                <span className="cryptoName"> {currency.name} </span>
                <br />
                <p className="cryptoAmt"> 
                { Math.round(currency.value * 100)/100} 
                &euro;</p>
            </div>
            <div className="cryptoRemove">
                <br />
                <span className="pointer" onClick={e=> {
                  e.preventDefault()
                  deleteCurrency(index)
                  }} >
                &#10005;
                </span>
            </div>
        </li>
      )
      }
    )
  }

  return (
    <>
    <ul className="cryptoList">
        
      {renderList()}

    </ul>
    </>
  )
}

export default List