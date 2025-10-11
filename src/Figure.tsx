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
  const [figure, setFigure] = useState(144000); // Default to A (begin-the-beguine)
  const [isDragging, setIsDragging] = useState(false);

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
      // After LEEP, interpolate between Y and M, skipping 100%
      const percent = 101 - ((fig - 5533) / (44100 - 5533)) * 2;
      // Skip 100% and above - clamp to 99.9% if at or above 100%
      return percent >= 100.0 ? 99.9 : percent;
    }
    if (fig === 44100) return 99.9; // M: ready-to-rok
    if (fig < 144000) {
      // M to A range: 44100 to 144000 maps to 99% to 0%
      return 99.9 - ((fig - 44100) / (144000 - 44100)) * 99.9;
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

      <div
        style={{
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {/* Text labels above */}
        <div style={{ marginBottom: "5px" }}>
          <div>Figure: {figure}</div>
          <div>Purrcent: {purrcent.toFixed(1)}%</div>
        </div>

        {/* Overlapping container */}
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            marginInline: "auto",
            height: "40px",
            position: "relative",
          }}
        >
          {/* Progress bar (bottom layer) */}
          <div
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "white",
              position: "absolute",
              bottom: "5px",
            }}
          >
            {/* Green bar for 0-99% */}
            <div
              style={{
                width: `${Math.min(purrcent, 99)}%`,
                height: "100%",
                backgroundColor: "#FF1987",
                position: "absolute",
                left: 0,
                transition: "width 0.1s ease-out",
              }}
            />
            {/* green bar for LEEP zone (99-101%) */}
            {purrcent > 99 && (
              <div
                style={{
                  width: `${Math.min(purrcent - 99, 2)}%`,
                  height: "100%",
                  backgroundColor: "#9ACC54",
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
                  backgroundColor: "#CC0808",
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
                userSelect: "none",
                WebkitUserSelect: "none",
                fontWeight: "bold",
                textShadow: "0 0 3px rgba(255,255,255,0.8)",
              }}
            >
              {`${purrcent.toFixed(1)}%`}
              {purrcent === 0 && " (begin-the-beguine)"}
              {purrcent === 99 && " (ready-to-rok)"}
              {purrcent === 113 && " (done, haapning)"}
              {purrcent !== 0 &&
                purrcent !== 99 &&
                purrcent !== 113 &&
                " (in-progress)"}
            </div>
          </div>

          {/* Slider (top layer) */}
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "#333",
              position: "absolute",
              top: 0,
              cursor: isDragging ? "grabbing" : "grab",
              touchAction: "none",
              opacity: 0.5,
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              const rect = e.currentTarget.getBoundingClientRect();
              const updateFigure = (clientX: number) => {
                const x = Math.max(
                  0,
                  Math.min(clientX - rect.left, rect.width),
                );
                const percent = x / rect.width;
                const newFigure = Math.round(
                  144000 - percent * (144000 - 2255),
                );
                setFigure(newFigure);
              };

              updateFigure(e.clientX);

              const handleMouseMove = (e: MouseEvent) =>
                updateFigure(e.clientX);
              const handleMouseUp = () => {
                setIsDragging(false);
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };

              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
            onTouchStart={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const updateFigure = (clientX: number) => {
                const x = Math.max(
                  0,
                  Math.min(clientX - rect.left, rect.width),
                );
                const percent = x / rect.width;
                const newFigure = Math.round(
                  144000 - percent * (144000 - 2255),
                );
                setFigure(newFigure);
              };

              const touch = e.touches[0];
              updateFigure(touch.clientX);

              const handleTouchMove = (e: TouchEvent) => {
                e.preventDefault();
                updateFigure(e.touches[0].clientX);
              };
              const handleTouchEnd = () => {
                document.removeEventListener("touchmove", handleTouchMove);
                document.removeEventListener("touchend", handleTouchEnd);
              };

              document.addEventListener("touchmove", handleTouchMove, {
                passive: false,
              });
              document.addEventListener("touchend", handleTouchEnd);
            }}
          >
            {/* Slider thumb */}
            <div
              style={{
                position: "absolute",
                left: `${((144000 - figure) / (144000 - 2255)) * 100}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "20px",
                height: "100%",
                background: "white",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                transition: "left 0.05s ease-out",
              }}
            />
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
