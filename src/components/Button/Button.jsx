/* eslint-disable react/prop-types */
import "./Button.css";

function Button(props) {
  const variant = props.variant;
  const size = props.size;

  return (
    <button
      {...props}
      className={`button ${variant === "outline" ? "outline" : ""} ${
        size === "small" ? "small" : ""
      }`}
    />
  );
}

export default Button;
