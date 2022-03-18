export default function ExchangeRate({ exchangeRate }) {
  // console.log(typeof exchangeRate)
  const parsedExchangeRate = parseFloat(exchangeRate);
  return (
    <>
      <h1 className="unselectable">Exchange Rate</h1>

      <div className="ExchangeRate">
        <h2>{parsedExchangeRate?parsedExchangeRate:'API Limit...'}</h2>
      </div>
    </>
  );
}
