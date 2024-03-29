import { elements } from "../constants";
import { useState } from "react";

export const useGame = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [winner, setWinner] = useState(null);
  const [wins, setWins] = useState(0);

  const getWinner = (user, computer) => {
    if (user === computer) {
      return "DRAW";
    } else if (elements[user].beats.includes(computer)) {
      const updatedWins = wins + 1;
      console.log(updatedWins);
      setWins(updatedWins);
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  };

  const startGame = (id) => () => {
    setUserSelect(id);

    setTimeout(() => {
      const random = Math.floor(Math.random() * elements.length);
      setComputerSelect(random);

      const winner = getWinner(id, random);
      setWinner(winner);
    }, 2000);
    clearTimeout();
  };

  const restartGame = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setWinner(null);
  };

  return {
    userSelect,
    computerSelect,
    winner,
    wins,
    startGame,
    restartGame,
  };
};
