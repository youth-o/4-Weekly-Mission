import styles from "@/styles/FolderTools.module.css";
import ModalEdit from "@/components/Modal/ModalEdit";
import useModalOpen from "../hooks/useModalOpen";
import ModalDeleteFolder from "@/components/Modal/ModalDeleteFolder";
import Image from "next/image";

function FolderTools({ id, currentMenu }) {
  const { handleModalOpen, isOpen, setIsOpen, clickValue, setClickValue } =
    useModalOpen();

  return (
    <>
      <div className={styles.tools}>
        <div className={styles.icon}>
          <Image
            src="/images/share.svg"
            alt="공유 아이콘"
            width={18}
            height={18}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src="/images/pen.svg"
            width={18}
            height={18}
            alt="이름변경 아이콘"
            onClick={() => {
              setClickValue("이름 변경");
              handleModalOpen();
            }}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src="/images/delete.svg"
            width={18}
            height={18}
            alt="삭제 아이콘"
            onClick={() => {
              setClickValue("삭제");
              handleModalOpen();
            }}
          />
        </div>
      </div>
      {isOpen && clickValue === "이름 변경" ? (
        <ModalEdit
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selectedFolderName={currentMenu}
        />
      ) : isOpen && clickValue === "삭제" ? (
        <ModalDeleteFolder
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          currentMenu={currentMenu}
        />
      ) : null}
    </>
  );
}

export default FolderTools;
