import React from "react";
import classNames from "classnames";
import "./Button.scss";

// size : large, medium, small
// color : blue, pink, gray
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  return (
    <button
      className={classNames("Button", size, color, className, {
        outline,
        fullWidth,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
