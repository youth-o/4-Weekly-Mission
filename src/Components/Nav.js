import React from "react";
import logo from "../Assets/image/logo.svg";
import styles from "@/styles/SharedHeader.module.css";

export function Nav({ profile }) {
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div>
            <a href="index.html">
              <img className={styles.logo} src={logo} alt="로고 사진" />
            </a>
          </div>
          {profile ? (
            <div className={styles.profile}>
              <img
                src={profile.image}
                alt="userProfileImg"
                className={styles.profileImg}
              ></img>
              <span className={styles.userEmail}>{profile.email}</span>
            </div>
          ) : (
            <a
              href="../Pages/signIn.html"
              className={`${styles.loginBtn} ${styles.btnS}`}
            >
              로그인
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
