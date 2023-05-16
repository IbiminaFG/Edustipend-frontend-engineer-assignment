import React from "react";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "40px",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px",
        gap: "10px",
        borderRadius: "10px",
        border: "1px solid black",
      }}
    >
      <Button text="Contact us" coloured={false} />
      <Button text="Signup" coloured={true} />
    </nav>
  );
};

export default Navigation;
