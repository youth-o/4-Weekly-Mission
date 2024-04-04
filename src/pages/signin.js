import { Input } from "@/components/Input";
import styles from "@/styles/Signin.module.css";
import Image from "next/image";
import Link from "next/link";

function SignIn() {
  return (
    <>
      <div className={styles.body}>
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
            회원이 아니신가요?{" "}
            <Link className={styles.signup} href="/signup">
              회원 가입하기
            </Link>
          </div>
        </div>
        <Input />
        <div className={styles.socialContainer}>
          <div className={styles.socialText}>소셜 로그인</div>
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
      </div>
    </>
  );
}

export default SignIn;
