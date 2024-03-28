import linkIcon from "../Assets/image/link.svg";
import "../Styles/FolderHeader.css";
import ModalAddLink from "../Components/Modal/ModalAddLink";
import useModalOpen from "../Hooks/useModalOpen";

export function FolderHeader() {
  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();
  return (
    <>
      <form>
        <div className="linkInputContainer">
          <div className="link">
            <input
              className="linkInput"
              placeholder="링크를 추가해 보세요"
            ></input>
            <img src={linkIcon} className="linkImg" alt="링크 아이콘"></img>
            <button className="linkAddBtn" onClick={handleModalOpen}>
              추가하기
            </button>
            {isOpen && (
              <ModalAddLink isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </div>
        </div>
      </form>
    </>
  );
}
