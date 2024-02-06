import React from "react";
import styles from "./input.module.css";

interface InputProps {
  id: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  label,
  value,
  placeholder = "",
  onChange,
  onBlur,
  errorMessage = "",
  required = false,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`${styles.input} ${errorMessage ? styles.inputError : ""}`}
        aria-describedby={`${id}-feedback`}
      />
      {errorMessage && (
        <div id={`${id}-feedback`} className={styles.errorFeedback}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
