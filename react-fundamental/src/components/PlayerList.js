import players from "../players";
import Player from "./Player";

const PlayerList = () => {
  return (
    <section className="container">
      <div className="row">
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              playerImage={player.image}
              playerName={player.name}
              playerTeam={player.team}
              playerNationality={player.nationality}
              playerJerseyNumber={player.jerseyNumber}
              playerAge={player.age}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PlayerList;
