"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [showUnderscore, setShowUnderscore] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="resizeme">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 700 75"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
              <text
                x="50%"
                y="50%"
                fontSize="75"
                fill="white"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="rift-soft, sans-serif"
              >SIDECAR
              <tspan dx="0" dy="-9" visibility={showUnderscore ? "visible": "hidden"}>_</tspan>
              </text>
              
            </svg>
    </div>
  );
}
