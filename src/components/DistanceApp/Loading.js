import React from "react";
import { Button, Spinner } from "reactstrap";

export const Loading = () => {
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2f3750",
        fontSize: 18,
      }}
    >
      <Spinner />
      &nbsp;&nbsp;Please wait
    </div>
  );
};
