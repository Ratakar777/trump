import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import x from './assets/buttons/x.png'
import buy from './assets/buttons/buy.png'
import dexscreener from './assets/buttons/dexscreener.png'
import dextools from './assets/buttons/dextools.png'
import tel from './assets/buttons/tel.png'

function App() {

    return (
        <div className="page">
            <div className="container">
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

                <div className="main">

                </div>
            </div>
        </div>
    )
}

export default App
