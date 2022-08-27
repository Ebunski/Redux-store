import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

export default function PoorConnection() {
  return (
    <div className="center">
      <AiOutlineWarning className="error-svg" />
      <h2> Please check your internet connection </h2>
    </div>
  );
}
