import { useState } from "react";
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
        <h1>Vite + React</h1>
        <div>
          <img src={react} alt="" />
        </div>
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
