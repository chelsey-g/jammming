import "./playlist.css";
import TrackList from "../TrackList";

export default function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList results={props.playlist} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
