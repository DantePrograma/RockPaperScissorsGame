import "./Header.css";
import logo from "../../images/logo.svg";

export const Header = ({ wins }) => {
  return (
    <>
      <header className="header">
        <div className="logo-game">
          <img src={logo} alt="logo" />
        </div>

        <div className="score-section">
          <p>SCORE</p>
          <h1>{wins}</h1>
        </div>
      </header>
    </>
  );
};
