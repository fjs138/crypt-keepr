import { useEffect, useState } from "react";
import axios from "axios";

export default function Ticker() {
  const [pton, setPton] = useState();
  const [zm, setZm] = useState();

  function getPton() {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: { function: "GLOBAL_QUOTE", symbol: "pton", datatype: "json" },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data["05. price:"]);
        setPton(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function getZm() {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: { function: "GLOBAL_QUOTE", symbol: "zm", datatype: "json" },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setZm(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(getZm, []);
  useEffect(getPton, []);

  return (
    <div className="Ticker">
      <h1>Ticker:</h1>
      <h2>Pton:{!pton ? "Over API Limit" : { pton }}</h2>
      <h2>Zoom:{!zm ? "Over API Limit" : { zm }}</h2>
    </div>
  );
}
