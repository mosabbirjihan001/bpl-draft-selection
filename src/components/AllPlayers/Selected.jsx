/* eslint-disable react/prop-types */



const Selected = ({ selectedPlayers, removeSelectedPlayer }) => {
  return (
    <div>
      <h1 className="text-3xl py-5">Selected Players</h1>
      {selectedPlayers.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {selectedPlayers.map((player) => (
            <div
              key={player.playerId}
              className=" bg-base-100 shadow-xl p-6 gap-20 flex items-center justify-between w-200"
            >
              <div className="flex items-center">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-20 h-20 object-cover rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{player.name}</h2>
                  <p className="text-gray-500">{player.country}</p>
                  <p className="text-gray-500">{player.role}</p>
                </div>
              </div>
              <button
                onClick={() => removeSelectedPlayer(player)}
                className="btn bg-red-500 text-white rounded-lg p-2 mt-5"
                title="Remove player"
              >Remove <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No players selected yet.</p>
      )}
    </div>
  );
};

export default Selected;








  
