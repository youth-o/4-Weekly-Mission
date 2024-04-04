import ModalContainer from "@/components/Modal/ModalContainer";
import { useFolder } from "../../hooks/useFolder";
import styles from "@/styles/Modal.module.css";

const ModalAddLinkToFolder = ({ isOpen, onClose, selectedFolderName }) => {
  const { folder } = useFolder();

  const addFolderContent = (
    <>
      <h2 className="title">폴더에 추가</h2>
      <div className={styles.menuLists}>
        {folder &&
          folder.map((eachFolder) => (
            <div className={styles.menuList}>
              {eachFolder.name}
              <p>{eachFolder.link.count}개 링크</p>
            </div>
          ))}
      </div>
      <button className={styles.blueButton}>추가하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={addFolderContent}
    />
  );
};
export default ModalAddLinkToFolder;
