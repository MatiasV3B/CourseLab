import React, { useState } from 'react';

/**
 * CourseLab Logo:
 * Checks for /logo.png first (when the user uploads their logo image).
 * If /logo.png is not found or fails to load, gracefully falls back to
 * the handcrafted 45° Erlenmeyer flask SVG.
 */
export const CourseLabLogo: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 38,
}) => {
  const [useImage, setUseImage] = useState(true);

  if (useImage) {
    return (
      <img
        src="/logo.png"
        alt="CourseLab Logo"
        width={size}
        height={size}
        onError={() => setUseImage(false)}
        className={`inline-block flex-shrink-0 object-contain ${className}`}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      aria-label="CourseLab Official Logo"
    >
      <defs>
        <linearGradient id="flaskLiquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D72FE" />
          <stop offset="100%" stopColor="#0B42A6" />
        </linearGradient>
        <linearGradient id="cyanSparkle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BE2FF" />
          <stop offset="100%" stopColor="#52C1FF" />
        </linearGradient>
        <filter id="cyanGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g transform="rotate(45 24 24)">
        <path
          d="M21 8H27M22 8V16L12 34C10.5 36.8 12.5 40 15.7 40H32.3C35.5 40 37.5 36.8 36 34L26 16V8"
          stroke="#94A3B8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4 33.5L20 25.5C22.2 26.8 25.8 26.8 28 25.5L32.6 33.5C33.8 35.5 32.3 38 30 38H18C15.7 38 14.2 35.5 15.4 33.5Z"
          fill="url(#flaskLiquidGrad)"
        />
        <path
          d="M20 25.5C22.2 26.8 25.8 26.8 28 25.5"
          stroke="#52C1FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 28.5C24 30.5 23 31.5 21 31.5C23 31.5 24 32.5 24 34.5C24 32.5 25 31.5 27 31.5C25 31.5 24 30.5 24 28.5Z"
          fill="#FFFFFF"
        />
        <circle cx="24" cy="19" r="1.8" fill="url(#cyanSparkle)" filter="url(#cyanGlowEffect)" />
        <circle cx="26.2" cy="13" r="1.2" fill="#52C1FF" />
        <circle cx="22.5" cy="9.5" r="0.9" fill="#52C1FF" />
        <circle cx="25.5" cy="5" r="1.4" fill="url(#cyanSparkle)" filter="url(#cyanGlowEffect)" />
      </g>
    </svg>
  );
};
