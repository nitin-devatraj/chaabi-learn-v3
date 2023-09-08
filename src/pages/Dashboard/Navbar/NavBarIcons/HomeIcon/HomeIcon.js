import React from "react";

function HomeIcon({ fillColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clipPath="url(#clip0_368_3294)">
        <path
          d="M15 28.5001V21.0001H21V28.5001C21 29.3251 21.675 30.0001 22.5 30.0001H27C27.825 30.0001 28.5 29.3251 28.5 28.5001V18.0001H31.05C31.74 18.0001 32.07 17.1451 31.545 16.6951L19.005 5.40008C18.435 4.89008 17.565 4.89008 16.995 5.40008L4.45503 16.6951C3.94503 17.1451 4.26002 18.0001 4.95002 18.0001H7.50002V28.5001C7.50002 29.3251 8.17502 30.0001 9.00002 30.0001H13.5C14.325 30.0001 15 29.3251 15 28.5001Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_368_3294">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HomeIcon;
