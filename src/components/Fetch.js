import React, { useState, useEffect } from "react";
import "./fetch.css";

function Fetch() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setNews(json.hits);
      })
      .catch(() => console.log("request failed"));
  }, []);

  return (
    <div className="Fetch">
      {isLoading ? (
        <div>...is loading ...</div>
      ) : (
        news.map(({ title }) => (
          <ol>
            <li>
              <div className="HackerNewstitle">{title}</div>
            </li>
          </ol>
        ))
      )}
    </div>
  );
}

export default Fetch;
