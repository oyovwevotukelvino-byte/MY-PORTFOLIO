import { useState } from "react";

function Counter({ initialCount = 0, step = 1, min = -Infinity, max = Infinity }) {
  const [count, setCount] = useState(initialCount);
  const [currentStep, setCurrentStep] = useState(step);

  // Functions
  const inc = () => setCount((c) => Math.min(c + currentStep, max));
  const dec = () => setCount((c) => Math.max(c - currentStep, min));
  const reset = () => setCount(initialCount);

  // Keyboard control
  const handleKey = (e) => {
    if (e.key === "ArrowUp") inc();
    if (e.key === "ArrowDown") dec();
    if (e.key === "r" || e.key === "R") reset();
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKey}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        maxWidth: 260,
      }}
      aria-label="Counter component"
    >
      {/* Current Count */}
      <div style={{ fontSize: 28, fontWeight: 700 }}>{count}</div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={dec} aria-label="decrement" style={buttonStyle}>
          −
        </button>
        <button onClick={reset} aria-label="reset" style={buttonStyle}>
          Reset
        </button>
        <button onClick={inc} aria-label="increment" style={buttonStyle}>
          +
        </button>
      </div>

      {/* Step input */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <label style={{ fontSize: 12 }}>Step</label>
        <input
          type="number"
          value={currentStep}
          onChange={(e) => setCurrentStep(Number(e.target.value))}
          style={{
            width: 60,
            padding: 6,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
      </div>

      <small style={{ color: "#666" }}>
        Use ↑ / ↓ to change, R to reset
      </small>
    </div>
  );
}

const buttonStyle = {
  padding: "8px 12px",
  borderRadius: 6,
  border: "1px solid #ddd",
  background: "white",
  cursor: "pointer",
  minWidth: 56,
  fontSize: 16,
};

export default Counter;
