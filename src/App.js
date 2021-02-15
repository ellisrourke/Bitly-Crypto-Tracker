import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    ).then(api_response => {
      setCoins(api_response.data);
    }).catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a coin</h1>
        <form>
          <input type="text" onChange={handleChange} className="coin-input" placeholder="search"/>
        </form>
      </div>

      <div className="coin-row">
                <div className="coin">
                    <img  alt="Coin"/>
                    <h1>{}</h1>
                    <p className="">Symbol</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Current Price (AUD)</p>
                    <p className="coin-percent">24Hr Price</p>
               </div>
      </div>


      {filteredCoins.map(coin => {
        return <Coin 
                  key={coin.id}
                  coinName={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.total_volume}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                />;
      })}
    </div>
  );
}

export default App;
