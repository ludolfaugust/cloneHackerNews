import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <div>
        {/* <img src={/components/logo_HackerNews.png} /> */}
        <p>
          <b>Hacker News</b> new | past | comments | ask | show | jobs | submit
        </p>
      </div>
      <div>login</div>
    </div>
  );
}

export default Header;
