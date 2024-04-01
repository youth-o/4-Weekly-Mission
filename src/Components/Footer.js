import React from "react";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="https://www.facebook.com/" target="_blank">
              <Image
                className={styles.footerImage}
                src="/images/facebook.svg"
                width={20}
                height={20}
                alt="페이스북 로고"
              />
            </Link>
            <Link href="https://twitter.com/?lang=ko" target="_blank">
              <Image
                className={styles.footerImage}
                src="/images/twitter.svg"
                width={20}
                height={20}
                alt="트위터 로고"
              />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <Image
                className={styles.footerImage}
                src="/images/youtube.svg"
                width={20}
                height={20}
                alt="유튜브 로고"
              />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image
                className={styles.footerImage}
                src="/images/instagram.svg"
                width={20}
                height={20}
                alt="인스타그램 로고"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
