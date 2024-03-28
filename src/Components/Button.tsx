import React from "react";
import "../Styles/Button.css";

interface ButtonProps {
  folderName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ folderName, onClick }: ButtonProps) {
  return (
    <button className="folderButton" onClick={onClick}>
      {folderName}
    </button>
  );
}
