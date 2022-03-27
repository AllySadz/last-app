import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search(event) {
    if (event) {
      event.preventDefault();
    }
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000135bbdcb12ff7427db0a8bac80554b2ab";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .het(pexelsApiUrl, {
        headers: { Authorization: `Bearer${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What are you looking for?</h1>
          <form onSubmit={search}>
            <input
              type="search"
              autoFocus={true}
              onKeyDown={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            <em>suggested words: sunset, wine, cheese, yoga...</em>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
