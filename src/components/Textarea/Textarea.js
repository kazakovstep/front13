import styles from "./Textarea.module.css";
import cn from "classnames";
import React, { useEffect, useState } from "react";

export const Textarea = ({
                          state = "default",
                          hint,
                          label,
                          className,
                          type,
                          value,
                          onChange,
                          ...props
                      }) => {
                                 
    const [inputValue, setInputValue] = useState(value || "");
    const [isFilled, setIsFilled] = useState(!!value);
    const [isFocused, setIsFocused] = useState(false);
    const [textareaHeight, setTextareaHeight] = useState("");

    useEffect(() => {
    setInputValue(value || "");
    setIsFilled(!!value);
  }, [value]);
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    const handleBlur = () => {
        setIsFilled(inputValue !== "");
        setIsFocused(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

  const isDisabledEmpty = state === "disabled-empty";
  const isDisabledFilled = state === "disabled-filled";
  
  useEffect(() => {
    const textarea = document.getElementById("Textarea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setTextareaHeight(textarea.style.height);
  }, [inputValue]);

  return (
    <>
        <div className={cn(styles.inputWrapper, className)}>
            {!label || label === "" || label === undefined ? (
        <></>
      ) : (
                <label
        className={cn(styles.label, {
          [styles.label_disabled_filled]: state === "disabled-filled",
          [styles.label_disabled_empty]: state === "disabled-empty",
          [styles.label_focused]: isFocused,
        })}
      >
        {label}
      </label>)}
      <div>
          <textarea
            id="Textarea"
            className={cn(styles.input, {
              [styles.default]: state === "default",
              [styles.filled]: isFilled,
              [styles.error_filled]: state === "error-filled",
              [styles.disabled_empty]: isDisabledEmpty,
              [styles.disabled_filled]: isDisabledFilled,
            })}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            readOnly={isDisabledEmpty || isDisabledFilled}
            rows={1}
            {...props}
          />
      </div>
      {!hint || hint === "" || hint === undefined ? (
        <></>
      ) : (
        <p
        className={cn(styles.p, className, {
          [styles.p_default]: state === "default",
          [styles.p_focus]: isFocused,
          [styles.p_filled]: isFilled,
          [styles.p_error_filled]: state === "error-filled",
          [styles.p_disabled_empty]: state === "disabled-empty",
          [styles.p_disabled_filled]: state === "disabled-filled",
        })}
        {...props}
      >
        {hint}
      </p>
      )}
        </div>
    </>
  );
};
