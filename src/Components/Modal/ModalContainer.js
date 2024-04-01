import Modal from "react-modal";
import styles from "@/styles/Modal.module.css";
import Image from "next/image";

const ModalContainer = ({ isOpen, onClose, children }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      width: "360px",
      inset: "unset",
      margin: "50vh auto",
      padding: 0,
      transform: "translateY(-50%)",
      position: "relative",
      borderRadius: "15px",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className={styles.modalContainer}>
        <Image
          src="/images/close.png"
          alt="모달 닫기 버튼"
          width={24}
          height={24}
          onClick={onClose}
          className="closeImg"
        />
        {children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
