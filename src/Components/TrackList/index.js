import Track from "../Track";

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props?.results?.map((track) => (
        <Track
          isRemoval={props.isRemoval}
          key={track.id}
          track={track}
          addTrack={props.addTrack}
          removeTrack={props.removeTrack}
        />
      ))}
    </div>
  );
}
