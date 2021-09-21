import React, { useState } from "react";
import "./SearchQuery.css";

function Searchquery() {
  const [searchQuery, setSearchQuery] = useState();
  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const API_ROOT = "http://hn.algolia.com/api/v1/search?query=react";

  function loadResults(searchQuery) {
    const url = searchQuery
      ? `${API_ROOT}/search/${searchQuery}.json`
      : `${API_ROOT}/pop.json`;
  }

  return (
    <div className="Footer">
      <hr />
      <div>Applications are open for YC Winter 2022</div>
      <div className="Footer_Navbar">
        Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC |
        Contact
      </div>

      <div className="SearchQuery">
        <button
          className="Searchbutton"
          onClick={() => loadResults(searchQuery)}
        >
          Search
        </button>
        <input
          className="SearchInput"
          placeholder="Just do it"
          onChange={onChange}
          value={searchQuery}
          type="text"
        />
      </div>
    </div>
  );
}

export default Searchquery;
