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
  const [figure, setFigure] = useState(time || FOREVER_MS); // Default to A (begin-the-beguine)

  // Figure ranges with leap logic
  // A to M: 144000 to 44100
  // LEEP at M
  // Y to Z: 5533 to 2255

  // Calculate purrcent from figure (0-99%, LEEP at 100%, 101-113%)
  const calculatePurrcent = (fig: number): number => {
    if (fig >= 144000) return 0; // A: begin-the-beguine
    if (fig > 44100) {
      // A to M range: 144000 to 44100 maps to 0% to 99%
      return ((144000 - fig) / (144000 - 44100)) * 99;
    }
    if (fig === 44100) return 99; // M: ready-to-rok
    if (fig > 5533) {
      // After LEEP, interpolate between M and Y
      return 99 + ((44100 - fig) / (44100 - 5533)) * 2;
    }
    if (fig >= 2255) {
      // Y to Z range: 5533 to 2255 maps to 101% to 113%
      return 101 + ((5533 - fig) / (5533 - 2255)) * 12;
    }
    return 113; // Z: done, haapning
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
      </div>

      <div>
        <div>TBR (estimated time): {formatTBR(tbr)}</div>
      </div>
    </div>
  );
};

export default GoFigure;
