import { Button } from "./Button";
import "../Styles/FolderMenu.css";
import useModalOpen from "../Hooks/useModalOpen";
import ModalAddFolder from "./Modal/ModalAddFolder";

export function FolderMenu({ folderNames, onMenuChange }) {
  const sendMenu = (e, id) => {
    const newMenu = e.target.textContent;
    onMenuChange(newMenu, id);
  };

  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();

  return (
    <>
      <div className="folderMenu">
        <div>
          <Button folderName={"전체"} onClick={sendMenu}></Button>
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
          <ModalAddFolder isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
