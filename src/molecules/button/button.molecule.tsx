import React from "react";

interface ButtonProps {
  cta: string;
  className?: string;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  cta,
  className,
  onClick,
}): JSX.Element => (
  <button
    onClick={onClick}
    className={`gradient button-white rounded-full font-serif ${className}`}
  >
    {cta}
  </button>
);
