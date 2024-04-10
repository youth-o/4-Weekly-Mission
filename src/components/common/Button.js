import styles from "@/styles/Button.module.css";

export function Button({ folderName, onClick }) {
  return (
    <button className={styles.folderButton} onClick={onClick}>
      {folderName}
    </button>
  );
}
