import styles from "@/styles/Signin.module.css";
import Image from "next/image";
import Link from "next/link";

function SignUpHeader() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={210}
          height={38}
          className={styles.logo}
          alt="로고 이미지"
        />
      </Link>
      <div className={styles.noSignup}>
        이미 회원이신가요?{" "}
        <Link className={styles.signup} href="/signin">
          로그인 하기
        </Link>
      </div>
    </div>
  );
}

export default SignUpHeader;
