import styles from "./List.module.css";
import cn from "classnames";
export const List = ({
  children,
  orientation,
    className,
  ...props
}) => {
  return (
    <ul
      className={cn(className, {
        [styles.h_ul]: orientation === "horizontal",
        [styles.v_ul]: orientation === "vertical",
      })}
      {...props}
    >
      {children}
    </ul>
  );
};
