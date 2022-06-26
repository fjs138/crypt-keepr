import { useEffect, useState } from "react";
import axios from "axios";

export default function Ticker() {
  const [pton, setPton] = useState(' API Limit ');
  const [zm, setZm] = useState(' API Limit ');

  function getPton() {
    fetch(
      `https://api.polygon.io/v2/aggs/ticker/PTON/prev?adjusted=true&apiKey=${process.env.REACT_APP_POLYGON_API_KEY}`
    ).then((res) => res.json().then((res) => setPton(res.results[0]["c"])));
  }
  function getZm() {
    fetch(
      `https://api.polygon.io/v2/aggs/ticker/ZM/prev?adjusted=true&apiKey=${process.env.REACT_APP_POLYGON_API_KEY}`
    ).then((res) => res.json().then((res) => setZm(res.results[0]["c"])));
  }
  //
  // function getPton() {
  //   const options = {
  //     method: "GET",
  //     url: "https://alpha-vantage.p.rapidapi.com/query",
  //     params: { function: "GLOBAL_QUOTE", symbol: "pton", datatype: "json" },
  //     headers: {
  //       "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
  //       "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  //     },
  //   };
  //
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data["05. price:"]);
  //       setPton(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }
  //
  // function getZm() {
  //   const options = {
  //     method: "GET",
  //     url: "https://alpha-vantage.p.rapidapi.com/query",
  //     params: { function: "GLOBAL_QUOTE", symbol: "zm", datatype: "json" },
  //     headers: {
  //       "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
  //       "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  //     },
  //   };
  //
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setZm(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }

  useEffect(getZm, []);
  useEffect(getPton, []);

  return (
    <div className="Ticker unselectable box-shadow">
      <h1>Last Close</h1>
      <h2 className="headline box-shadow ticker-element">PTON   ${pton}</h2>
      <h2 className="headline box-shadow ticker-element">ZM   ${zm}</h2>
    </div>
  );
}

/**/