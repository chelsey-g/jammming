import Track from "../Track";

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props?.results?.map((track) => (
        <Track
          key={track.id}
          track={track}
          addTrack={props.addTrack}
          removeTrack={props.removeTrack}
        />
      ))}
    </div>
  );
}
