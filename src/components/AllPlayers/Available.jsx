/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Available = ({
  addSelectedPlayer,
  amount,
}) => {
  const [playersData, setPlayerData] = useState([]);


  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

  const handleSelectPlayer = (player) => {
    // if (selectedPlayers.length >= 6) {
    //   toast.error("You can only select up to 6 players.");
    //   return;
    // }

    if (amount < player.biddingPrice) {
      toast.error("Not enough coins to select this player.");
      return;
    }

    addSelectedPlayer(player);
    // setAmount((prevAmount) => prevAmount - player.biddingPrice);
    // toast.success(`${player.name} added to your team!`);
  };




  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <div key={player.playerId} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              className="w-full md:h-80 object-cover"
              src={player.image}
              alt={player.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <i className="fa-solid fa-user"></i> {player.name}
            </h2>

            <div className="flex justify-around my-2">
              <p className="text-lg text-gray-500">
                <i className="fa-solid fa-flag mr-2"></i> {player.country}
              </p>
              <button className="bg-gray-200 p-2 rounded-lg text-gray-600">
                {player.role}
              </button>
            </div>

            <div className="divider"></div>

            <div className="flex justify-around my-2">
              <div className="flex flex-col items-start">
                <label className="font-semibold text-gray-800">Batting:</label>
                <p>{player.battingType}</p>
              </div>
              <div className="flex flex-col items-start">
                <label className="font-semibold text-gray-800">Bowling:</label>
                <p>{player.bowlingType}</p>
              </div>
            </div>

            <div className="card-actions justify-around mt-4 items-center">
              <h1 className="font-bold">Price: {player.biddingPrice}</h1>
              <button
                onClick={() => handleSelectPlayer(player)}
                className="btn border-2 rounded-lg p-2 font-semibold"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Available;
