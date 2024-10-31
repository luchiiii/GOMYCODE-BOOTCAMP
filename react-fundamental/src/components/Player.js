const Player = (props) => {
  console.log(props);
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "100%" }}>
        <img src={props.playerImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.playerName}</h5>
          <p className="card-text">Team: {props.playerTeam}</p>
          <p className="card-text">Nationality: {props.playerNationality}</p>
          <p className="card-text">JerseyNumber: {props.playerJerseyNumber}</p>
          <p className="card-text">Age: {props.playerAge}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
