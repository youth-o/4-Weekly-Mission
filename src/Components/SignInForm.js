import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Signin.module.css";
import Image from "next/image";

function SignInForm() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [isPasswordOpened, setIsPasswordOpened] = useState(false);
  const [isIdError, setIsIdError] = useState("");
  const [isPwError, setIsPwError] = useState("");
  const PasswordInputRef = useRef(null);
  const IdInputRef = useRef(null);

  const handleEyeButtonClicked = (e) => {
    e.preventDefault();
    if (isPasswordOpened) {
      PasswordInputRef.current.type = "text";
      return setIsPasswordOpened(false);
    }
    PasswordInputRef.current.type = "password";
    return setIsPasswordOpened(true);
  };

  const handleIdInputChange = (e) => {
    setIdValue(e.target.value);
  };

  const handlePwInputChange = (e) => {
    setPwValue(e.target.value);
  };

  useEffect(() => {
    if (IdInputRef.current) {
      IdInputRef.current.addEventListener("focusout", () => {
        const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
        if (!idValue.trim()) {
          return setIsIdError("이메일을 입력해 주세요.");
        }
        if (!EMAIL_REG_EXP.test(idValue.trim())) {
          return setIsIdError("올바른 이메일 주소가 아닙니다.");
        }
        return setIsIdError("");
      });
    }
  }, [idValue]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        if (!pwValue.trim()) {
          return setIsPwError("비밀번호를 입력해 주세요.");
        }
        return setIsPwError("");
      });
    }
  }, [pwValue]);

  return (
    <form>
      <div className={styles.inputContainer}>
        <label for="email">이메일</label>
        <input
          className={isIdError ? styles.errorFocus : ""}
          placeholder="내용 입력"
          onChange={handleIdInputChange}
          value={idValue}
          id="email"
          ref={IdInputRef}
        />
        <div className={isIdError ? styles.error : ""}>{isIdError}</div>
      </div>
      <div className={styles.inputContainer}>
        <label for="password">비밀번호</label>
        <div className={styles.pwContainer}>
          <input
            className={isPwError ? styles.errorFocus : ""}
            ref={PasswordInputRef}
            placeholder="내용 입력"
            type="password"
            onChange={handlePwInputChange}
            value={pwValue}
            id="password"
          />
          <Image
            className={styles.eye}
            src={
              setIsPasswordOpened ? "/images/eye-on.svg" : "/images/eye-off.svg"
            }
            width={16}
            height={16}
            onClick={handleEyeButtonClicked}
          />
        </div>
        <div className={isPwError ? styles.error : ""}>{isPwError}</div>
      </div>
      <button className={styles.loginBtn} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SignInForm;
