import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {
  const [newsFeed, setNewsFeed] = useState();

  const options = {
    method: "GET",
    url: "https://crypto-news-live3.p.rapidapi.com/news",
    headers: {
      "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  function getNews() {
    axios
      .request(options)
      .then(function (response) {
        setNewsFeed(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  let newsFeedSliced = newsFeed?.slice(0, 4);

  useEffect(getNews, []);

  return (
    <div className="Feed">
      <h1 className="unselectable">Feed</h1>
      {!newsFeed ? <p>Loading</p> : <></>}

      {newsFeedSliced?.map((e, index) => (
        <div className="headline" key={index}>
          <a href={e.url} target="_blank" rel="noreferrer">
            {/*<p>{e.title}</p>*/}
            {
              <p>
                {e.title.length > 55 ? e.title.slice(0, 55) + "..." : e.title}
              </p>
            }
          </a>
          <p className="italic">{e.source}</p>
        </div>
      ))}
    </div>
  );
}
