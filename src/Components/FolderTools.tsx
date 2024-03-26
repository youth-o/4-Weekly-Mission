import React from "react";
import "../Styles/FolderTools.css";
import ModalEdit from "./Modal/ModalEdit";
import useModalOpen from "../Hooks/useModalOpen";
import ModalDeleteFolder from "./Modal/ModalDeleteFolder";
import { useFolder } from "../Hooks/useFolder";
import share from "../Assets/image/share.svg";
import pen from "../Assets/image/pen.svg";
import deleteImg from "../Assets/image/delete.svg";

interface FolderToolsProps {
  id: number;
}

function FolderTools({ id }: FolderToolsProps) {
  const { handleModalOpen, isOpen, setIsOpen, clickValue, setClickValue } =
    useModalOpen();
  const { currentMenu } = useFolder();

  return (
    <>
      <div className="tools">
        <button className="icon" onClick={handleModalOpen}>
          <img src={share} alt="공유 아이콘" />
        </button>
        <button className="icon" onClick={handleModalOpen}>
          <img src={pen} alt="이름변경 아이콘" />
        </button>
        <button className="icon" onClick={handleModalOpen}>
          <img src={deleteImg} alt="삭제 아이콘" />
        </button>
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
