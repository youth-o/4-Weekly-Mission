import ModalContainer from "./ModalContainer";

const ModalAddFolder = ({ isOpen, onClose }) => {
  const addFolder = (
    <>
      <h2 className="modalTitle">폴더 추가</h2>
      <input className="modalInput" placeholder="내용 입력"></input>
      <button className="modelAddBtn">추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addFolder} />
  );
};

export default ModalAddFolder;
