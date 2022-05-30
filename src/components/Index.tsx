import React from 'react'
import logo from '../assets/logo.svg'
import icon from '../assets/icon.svg'
import figure from '../assets/figure.png'
import List from './list/List'
import AddCrypto from './AddCrypto'
import { currencyType } from '../App'

// List and AddCrypto are two Children components
//
// 1. LIST: for rendering the list 
// 2. ADDCRYPTO: for adding new currency and fetching the value

interface Iprops {
    currencyList: currencyType[],
    setCurrency: React.Dispatch<React.SetStateAction<currencyType[]>>
}

const Index: React.FC<Iprops> =({currencyList,setCurrency}) => {
  return (
    <>
    <div className="container">

        <div className="col1">
            <div className="col1Container">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>

                <br /><br />

                <span className="textHeading1">
                    Now you can track all your cryptos here!
                </span>
                <br /><br />

                <div className="cryptoDisplay">

                    <span className="textHeading2">
                        Just enter the cryptocurrency code on the form to the right.
                    </span>
                    <br /><br /><br /><br />
                    <List currencyList={currencyList} setCurrency={setCurrency} />
                </div>


            </div>
        </div>

        <div className="col2">
            <AddCrypto  currencyList={currencyList} setCurrency={setCurrency} />
        </div>
    </div>
        
    <div className="footer">
            <div className="greenImgDiv">
                <img src={figure} className="greenImg" alt=""/>
            </div>

            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa, dolor deserunt maxime, nam veritatis, est
            ipsum voluptatum mollitia hic ipsam nemo ea aspernatur corrupti magnam voluptates suscipit quod! Repellat!
    </div>
    </>
  )
}

export default Index;
