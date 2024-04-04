import ModalContainer from "@/components/Modal/ModalContainer";
import styles from "@/styles/Modal.module.css";

const ModalDeleteFolder = ({ isOpen, onClose, currentMenu }) => {
  const deleteFolder = (
    <>
      <h2 className={styles.modalTitle}>폴더 삭제</h2>
      <p>{currentMenu}</p>
      <button className={styles.redButton}>삭제하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={deleteFolder} />
  );
};

export default ModalDeleteFolder;
