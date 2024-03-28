import React from "react";
import { Button } from "./Button";
import "../Styles/FolderMenu.css";
import useModalOpen from "../Hooks/useModalOpen";
import ModalAddFolder from "./Modal/ModalAddFolder";
import { useFolderNames } from "../Hooks/useFolderName";

interface FolderMenuProps {
  onMenuChange: (newMenu: string, id?: number) => void;
}

export function FolderMenu({ onMenuChange }: FolderMenuProps) {
  const { folderNames } = useFolderNames();
  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();

  const sendMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id?: number
  ) => {
    const target = e.target as HTMLButtonElement;
    const newMenu = target.textContent;
    if (!newMenu) return;
    onMenuChange(newMenu, id);
  };

  return (
    <>
      <div className="folderMenu">
        <div>
          <Button folderName={"전체"} onClick={(e) => sendMenu(e)}></Button>
          {folderNames &&
            folderNames.length &&
            folderNames.map(({ name, id }) => (
              <Button
                folderName={name}
                key={id}
                onClick={(e) => sendMenu(e, id)}
              ></Button>
            ))}
        </div>

        <div className="addFolder" onClick={handleModalOpen}>
          폴더 추가 +
        </div>
        {isOpen && (
          <ModalAddFolder
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            selectedFolderName={"내용 입력"}
          />
        )}
      </div>
    </>
  );
}
