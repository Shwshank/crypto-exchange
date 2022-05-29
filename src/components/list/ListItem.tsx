import React from 'react'
import icon from '../../assets/icon.svg'

const ListItem: React.FC = () =>{
  return (
    <>

        <li className="cryptoItem">
            <div className="iconImg">
                <img src={icon} alt=""/>
            </div>
            <div className="cryptoText">
                <span className="cryptoName"> BTC </span>
                <br />
                <p className="cryptoAmt"> 7842.37 &euro;</p>
            </div>
            <div className="cryptoRemove">
                <br />
                &#10005;
            </div>
        </li>


        <li className="cryptoItem">
            <div className="iconImg">
                <img src={icon} alt=""/>
            </div>
            <div className="cryptoText">
                <span className="cryptoName"> BTC </span>
                <br />
                <p className="cryptoAmt"> 7842.37 &euro;</p>
            </div>
            <div className="cryptoRemove">
                <br />
                &#10005;
            </div>
        </li>

        <li className="cryptoItem">
            <div className="iconImg">
                <img src={icon} alt=""/>
            </div>
            <div className="cryptoText">
                <span className="cryptoName"> BTC </span>
                <br />
                <p className="cryptoAmt"> 7842.37 &euro;</p>
            </div>
            <div className="cryptoRemove">
                <br />
                &#10005;
            </div>
        </li>

    </>
  )
}

export default ListItem