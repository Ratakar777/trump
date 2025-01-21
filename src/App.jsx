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
                        <a target="_blank" href="https://raydium.io/swap/?inputMint=sol&outputMint=ErNmGo7Y5Gp5dxHePyYjP1WKKVisYXgrRQS2a4trump">
                            <img src={buy} alt="buy"/>
                        </a>
                    </div>

                    <div className="button">
                        <a target="_blank" href="https://www.dextools.io/app/en/solana/pair-explorer/Dndvaw7Fq73tWqQVoFTwSovQdjKak6ke2SVJR62NYq6e">
                            <img src={dextools} alt="dextools"/>
                        </a>
                    </div>
                    <div className="button">
                        <a target="_blank" href="https://dexscreener.com/solana/ErNmGo7Y5Gp5dxHePyYjP1WKKVisYXgrRQS2a4trump">
                            <img src={dexscreener} alt="dexscreener"/>
                        </a>
                    </div>

                </div>

                <div className="trump">
                    <img draggable={false} src={trump} alt=""/>
                </div>

                <div className="footer">
                    <p>$TRUEAR</p>
                    <p className="p2"><span>CA: </span>ErNmGo7Y5Gp5dxHePyYjP1WKKVisYXgrRQS2a4trump</p>
                </div>
            </div>


        </div>
    )
}

export default App
