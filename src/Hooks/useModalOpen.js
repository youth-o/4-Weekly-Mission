import { useState } from "react";

const useModalOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickValue, setClickValue] = useState("");

  const handleModalOpen = (e) => {
    setIsOpen(true);
  };

  return {
    handleModalOpen,
    isOpen,
    setIsOpen,
    clickValue,
    setClickValue,
  };
};

export default useModalOpen;
