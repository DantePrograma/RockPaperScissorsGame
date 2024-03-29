import { elements } from "../constants";
import { Loader } from "./Loader";
import "./Selects.css";
import triangle from "../../images/bg-triangle.svg";

export const Selects = ({
  userSelect,
  startGame,
  computerSelect,
  restartGame,
  winner,
}) => {
  return (
    <main className="game">
      {userSelect === null ? (
        <div
          style={{ backgroundImage: `url(${triangle})` }}
          className="selects"
        >
          {elements.map((element) => (
            <button
              className="button-option"
              key={element.id}
              onClick={startGame(element.id)}
            >
              <div className="bg-button-color">
                <img src={element.imagen} alt="element" />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="results">
          <div className="options">
            <div className="img-picked">
              <div className="results-text messi">
                {computerSelect != null && <h2>YOU PICKED</h2>}
              </div>
              <div
                style={{
                  background:
                    userSelect === 0
                      ? "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
                      : userSelect === 1
                      ? "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"
                      : "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
                  boxShadow:
                    userSelect === 0
                      ? "0 0.6em 0 #2740be"
                      : userSelect === 1
                      ? "0 0.6em 0 #c96d1d"
                      : "0 0.6em 0 #9e152e",
                }}
                className={`result-circle messi ${
                  winner === "YOU WIN" ? "win" : ""
                }`}
              >
                <div className="bg-button-color">
                  <img src={elements[userSelect].imagen} alt="element" />
                </div>
              </div>
            </div>

            <div className="result-section">
              <div className="white-space"></div>
              {winner && (
                <div className="result-section-text">
                  <h1>{winner}</h1>
                  <button className="play-again" onClick={restartGame}>
                    PLAY AGAIN
                  </button>
                </div>
              )}
            </div>
            <div className="img-picked">
              <div className="results-text messi">
                {computerSelect != null && <h2>THE HOUSE PICKED</h2>}
              </div>
              {computerSelect === null ? (
                <Loader />
              ) : (
                <div
                  style={{
                    background:
                      computerSelect === 0
                        ? "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
                        : computerSelect === 1
                        ? "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"
                        : "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
                    boxShadow:
                      computerSelect === 0
                        ? "0 0.6em 0 #2740be"
                        : computerSelect === 1
                        ? "0 0.6em 0 #c96d1d"
                        : "0 0.6em 0 #9e152e",
                  }}
                  className={`result-circle messi ${
                    winner === "YOU LOSE" ? "win" : ""
                  }`}
                >
                  <div className="bg-button-color">
                    <img src={elements[computerSelect].imagen} alt="element" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
