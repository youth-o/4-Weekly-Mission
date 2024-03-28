import { Button } from "./Button";
import "../Styles/FolderMenu.css";
import useModalOpen from "../Hooks/useModalOpen";
import ModalAddFolder from "./Modal/ModalAddFolder";
import { useFolderName } from "../Hooks/useFolderName";

export function FolderMenu({ onMenuChange }) {
  const { folderNames } = useFolderName();
  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();

  const sendMenu = (e, id) => {
    const target = e.target;
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
