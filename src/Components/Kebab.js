import styles from "@/styles/Kebab.module.css";
import useModalOpen from "../hooks/useModalOpen";
import ModalAddLink from "@/components/Modal/ModalAddLink";
import ModalDeleteLink from "@/components/Modal/ModalDeleteLink";

export function Kebab({ url }) {
  const { handleModalOpen, isOpen, setIsOpen, clickValue } = useModalOpen();

  return (
    <div className={styles.kebabContainer}>
      <button className={styles.kebabBtn} onClick={handleModalOpen}>
        삭제하기
      </button>
      <button className={styles.kebabBtn} onClick={handleModalOpen}>
        폴더에 추가
      </button>
      {isOpen && clickValue === "폴더에 추가" ? (
        <ModalAddLink
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selectedFolderName={"내용 입력"}
        />
      ) : (
        <ModalDeleteLink
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          url={url}
        />
      )}
    </div>
  );
}
