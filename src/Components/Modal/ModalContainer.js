import Modal from "react-modal";
import closeIcon from "../../Assets/image/close.png";
import styles from "@/styles/Modal.module.css";

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
        <img
          src={closeIcon}
          alt="모달 닫기 버튼"
          onClick={onClose}
          className="closeImg"
        ></img>
        {children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
