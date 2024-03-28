import ModalContainer from "./ModalContainer";

const ModalEdit = ({ isOpen, onClose, selectedFolderName }) => {
  const editFolder = (
    <>
      <h2 className="modalTitle">폴더 이름 변경</h2>
      <input className="modalInput" placeholder={selectedFolderName}></input>
      <button className="modelAddBtn">변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={editFolder} />
  );
};

export default ModalEdit;