import { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import Playlist from "../Playlist";

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [savePlaylist, setSavePlaylist] = useState([]);

  function onSearchResults(results) {
    setResults(results);
  }

  function addTrack(track) {
    if (!playlist.find((t) => t.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  }

  function removeTrack(track) {
    setPlaylist(playlist.filter((t) => t.id !== track.id));
  }

  function savePlaylist(TrackList) {
    console.log("Save playlist");
  }

  console.log(playlist);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearchResults={onSearchResults} />
        <div className="App-playlist">
          <SearchResults
            results={results}
            addTrack={addTrack}
            removeTrack={removeTrack}
          />
          <Playlist
            playlist={playlist}
            addTrack={addTrack}
            removeTrack={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
