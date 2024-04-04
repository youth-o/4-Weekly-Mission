import styles from "@/styles/SharedHeader.module.css";
import Image from "next/image";
import Link from "next/link";

export function Nav({ profile }) {
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div>
            <Link href="/">
              <Image
                className={styles.logo}
                width={133}
                height={24}
                src="/images/logo.svg"
                alt="로고 사진"
              />
            </Link>
          </div>
          {profile ? (
            <div className={styles.profile}>
              <Image
                src={profile.image}
                alt="userProfileImg"
                width={10}
                height={10}
                className={styles.profileImg}
              />
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
