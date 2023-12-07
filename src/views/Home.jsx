import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../index.css";
import { useEffect } from "react";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (!stop) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [stop]);

  const handleButtonClick = () => {
    setStop((prevStop) => !prevStop);
  };

  const handleButtonReset = () => {
    // setCount((count) => (count = 0));
    setCount(0);
  };

  return (
    <>
      <div className="home">
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <br />
        <div className="card">
          <h2>count is {count}</h2>
        </div>
        <br />
        <div>
          <Button onClick={() => handleButtonClick()}>
            {stop ? "Start" : "Stop"}
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            onClick={() => handleButtonReset()}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
