import "../Styles/Kebab.css";
import useModalOpen from "../Hooks/useModalOpen";
import ModalAddLink from "./Modal/ModalAddLink";
import ModalDeleteLink from "./Modal/ModalDeleteLink";

export function Kebab({ url }) {
  const { handleModalOpen, isOpen, setIsOpen, clickValue } = useModalOpen();

  return (
    <div className="kebabContainer">
      <button className="kebabDelete kebabBtn" onClick={handleModalOpen}>
        삭제하기
      </button>
      <button className="kebabAddMyFolder kebabBtn" onClick={handleModalOpen}>
        폴더에 추가
      </button>
      {isOpen && clickValue === "폴더에 추가" ? (
        <ModalAddLink
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selectedFolderName={"내용 입력"}
        />
      ) : (
        <ModalDeleteLink
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          url={url}
        />
      )}
    </div>
  );
}
