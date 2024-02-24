import Modal from "react-modal";
import closeIcon from "../../Assets/image/close.png";

const ModalContainer = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="modalContainer">
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
