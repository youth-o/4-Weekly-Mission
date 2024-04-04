import ModalContainer from "@/components/Modal/ModalContainer";
import styles from "@/styles/Modal.module.css";

const ModalEdit = ({ isOpen, onClose, selectedFolderName }) => {
  const editFolder = (
    <>
      <h2 className={styles.modalTitle}>폴더 이름 변경</h2>
      <input
        className={styles.modalInput}
        placeholder={selectedFolderName}
      ></input>
      <button className={styles.blueButton}>변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={editFolder} />
  );
};

export default ModalEdit;
