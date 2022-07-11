import "./playlist.css";
import TrackList from "../TrackList";

// import spotify file
// make onClick hanbdler for button
// call Spotify.save with correct parameters

export default function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList
        results={props.playlist}
        addTrack={props.addTrack}
        removeTrack={props.removeTrack}
        savePlaylist={props.savePlaylist}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={savePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
