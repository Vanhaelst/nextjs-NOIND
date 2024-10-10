import React from "react";

interface ButtonProps {
  cta: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: any) => void;
}
export const Button: React.FC<ButtonProps> = ({
  cta,
  className,
  disabled,
  onClick,
}): JSX.Element => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      gradient button-white bg-white rounded-full font-serif 
      ${className ? className : ""}
      ${disabled ? "" : "hover-grow grow-small "}
    `}
  >
    {cta}
  </button>
);
