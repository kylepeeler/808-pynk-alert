import { useState } from "react";

const FOREVER_MS = 26000 * 365.25 * 24 * 60 * 60 * 1000; // 26,000 years in milliseconds

const GoFigure = ({
  currentTime = FOREVER_MS,
}: {
  currentTime?: string | number;
}) => {
  let time = currentTime;
  if (typeof time === "string") {
    time = Number(currentTime);
  }
  const [figure, setFigure] = useState(0); // Default to A (begin-the-beguine)

  // Figure ranges with leap logic
  // A to M: 144000 to 44100
  // LEEP at M
  // Y to Z: 5533 to 2255

  // Calculate purrcent from figure (0-99%, LEEP at 100%, 101-113%)
  const calculatePurrcent = (fig: number): number => {
    if (fig <= 2255) return 113; // Z: done, haapning
    if (fig < 5533) {
      // Z to Y range: 2255 to 5533 maps to 113% to 101%
      return 113 - ((fig - 2255) / (5533 - 2255)) * 12;
    }
    if (fig < 44100) {
      // After LEEP, interpolate between Y and M
      return 101 - ((fig - 5533) / (44100 - 5533)) * 2;
    }
    if (fig === 44100) return 99; // M: ready-to-rok
    if (fig < 144000) {
      // M to A range: 44100 to 144000 maps to 99% to 0%
      return 99 - ((fig - 44100) / (144000 - 44100)) * 99;
    }
    return 0; // A: begin-the-beguine
  };

  // Calculate TBR (estimated time) based on figure and momentum
  const calculateTBR = (fig: number): number => {
    const purrcent = calculatePurrcent(fig);
    if (purrcent === 0) return FOREVER_MS;
    if (purrcent >= 113) return 0;

    // Momentum-based estimation
    const progress = purrcent / 113;
    const remaining = 1 - progress;
    return remaining * FOREVER_MS;
  };

  const purrcent = calculatePurrcent(figure);
  const tbr = calculateTBR(figure);

  const formatTBR = (ms: number): string => {
    if (ms >= FOREVER_MS) return "26,000 years (forever)";
    const years = ms / (365.25 * 24 * 60 * 60 * 1000);
    if (years > 1) return `${years.toFixed(1)} years`;
    const days = ms / (24 * 60 * 60 * 1000);
    if (days > 1) return `${days.toFixed(1)} days`;
    const hours = ms / (60 * 60 * 1000);
    return `${hours.toFixed(1)} hours`;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Timestamp:
          {currentTime}
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Figure: {figure}
          <input
            type="range"
            min={2255}
            max={144000}
            value={figure}
            onChange={(e) => setFigure(Number(e.target.value))}
            style={{ width: "400px", marginLeft: "10px" }}
          />
        </label>
        <div style={{ fontSize: "12px", marginTop: "5px", color: "#666" }}>
          {figure >= 144000 && "A: begin-the-beguine"}
          {figure === 44100 && "M: ready-to-rok"}
          {figure <= 2255 && "Z: done, haapning"}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div>Purrcent: {purrcent.toFixed(1)}%</div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          {purrcent === 0 && "(begin-the-beguine)"}
          {purrcent === 99 && "(ready-to-rok)"}
          {purrcent === 113 && "(done, haapning)"}
        </div>
        <div
          style={{
            width: "400px",
            height: "30px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            marginTop: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Green bar for 0-99% */}
          <div
            style={{
              width: `${Math.min(purrcent, 99)}%`,
              height: "100%",
              backgroundColor: "#00ff00",
              position: "absolute",
              left: 0,
              transition: "width 0.1s ease-out",
            }}
          />
          {/* Magenta bar for LEEP zone (99-101%) */}
          {purrcent > 99 && (
            <div
              style={{
                width: `${Math.min(purrcent - 99, 2)}%`,
                height: "100%",
                backgroundColor: "#ff00ff",
                position: "absolute",
                left: "99%",
                transition: "width 0.1s ease-out",
              }}
            />
          )}
          {/* Red bar for 101-113% */}
          {purrcent > 101 && (
            <div
              style={{
                width: `${Math.min(purrcent - 101, 12)}%`,
                height: "100%",
                backgroundColor: "#ff0000",
                position: "absolute",
                left: "101%",
                transition: "width 0.1s ease-out",
              }}
            />
          )}
          {/* Percentage text overlay */}
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#000",
              fontWeight: "bold",
              textShadow: "0 0 3px rgba(255,255,255,0.8)",
            }}
          >
            {purrcent > 0 && `${purrcent.toFixed(1)}%`}
          </div>
        </div>
      </div>

      <div>
        <div>TBR (estimated time): {formatTBR(tbr)}</div>
      </div>
    </div>
  );
};

export default GoFigure;
