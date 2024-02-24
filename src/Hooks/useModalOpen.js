import { useState } from "react";

const useModalOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickValue, setClickValue] = useState("");

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setClickValue(e.target.textContent);
  };

  return {
    handleModalOpen,
    isOpen,
    setIsOpen,
    clickValue,
  };
};

export default useModalOpen;
