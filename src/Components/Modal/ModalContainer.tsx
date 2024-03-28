import { ReactNode } from "react";
import Modal from "react-modal";
import close from "../../Assets/image/close.svg";
import "../../Styles/Modal.css";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalContainer = ({ isOpen, onClose, children }: ModalContainerProps) => {
  return (
    <Modal className="modalBox" isOpen={isOpen} onRequestClose={onClose}>
      <div className="modalContainer">
        <img
          src={close}
          alt="모달 닫기 버튼"
          onClick={onClose}
          className="closeImg"
        />
        {children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
