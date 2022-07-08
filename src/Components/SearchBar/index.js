import "./searchbar.css";
import { useState } from "react";

import Spotify from "../../util/Spotify";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [token, setToken] = useState("");

  const search = async () => {
    let token = Spotify.getAccessToken();
    setToken(token);
    let results = await Spotify.search(term, token);
    props.onSearchResults(results);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
        }}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}
