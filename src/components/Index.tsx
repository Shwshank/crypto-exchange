import React from 'react'
import logo from '../assets/logo.svg'
import icon from '../assets/icon.svg'
import figure from '../assets/figure.png'

export default function Index() {
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
                    <ul className="cryptoList">
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

                    </ul>
                </div>


            </div>
        </div>

        <div className="col2">
            <div className="whiteBox">
                <br /><br />

                <input type="text" className="currecyInp" placeholder="CRYPTOCURRENCY CODE" />

                <br />

                <button className="addButton">
                    Add
                </button>

                <br />

                <div className="conditionText">
                    Use of this service is subject to terms and conditions.
                </div>


            </div>
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
