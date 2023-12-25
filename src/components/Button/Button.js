import styles from "./Button.module.css";
import cn from "classnames";
import { useState } from "react";
export const Button = ({
  type,
  state,
  icon_url,
  children,
  className,
  ...props
}) => {
  const [, setIsClicked] = useState(false);

  const handleClick = () => {
    if (state === "disabled") {
      return;
    }
    setIsClicked(true);
  };

  return (
    <button
      className={cn(styles.button, className, {
        [styles.default]: state === "default",
        [styles.click]: state === "click",
        [styles.disabled]: state === "disabled",
        "disabled primary": state === "disabled" && type === "primary",
        "disabled secondary": state === "disabled" && type === "secondary",
        "disabled text": state === "disabled" && type === "text",
        "disabled back": state === "disabled" && type === "back",
        "default text": state === "default" && type === "text",
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
        [styles.text]: type === "text",
        [styles.back]: type === "back",
      })}
      onClick={handleClick}
      {...props}
    >
      {!icon_url || icon_url === "" || icon_url === undefined ? (
        <></>
      ) : (
        <img
            src={icon_url}
            alt={"icon"}
        />
      )}
      {children}
    </button>
  );
};
