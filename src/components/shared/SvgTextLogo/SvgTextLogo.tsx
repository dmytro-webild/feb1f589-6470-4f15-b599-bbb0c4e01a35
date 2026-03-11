import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({ text, className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
