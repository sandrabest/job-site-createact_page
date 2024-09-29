import React from "react";

const Button = ({ text, className }) => {
  return (
    <div>
      <div className={className}>{text}</div>
    </div>
  );
};

export default Button;
