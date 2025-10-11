import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [showMagic, setMagic] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [lastTimeStamp, setLastTimestamp] = useState(new Date().toISOString());
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = Date.now();
      setLastTimestamp(`${timestamp}`);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count >= 54) {
      if (!showMagic) {
        alert("L00k itZ a pynk 🦄 lololol <3");
        window.open("https://libraryoftime.xyz", "_blank");
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
        <br />
        <h1>808-pynK-a13r7</h1>
        <br />
        <h2>
          📻🎟️🌸💙
          <a
            href="https://github.com/kylepeeler/z"
            title="I use this to start coding, and Zed is my editor, that's why I like 'Z'"
            style={{ color: "#fff" }}
          >
            🆉
          </a>
          🦄🧩🤫😻
        </h2>
        <br />
      </div>

      <h2>
        <a href="https://www.soundcloud.com/racedude">🏎️racedude5️⃣4️⃣🆉</a>
      </h2>
      <hr />
      <div className="card">
        <button onClick={() => window.open(`${window.location.origin}/A5479`)}>
          🔴🎪🪐
        </button>
        &nbsp; &nbsp;
        <button onClick={() => window.open(`${window.location.origin}/808`)}>
          🩷🎟️🦄
        </button>
        &nbsp; &nbsp;
        <button
          onClick={() => window.open("https://www.soundcloud.com/racedude")}
        >
          🔊🎵☁️
        </button>
        &nbsp; &nbsp;
        <button onClick={() => window.open("https://libraryoftime.xyz")}>
          📚🕰️⌚️
        </button>
        &nbsp; &nbsp;
        <button onClick={() => setShowPlaylist(!showPlaylist)}>▶️📋⚡️</button>
        <br />
        <br />
        &nbsp; &nbsp;
        <button onClick={() => setCount((count) => count + 7)}>
          👉 🦄ℤ is{" "}
          {count === 1
            ? `🎟️🤔? 🧩 ${lastTimeStamp}`
            : `🎟️🤔? ${count} && ${lastTimeStamp}`}
        </button>
        &nbsp; &nbsp;
        <br />
        <br />
        {showPlaylist && (
          <>
            <iframe
              width="100%"
              height="1800"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2077488516&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=false&visual=false"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "white!important",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
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
              ???? ❤️⏲️⏰⌚️🕰️🕓 t(Z) == ? : {lastTimeStamp} 💎 🎉📻🎶🐬🎧💙 ????
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
          <a href="https://moonbase01.neocities.org/A5479">
            <button>⏮️ PREV</button>
          </a>
          <span>&nbsp;08&nbsp;</span>
          <a href="https://owl13.neocities.org/A5479">
            <button>NEXT ⏭️</button>
          </a>
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
