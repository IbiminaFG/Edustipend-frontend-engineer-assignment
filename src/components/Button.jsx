import React from "react";

const Button = ({ text, coloured }) => {
  return (
    <button
      style={{
        borderRadius: "5px",
        backgroundColor: coloured ? "orange" : "transparent",
        outline: "none",
        border: coloured ? "1px solid black" : "none",
        padding: "5px 15px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
