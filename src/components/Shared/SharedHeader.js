import React from "react";
import styles from "@/styles/SharedHeader.module.css";
import Image from "next/image";

export function SharedHeader({ folder }) {
  if (!folder) {
    return null;
  }
  return (
    <>
      <header>
        <div className={styles.folder}>
          <div className={styles.folderProfile}>
            <Image
              src={folder.userProfileImage}
              className={styles.folderImg}
              width={60}
              height={60}
              alt="userProfileImg"
            />
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
