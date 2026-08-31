import React, { useId } from "react";

interface GeometricAccentProps {
  className?: string;
  borderColor?: string;
  fillColor?: string;
  width?: number | string;
  height?: number | string;
}

export default function GeometricAccent({
  className = "h-24 mr-1 w-20 border-b-[3px] border-primary",
  borderColor,
  fillColor = "#ffffff",
}: GeometricAccentProps) {
  const uniqueId = useId().replace(/:/g, "-");
  const gradientId = `lg-accent-${uniqueId}`;
  const clipPathId = `cp-accent-${uniqueId}`;

  const borderClass = borderColor ? `border-b-[3px] ${borderColor}` : "";

  return (
    <div className="hidden md:flex items-end self-end shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${borderClass}`}
        viewBox="0 0 82 95"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0.5"
            x2="0.834"
            y2="0.57"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor={fillColor} />
            <stop offset="1" stopColor={fillColor} />
          </linearGradient>
          <clipPath id={clipPathId}>
            <rect
              width="82"
              height="100"
              transform="translate(23421.109 21495.506)"
              fill={`url(#${gradientId})`}
            />
          </clipPath>
        </defs>
        <g
          transform="translate(-23421.109 -21495.506)"
          clipPath={`url(#${clipPathId})`}
        >
          <path
            d="M-444.826-445.357l20.884-3.518-8.206,19.075Zm-12.616,20.819,21.109-3.447-13.1-16.073Zm36.629,20.2,11.361-19.462h-19.685ZM-477-456.89v3.544l2.332-3.544Zm15.939,29.786,8.033-19.575-20.325-.011Zm41.815-29.786h-1.982l.881,1.5Zm-28.177,52.364,11.855-18.983-21.561,3.521Zm48.8-52.364H-413.81l-2.711,3.683,24.4,4.3ZM-443.5-402.57h18.741l-7.619-17.811Zm-29.772,0h21.934l-9.6-15.3Zm56.9-46.34,10.453,18.266,13.256-14.088Zm27.3,50.888h-27.461l10.532,17.482Zm-16.661-23.493L-416.8-402.57h28.569Zm-22.323-6.828h18.446l-10.53-18.4Zm4.007-24.778-2.219-3.768h-13.7l-6.2,7.5Zm-27.424,55.1H-473.2l12.207,15.228Zm4.071,1.711-9.525,15.253,21.275,3.462Zm26.829.02-7.96,19.115h19.476Zm-3.962-1.731H-443.34l11.3,18Zm40.683-58.868h-9.1l5.128,6.29Zm4.842,67.426v-8.558h-8.324Zm0-13.107v-9.278L-388-402.57Zm-66.661-54.32h-5.754l1.875,4.688Zm31.873,95h15.184l-7.98-9.789Zm20.849,0h9.1l4.842-7.671v-3.066h-22.692Zm9.213-87.078,4.726-.732v-6.756Zm-4.3,40.109,9.023-9.336v-5.6H-401.85Zm9.023-29.971v-6.548l-5.152.8Zm-9.441-3.937-13.573,14.425h23.014v-4.342l-.213.215Zm-14.662,65.592h24.1v-5.957l-9.187-9.446ZM-477-422.472v17.527l12.269-15.22Zm0,26.726v17.519l12.085-2.443Zm0-48.553v17.208l12.245,2.3Zm20.9-12.591h-13.343l-3.942,5.991,19.681.01Zm28.549,84.262,6.324,10.738h1.982l7.9-10.738Zm-12.431,10.738h13.7l-5.7-9.675Zm-17.3-14.622,5.85,14.622h5.754l9.285-11.223ZM-477-373.6v11.706h2.332l9.243-14.049Zm7.556,11.706H-456.1l-5.04-12.621Z"
            transform="translate(23898.625 21952.398)"
            fill={`url(#${gradientId})`}
          />
        </g>
      </svg>
    </div>
  );
}
