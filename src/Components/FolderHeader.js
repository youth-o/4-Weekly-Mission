import styles from "@/styles/FolderHeader.module.css";
import ModalAddLink from "@/components/Modal/ModalAddLink";
import useModalOpen from "../Hooks/useModalOpen";
import Image from "next/image";

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
            <Image
              src="/images/link.svg"
              width={20}
              height={20}
              className={styles.linkImg}
              alt="링크 아이콘"
            />
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
