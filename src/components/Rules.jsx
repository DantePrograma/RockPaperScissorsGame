import rules from "../../images/image-rules.svg";
import "./Rules.css";

export const Rules = ({ close }) => {
  return (
    <>
      <div className="shadow"></div>
      <div className="rules-container">
        <div className="rules-text">
          <h1>RULES</h1>
          <button onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="hsl(217, 16%, 45%)"
              width={32}
              height={32}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img src={rules} alt="rules image" />
      </div>
    </>
  );
};
