import { useEffect, useState } from "react";

const Players = () => {
  const [playersData, setPlayerData] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

  console.log(playersData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {playersData.map((players) => (
        <div key={players.playerId} className="flex flex-col md:flex-row mb-5">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="">
              <img
              className="w-full md:h-80"
                src={players.image}
                alt="Player image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"><i className="fa-solid fa-user"></i> {players.name} </h2>
              <div className="flex justify-around">
              <p className="flex justify-start text-lg items-center text-gray-500"><i className="fa-solid fa-flag mr-2"></i> {players.country} </p>
              <button className="bg-gray-200 p-2 rounded-lg text-gray-600"> {players.role} </button>
              </div>
              <div className="divider"></div>
              <div>
                <h1 className="text-xl flex justify-start text-gray-800 font-semibold">Rating :</h1>
              </div>
              <div className="flex justify-around">
                <h1 className="font-semibold">{players.battingType}</h1>
                <h1 className="text-gray-500">{players.bowlingType}</h1>
              </div>
              <div className="card-actions justify-around mt-4 items-center">
                <h1 className="font-bold">Price : {players.biddingPrice}</h1>
                <button className="btn border-2 rounded-lg p-2 font-semibold">Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
