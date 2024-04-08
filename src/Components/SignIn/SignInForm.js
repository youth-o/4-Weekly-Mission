import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Signin.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

function SignInForm() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [isPasswordOpened, setIsPasswordOpened] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const PasswordInputRef = useRef(null);
  const IdInputRef = useRef(null);

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: idValue,
            password: pwValue,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/folder");
      } else {
        if (
          data.error &&
          typeof data.error === "string" &&
          data.error.includes("Email")
        ) {
          setIdErrorMessage("올바른 이메일 주소가 아닙니다.");
        }
        if (
          data.error &&
          typeof data.error === "string" &&
          data.error.includes("Password")
        ) {
          setPwErrorMessage(
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          return setIdErrorMessage("이메일을 입력해 주세요.");
        }
        if (!EMAIL_REG_EXP.test(idValue.trim())) {
          return setIdErrorMessage("올바른 이메일 주소가 아닙니다.");
        }
        return setIdErrorMessage("");
      });
    }
  }, [idValue]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        if (!pwValue.trim()) {
          return setPwErrorMessage("비밀번호를 입력해 주세요.");
        }
        return setPwErrorMessage("");
      });
    }
  }, [pwValue]);

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      // 로컬스토리지에서 가져오기
      router.push("/folder");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">이메일</label>
        <input
          className={idErrorMessage ? styles.errorFocus : styles.notError}
          placeholder="이메일을 입력해 주세요."
          onChange={handleIdInputChange}
          value={idValue}
          id="email"
          name="email"
          ref={IdInputRef}
        />
        <div className={idErrorMessage ? styles.error : ""}>
          {idErrorMessage}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label for="password">비밀번호</label>
        <div className={styles.pwContainer}>
          <input
            className={pwErrorMessage ? styles.errorFocus : styles.notError}
            ref={PasswordInputRef}
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            onChange={handlePwInputChange}
            value={pwValue}
            id="password"
            name="password"
          />
          <Image
            className={styles.eye}
            src={
              isPasswordOpened ? "/images/eye-off.svg" : "/images/eye-on.svg"
            }
            width={16}
            height={16}
            onClick={handleEyeButtonClicked}
          />
        </div>
        <div className={pwErrorMessage ? styles.error : ""}>
          {pwErrorMessage}
        </div>
      </div>
      <button className={styles.loginBtn} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SignInForm;
