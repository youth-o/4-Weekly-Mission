import shareIcon from "../Assets/image/share.svg";
import penIcon from "../Assets/image/pen.svg";
import deleteIcon from "../Assets/image/delete.svg";
import "../Styles/FolderTools.css";
import ModalEdit from "./Modal/ModalEdit";
import useModalOpen from "../Hooks/useModalOpen";
import ModalDeleteFolder from "./Modal/ModalDeleteFolder";
import { useFolder } from "../Hooks/useFolder";

function FolderTools({ id }) {
  const { handleModalOpen, isOpen, setIsOpen, clickValue, setClickValue } =
    useModalOpen();
  const { currentMenu } = useFolder();
  return (
    <>
      <div className="tools">
        <div className="icon">
          <img src={shareIcon} alt="공유 아이콘" />
        </div>
        <div className="icon">
          <img
            src={penIcon}
            alt="이름변경 아이콘"
            onClick={() => {
              setClickValue("이름 변경");
              handleModalOpen();
            }}
          />
        </div>
        <div className="icon">
          <img
            src={deleteIcon}
            alt="삭제 아이콘"
            onClick={() => {
              setClickValue("삭제");
              handleModalOpen();
            }}
          />
        </div>
      </div>
      {isOpen && clickValue === "이름 변경" ? (
        <ModalEdit
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selectedFolderName={"유용한 팁"}
        />
      ) : isOpen && clickValue === "삭제" ? (
        <ModalDeleteFolder
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          currentMenu={currentMenu}
        />
      ) : // 여기서 currentMenu 부분이 자꾸 전체로 뜨는데 어디에서 잘못된 걸까요..? ㅠㅠ
      null}
    </>
  );
}

export default FolderTools;
