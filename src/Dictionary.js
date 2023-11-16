import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let { keyword, setKeyword } = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.vaule);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
