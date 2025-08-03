import React, { useState } from 'react'
import InputBox  from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount]=useState();
  const [from,setFrom]=useState('npr');
  const [to,setTo]=useState('usd');
  const [convertedAmount,setConvertedAmount]=useState();

  const [updatedDate,data]=useCurrencyInfo(from);
  const options = Object.keys(data);
  
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert=()=>{
    setConvertedAmount(amount*data[to]);
  }
  
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                placeholder={'Amount'}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectedCurrency={from}
                                currencyOptions={options}
                                onAmountChange={amount=>{
                                  setAmount(amount)
                                  // convert() for auto convert in amount change.
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                placeholder={'Result'}
                                amount={convertedAmount}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectedCurrency={to}
                                currencyOptions={options}
                                amountDisable
                            />
                        </div>
                        <button type="submit" onClick={convert} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        <h1 className='text-blue-800 px-0.5  w-2/3 mt-2 rounded-lg border-gray-60 backdrop-blur-sm bg-white/20' >Rate Updated on: {updatedDate}</h1>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App