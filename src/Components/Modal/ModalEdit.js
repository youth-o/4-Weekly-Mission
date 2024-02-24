import ModalContainer from "./ModalContainer";

const ModalEdit = ({ isOpen, onClose }) => {
  const addFolder = (
    <>
      <h2 className="modalTitle">폴더 이름 변경</h2>
      <input className="modalInput" placeholder="내용 입력"></input>
      <button className="modelAddBtn">변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addFolder} />
  );
};

export default ModalEdit;
