import linkIcon from "../Assets/image/link.svg";
import styles from "@/styles/FolderHeader.module.css";
import ModalAddLink from "@/components/Modal/ModalAddLink";
import useModalOpen from "../Hooks/useModalOpen";

export function FolderHeader() {
  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();
  return (
    <>
      <form className={styles.form}>
        <div className={styles.linkInputContainer}>
          <div className={styles.link}>
            <input
              className={styles.linkInput}
              placeholder="링크를 추가해 보세요"
            ></input>
            <img
              src={linkIcon}
              className={styles.linkImg}
              alt="링크 아이콘"
            ></img>
            <button className={styles.linkAddBtn} onClick={handleModalOpen}>
              추가하기
            </button>
            {isOpen && (
              <ModalAddLink isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </div>
        </div>
      </form>
    </>
  );
}
