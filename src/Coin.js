import React from 'react'
import './coin.css'

const Coin = ({image, coinName, symbol, price, volume, priceChange, priceChange24}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{coinName}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                   {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : 
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Coin
