import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import x from './assets/buttons/x.png'
import buy from './assets/buttons/buy.png'
import dexscreener from './assets/buttons/dexscreener.png'
import dextools from './assets/buttons/dextools.png'
import tel from './assets/buttons/tel.png'
import trump from './assets/v1.png'

function App() {

    return (
        <div className="page">
            <div className="container">
                <p className="title">The official ear of Donald Trump</p>
                <div className="button-block">

                    <div className="button">
                        <a target="_blank" href="https://t.me/TrumpEarMeme">
                            <img src={tel} alt="tel"/>
                        </a>
                    </div>

                    <div className="button">
                        <a target="_blank" href="https://x.com/TrumpEarMeme">
                            <img src={x} alt="x"/>
                        </a>
                    </div>

                    <div className="button buy-button">
                        <a target="_blank" href="">
                            <img src={buy} alt="buy"/>
                        </a>
                    </div>

                    <div className="button">
                        <a target="_blank" href="">
                            <img src={dextools} alt="dextools"/>
                        </a>
                    </div>
                    <div className="button">
                        <a target="_blank" href="">
                            <img src={dexscreener} alt="dexscreener"/>
                        </a>
                    </div>

                </div>

                <div className="trump">
                    <img draggable={false} src={trump} alt=""/>
                </div>

                <div className="footer">
                    <p>$TRUEAR</p>
                </div>
            </div>


        </div>
    )
}

export default App
