import React from "react";

const Logo = ({ w, h }) => {
  return (
    <div className="rounded-3xl overflow-hidden">
      <svg
        width={w}
        height={h}
        viewBox="0 0 370.16679528778167 155.08501865265873"
        preserveAspectRatio="xMidYMid meet"
        className="css-1j8o68f"
      >
        <rect width="100%" height="100%" fill="#222" />
        <text
          x="50%"
          y="50%"
          font-family="'Roboto', sans-serif"
          font-size="100"
          fill="#ffffff"
          text-anchor="middle"
          dominant-baseline="middle"
          font-weight="bold"
        >
          T&<tspan fill="#80b3ff">D</tspan>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
