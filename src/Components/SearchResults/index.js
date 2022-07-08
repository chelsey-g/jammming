import "./searchresults.css";
import TrackList from "../TrackList";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        results={props.results}
        addTrack={props.addTrack}
        removeTrack={props.removeTrack}
      />
    </div>
  );
}
