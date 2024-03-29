import React from "react";
import facebookImg from "../Assets/image/facebook.svg";
import twitterImg from "../Assets/image/twitter.svg";
import youtubeImg from "../Assets/image/youtube.svg";
import instaImg from "../Assets/image/instagram.svg";
import styles from "@/styles/Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div className={styles.footerCopyright}>©codeit - 2023</div>
          <div>
            <a className={styles.footerContents} href="/privacy/">
              Privacy Policy
            </a>
            <a className={styles.footerContents} href="/faq/">
              FAQ
            </a>
          </div>
          <div className={styles.footerWebsite}>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                className={styles.footerImage}
                src={facebookImg}
                alt="페이스북 로고"
              />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <img
                className={styles.footerImage}
                src={twitterImg}
                alt="트위터 로고"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img
                className={styles.footerImage}
                src={youtubeImg}
                alt="유튜브 로고"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className={styles.footerImage}
                src={instaImg}
                alt="인스타그램 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
