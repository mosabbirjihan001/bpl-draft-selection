

import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Available from "./components/AllPlayers/Available";
import Selected from "./components/AllPlayers/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer"
import NewsTeller from "./components/NewsTellar/NewsTeller"





function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });

  const handleIsActive = (status) => {
    setIsActive({ available: status === "available", status });
  };

  const [amount, setAmount] = useState(0);

  
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addSelectedPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players.");
      return;
    }

    if (amount < player.biddingPrice) {
      toast.error("Not enough coins to select this player.");
      return;
    }

    setSelectedPlayers((prev) => [...prev, player]);
    setAmount((prevAmount) => prevAmount - player.biddingPrice);
    toast.success(`${player.name} added to your team!`);
  };

  const removeSelectedPlayer = (player) => {
    setSelectedPlayers((prevPlayers) =>
      prevPlayers.filter((p) => p.playerId !== player.playerId)
    );
    setAmount((prevAmount) => prevAmount + player.biddingPrice);
    toast.info(`${player.name} removed from your team!`);
  };



  return (
    <>
      <ToastContainer
       position="top-center"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
      />
      <Navbar amount={amount} />
      <Header addAmount={() => setAmount((prev) => prev + 1000000)} />

      <div className="flex justify-between m-16">
        <h1 className="text-2xl font-bold">Available Players</h1>
        <div className="rounded-xl">
          <button
            onClick={() => handleIsActive("available")}
            className={`${
              isActive.available ? "btn bg-yellow-300 mr-5" : "btn"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActive("selected")}
            className={`${isActive.available ? "btn" : "btn btn-primary"}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {isActive.available ? (
        <Available
          addSelectedPlayer={addSelectedPlayer}
          amount={amount}
          setAmount={setAmount}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <Selected
          selectedPlayers={selectedPlayers}
          removeSelectedPlayer={removeSelectedPlayer}
        />
      )}


      <NewsTeller></NewsTeller>
      <Footer></Footer>
    </>
  );
}

export default App;






