export default function ExchangeRate({ exchangeRate }) {
  // console.log(typeof exchangeRate)
  const parsedExchangeRate = parseFloat(exchangeRate);
  return (
    <>
      <h1>Exchange Rate</h1>

      <div className="ExchangeRate">
        <h2>{parsedExchangeRate}</h2>
      </div>
    </>
  );
}
