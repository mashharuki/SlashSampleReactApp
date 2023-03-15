import React from 'react';
import logo from './logo.svg';
import './App.css';
import paymentButton from './paymentButton.png';

/**
 * App Component
 */
function App() {
  // 決済URL (ここは必要に応じて変更する。)
  const paymentUrl = "https://testnet.slash.fi/payment-merchant/2334ea3bc896476c4e8b525952d411f2";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please click button
        </p>
        <a
          className="App-link"
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={paymentButton} 
            alt="payment button" 
            height={120}
          />
        </a>
      </header>
    </div>
  );
}

export default App;
