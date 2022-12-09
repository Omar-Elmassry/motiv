import React from "react";

type Props = {
  width?: string;
  height?: string;
  color?: string;
  secondaryColor?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
  duration?: string;
};

export default function LoaderSpinner({
  height,
  width,
  color,
  secondaryColor,
  duration,
  strokeOpacity,
  strokeWidth,
}: Props) {
  return (
    <div>
      <svg
        width={width ?? "50"}
        height={height ?? "50"}
        viewBox="0 0 39 39"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color ?? "#02c996"}
        aria-label="loading"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth={strokeWidth ?? "2"}>
            <circle
              strokeOpacity={strokeOpacity ?? ".5"}
              cx="18"
              cy="18"
              r="18"
              stroke={secondaryColor}
            ></circle>
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur={duration ?? "1s"}
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}
