import React from "react";
import styles from "@/styles/SharedHeader.module.css";

export function SharedHeader({ folder }) {
  return (
    <>
      <header>
        <div className={styles.folder}>
          <div className={styles.folderProfile}>
            <img
              src={folder.userProfileImage}
              className={styles.folderImg}
              alt="userProfileImg"
            ></img>
            <p className={styles.folderProfileName}>{folder.userName}</p>
          </div>
          <div>
            <h2 className={styles.folderName}>{folder.folderName}</h2>
          </div>
        </div>
      </header>
    </>
  );
}
