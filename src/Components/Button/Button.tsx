import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  const baseStyles =
    "px-4 py-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-sm",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
  };

  return (
    <button onClick={onClick} className={clsx(baseStyles, variantStyles[variant])}>
      {label}
    </button>
  );
};

export default Button;
