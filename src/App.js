import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";

function App() {
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
    <div className="App">
      {isLoading ? (
        <div>is loading...</div>
      ) : (
        news.map((hit) => (
          <div className="HackerNews">
            <div className="'HackerNewstitle'">{hit.title}</div>
          </div>
        ))
      )}
    </div>
  );
}
export default App;
