import "./track.css";

export default function Track(props) {
  const renderAction = (track) => {
    if (props.isRemoval) {
      return (
        <button
          className="Track-action"
          onClick={() => props.removeTrack(track)}
        >
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={() => props.addTrack(track)}>
          +
        </button>
      );
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction(props.track)}
    </div>
  );
}
