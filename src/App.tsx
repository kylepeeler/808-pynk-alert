import { useState, useEffect } from "react";
import daunicorn from "/daunic0rn.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [lastTimeStamp, setLastTimestamp] = useState(new Date().toISOString());
  useEffect(() => {
    const timestamp = Date.now();
    setLastTimestamp(`${timestamp}`);
  }, []);

  const [showMagicButton, setMagic] = useState(false);
  useEffect(() => {
    if (count >= 54) {
      if (showMagicButton !== true) {
        alert("pynk");
      }
      setMagic(true);
    }
  }, [count, setMagic, showMagicButton]);

  return (
    <>
      <div style={{ backgroundColor: "#ff1987", borderRadius: "38px" }}>
        <img src={daunicorn} className="puzzle-piece" alt="🦄🧩🅩" />
      </div>
      <h1>808-pynK-al3r7 🎟️🌸💙🄩🤫</h1>
      <h2>🏎️racedude5️⃣4️⃣</h2>
      <hr />
      <div className="card">
        <button onClick={() => setCount((count) => count + 7)}>
          👉 ℤ is {count === 1 ? `🎟️🤔? ${lastTimeStamp}` : count}
        </button>
        <br />
        {showMagicButton && (
          <button onClick={() => window.open("https://www.tymeis.art")}>
            ⏲️⏰⌚️🕰️🕓 t(Z) {lastTimeStamp}
          </button>
        )}
        <hr />
        <div id="ring-control">
          <a href="https://th0th125.wtf/A5479">
            <button>⏮️ PREV</button>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>08</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://63392.neocities.org/A5479">
            <button>NEXT ⏭️</button>
          </a>
        </div>
      </div>
      <p className="z-raffle-whaZZZZ">
        🎟 KARN9:K173:00420:83A6D 🤫🔢 K765A CyFi: ?zs113:#:K173 ⒵:racedude54
      </p>
    </>
  );
}

export default App;
