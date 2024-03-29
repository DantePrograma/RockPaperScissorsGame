import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Rules } from "./components/Rules";
import { Selects } from "./components/Selects";
import { useGame } from "./hooks/useGame";

function App() {
  const { userSelect, startGame, computerSelect, restartGame, winner, wins } =
    useGame();
  const [close, setClose] = useState(false);
  const handleClose = () => setClose(false);

  return (
    <>
      <div className="app-container">
        <Header wins={wins} />

        <Selects
          {...{ userSelect, startGame, computerSelect, restartGame, winner }}
        />
        {close && <Rules close={handleClose} />}
        <button className="rules-button" onClick={() => setClose(true)}>
          RULES
        </button>
      </div>
    </>
  );
}

export default App;
