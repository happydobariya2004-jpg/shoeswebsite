// src/components/SaleTimer.jsx
import React, { useState, useEffect } from "react";

const SaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-warning text-center p-4 border border-dark">
      <h2>🔥 Mega Sale 🔥</h2>
      <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
    </div>
  );
};

export default SaleTimer;