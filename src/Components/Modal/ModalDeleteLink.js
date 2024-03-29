import ModalContainer from "@/components/Modal/ModalContainer";
import styles from "@/styles/Modal.module.css";

const ModalDeleteLink = ({ isOpen, onClose, url }) => {
  const deleteLinkContent = (
    <>
      <h2 className={styles.modalTitle}>링크 삭제</h2>
      <p>{url}</p>
      <button className={styles.redButton}>삭제하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={deleteLinkContent}
    />
  );
};

export default ModalDeleteLink;
