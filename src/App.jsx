import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import './App.css';
import { bestSellingTv } from './constants/inventory.js';
import getAmountSold from './helpers/getAmountSold.js';
import getAmountPurchased from './helpers/getAmountPurchased.js';
import getAmountToSell from './helpers/getAmountToSell.js';
import getTvName from './helpers/getTvName.js';
import getTvPrice from './helpers/getTvPrice.js';
import getAvailableSizes from './helpers/getAvailableSizes.js';

function App() {
    const amountSold = getAmountSold();
    const amountPurchased = getAmountPurchased();
    const amountToSell = getAmountToSell();
    function handleButtonClick(buttonText) {
        console.log(buttonText);
    }
    return (
        <div>
            <h1>Tech it easy dashboard</h1>
            <p className="sold">Aantal verkochte producten: {amountSold}</p>
            <p className="purchased">Aantal ingekochte producten: {amountPurchased}</p>
            <p className="toSell">Aantal te verkopen producten: {amountToSell}</p>

            <h2>Best verkochte tv</h2>
            <div className="tv-card">
                <img src={bestSellingTv.sourceImg} alt={getTvName(bestSellingTv)} />
                <p>{getTvName(bestSellingTv)}</p>
                <p>{getTvPrice(bestSellingTv.price)}</p>
                <p>{getAvailableSizes(bestSellingTv.availableSizes)}</p>
                <div className="options">
                    <img src={checkIcon} alt="check" /> wifi
                    <img src={minusIcon} alt="minus" /> speech
                    <img src={checkIcon} alt="check" /> hdr
                    <img src={checkIcon} alt="check" /> bluetooth
                    <img src={minusIcon} alt="minus" /> ambilight
                </div>
            </div>
            <button onClick={() => handleButtonClick('Meest verkocht eerst')}>Meest verkocht eerst</button>
            <button onClick={() => handleButtonClick('Goedkoopste eerst')}>Goedkoopste eerst</button>
            <button onClick={() => handleButtonClick('Meest geschikt voor sport eerst')}>Meest geschikt voor sport eerst</button>
        </div>
    )
}

export default App;
