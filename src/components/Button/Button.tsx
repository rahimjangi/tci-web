import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode; // Assuming you pass an SVG or similar React component for icons
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  isLoading = false,
  icon = null,
  ariaLabel,
}) => (
  <button
    type={type}
    className={`${styles.button} ${className}`}
    onClick={onClick}
    disabled={disabled || isLoading}
    aria-label={ariaLabel || label}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    {!isLoading ? label : "Loading..."}
  </button>
);

export default Button;
