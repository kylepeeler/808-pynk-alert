import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
// import daunicorn from "/daunic0rn.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [showMagic, setMagic] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [lastTimeStamp, setLastTimestamp] = useState(new Date().toISOString());
  useEffect(() => {
    const timestamp = Date.now();
    setLastTimestamp(`${timestamp}`);
  }, []);

  useEffect(() => {
    if (count >= 54) {
      if (!showMagic) {
        alert("L00k itZ a pynk 🦄 lololol <3");
      }
      setMagic(true);
      setShowPlaylist(true);
    }
  }, [count, setMagic, setShowPlaylist, showMagic]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#ff1987",
          borderRadius: "38px",
          margin: "5px auto",
          color: "white",
        }}
      >
        <br/>
        {/*<img src={daunicorn} className="puzzle-piece" alt="🦄🧩🅩" />*/}
        <h1>808-pynK-al3r7</h1>
        <br/>
        <h2>🎟️🌸💙🄩🦄🧩🤫</h2>
        <br/>
      </div>

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
        &nbsp; &nbsp;
        <button onClick={() => setShowPlaylist(!showPlaylist)}>▶️📋⚡️</button>
        <br />
        <br />
        &nbsp; &nbsp;
        <button onClick={() => setCount((count) => count + 7)}>
          👉 🦄ℤ is {count === 1 ? `🎟️🤔? 🧩 ${lastTimeStamp}` : count}
        </button>
        &nbsp; &nbsp;
        <br />
        <br />
        {showPlaylist && (
          <>
            <iframe
              width="80%"
              height="800"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2077488516&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "white",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100,
              }}
            >
              <a
                href="https://soundcloud.com/racedude"
                title="racedude54ℤ"
                target="_blank"
              >
                racedude54ℤ
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/racedude/sets/were-rate-limited-again-but"
                title="WubZ"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                WubZ
              </a>
            </div>
          </>
        )}
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
