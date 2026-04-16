import React, { useState, useEffect } from "react";

const SaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState(7200); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 className="text-danger">S<span className="text-success">ale Ending Soon</span></h2>

      <h1>
        {hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
};

export default SaleTimer;