import ExchangeRate from "./ExchangeRate";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CurrencyConverter() {
  const currencies = ["USD", "BTC", "ETH"];
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amountToConvertFrom, setAmountToConvertFrom] = useState(1);
  const [amountToConvertTo, setAmountToConvertTo] = useState(0);
  const [exchangeRate, setExchangeRate] = useState();
  const [apiError,setApiError] = useState('apierror')
  // const [fromAmount, setFromAmount] = useState(1);
  // const [toAmount, setToAmount] = useState(1);

  // console.log(toCurrency + fromCurrency);
  // console.log(amountToConvertTo);
  //
  // console.log(amountToConvertFrom);

  function convertCurrencies() {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: fromCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: toCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      .catch(function (error) {
        console.error(error);
        setApiError(error)
      });
  }

  useEffect(convertCurrencies, [fromCurrency, toCurrency]);

  useEffect(
    () => setAmountToConvertTo(exchangeRate * amountToConvertFrom),
    [exchangeRate]
  );

  return (
    <div className="CurrencyConverter">
      <h1 className="unselectable">Convert</h1>
      <div className="CurrencyConverterTable">
        <table>
          <tbody>
            <tr>
              <td className="unselectable">From</td>
              <td>
                <input
                  onChange={(e) => setAmountToConvertFrom(e.target.value)}
                  value={amountToConvertFrom}
                />
              </td>
              <td>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencies.map((e) => (
                    <option key={e.valueOf()}>{e}</option>
                  ))}
                </select>
              </td>
              <td>
                <button onClick={(e) => setAmountToConvertFrom(1)}>
                  Clear
                </button>
              </td>
            </tr>
            <tr>
              <td className="unselectable">To</td>
              <td>
                <h2>{amountToConvertTo?amountToConvertTo:'API Limit...'}</h2>
              </td>
              <td>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencies.map((e) => (
                    <option key={e.valueOf()}>{e}</option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  onClick={(e) =>
                    setAmountToConvertTo(exchangeRate * amountToConvertFrom)
                  }
                >
                  Convert
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExchangeRate exchangeRate={exchangeRate} />
    </div>
  );
}
