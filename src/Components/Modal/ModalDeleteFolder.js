import ModalContainer from "./ModalContainer";
import "../../Styles/Modal.css";

const ModalDeleteFolder = ({ isOpen, onClose, currentMenu }) => {
  const deleteFolder = (
    <>
      <h2 className="modalTitle">폴더 삭제</h2>
      <p>{currentMenu}</p>
      <button className="redButton">삭제하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={deleteFolder} />
  );
};

export default ModalDeleteFolder;
