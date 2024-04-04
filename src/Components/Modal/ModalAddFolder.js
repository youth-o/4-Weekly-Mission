import ModalContainer from "@/components/Modal/ModalContainer";
import styles from "@/styles/Modal.module.css";

const ModalAddFolder = ({ isOpen, onClose }) => {
  const addFolder = (
    <>
      <h2 className={styles.modalTitle}>폴더 추가</h2>
      <input className={styles.modalInput} placeholder="내용 입력"></input>
      <button className={styles.blueButton}>추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addFolder} />
  );
};

export default ModalAddFolder;
