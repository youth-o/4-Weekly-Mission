import styles from "@/styles/Signin.module.css";
import Image from "next/image";
import Link from "next/link";

function SignUpFooter() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialText}>다른 방식으로 가입하기</div>
      <div className={styles.socialLogin}>
        <Link className={styles.socialImg} href="https://www.google.com/">
          <Image
            src="/images/google.svg"
            width={42}
            height={42}
            alt="구글 로그인"
          />
        </Link>
        <Link
          className={styles.socialImg}
          href="https://www.kakaocorp.com/page/"
        >
          <Image
            src="/images/kakaotalk.svg"
            width={42}
            height={42}
            alt="카카오톡 로그인"
          />
        </Link>
      </div>
    </div>
  );
}

export default SignUpFooter;
