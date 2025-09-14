import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import daunicorn from "/daunic0rn.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [lastTimeStamp, setLastTimestamp] = useState(new Date().toISOString());
  useEffect(() => {
    const timestamp = Date.now();
    setLastTimestamp(`${timestamp}`);
  }, []);

  const [showMagic, setMagic] = useState(false);
  useEffect(() => {
    if (count >= 54) {
      if (!showMagic) {
        alert("L00k itZ a pynk 🦄 lololol <3");
      }
      setMagic(true);
    }
  }, [count, setMagic, showMagic]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#ff1987",
          borderRadius: "38px",
          margin: "5px auto",
        }}
      >
        <img src={daunicorn} className="puzzle-piece" alt="🦄🧩🅩" />
      </div>
      <h1>808-pynK-al3r7 🎟️🌸💙🄩🦄🧩🤫</h1>
      <h2>
        <a href="https://www.soundcloud.com/racedude">🏎️racedude5️⃣4️⃣</a>
      </h2>
      <hr />
      <div className="card">
        <button onClick={() => window.open("https://racedude54.xyz/A5479")}>
          💚🎪🪐
        </button>
        &nbsp; &nbsp;
        <button
          onClick={() => window.open("https://www.soundcloud.com/racedude")}
        >
          🔊🎵☁️
        </button>
        <br />
        <br />
        &nbsp; &nbsp;
        <button onClick={() => setCount((count) => count + 7)}>
          👉 🦄ℤ is {count === 1 ? `🎟️🤔? 🧩 ${lastTimeStamp}` : count}
        </button>
        &nbsp; &nbsp;
        {showMagic && (
          <>
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => window.open("https://www.tymeis.art")}>
              ???? ⏲️⏰⌚️🕰️🕓 t(Z) {lastTimeStamp} ????
            </button>
            <br />
            <br />
            <br />
            <br />
          </>
        )}
        <hr />
        <div id="ring-control">
          <br />
          <br />
          <a href="https://th0th125.wtf/A5479">
            <button>⏮️ PREV</button>
          </a>
          <span>&nbsp;08&nbsp;</span>
          <a href="https://63392.neocities.org/A5479">
            <button>NEXT ⏭️</button>
          </a>
        </div>
      </div>
      <p className="z-raffle-whaZZZZ">
        🎟 KARN9:K173:00420:83A6D 🤫🔢 K765A CyFi: ?zs113:#:K173 ⒵:racedude54
      </p>
      <Analytics />
    </>
  );
}

export default App;
