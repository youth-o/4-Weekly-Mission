import shareIcon from "../Assets/image/share.png";
import penIcon from "../Assets/image/pen.png";
import deleteIcon from "../Assets/image/delete.png";
import "../Styles/FolderTools.css";
import ModalEdit from "./Modal/ModalEdit";
import useModalOpen from "../Hooks/useModalOpen";

function FolderTools() {
  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();
  return (
    <>
      <div className="tools">
        <div className="icon">
          <img src={shareIcon} alt="공유 아이콘" />
        </div>
        <div className="icon">
          <img src={penIcon} alt="이름변경 아이콘" onClick={handleModalOpen} />
        </div>
        {isOpen && (
          <ModalEdit isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
        <div className="icon">
          <img src={deleteIcon} alt="삭제 아이콘" />
        </div>
      </div>
    </>
  );
}

export default FolderTools;
