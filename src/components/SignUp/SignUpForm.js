import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Signin.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function SignUpForm() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwRepValue, setPwRepValue] = useState("");
  const [isPasswordOpened, setIsPasswordOpened] = useState(false);
  const [isPwRepOpened, setIsPwRepOpened] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const [pwRepErrorMessage, setPwRepErrorMessage] = useState("");
  const PasswordInputRef = useRef(null);
  const IdInputRef = useRef(null);
  const PwRepInputRef = useRef(null);
  const router = useRouter();

  const handlePwEyeButtonClicked = (e) => {
    if (isPasswordOpened) {
      PasswordInputRef.current.type = "text";
      return setIsPasswordOpened(false);
    }
    PasswordInputRef.current.type = "password";
    return setIsPasswordOpened(true);
  };

  const handlePwRepEyeButtonClicked = (e) => {
    if (isPwRepOpened) {
      PwRepInputRef.current.type = "text";
      return setIsPwRepOpened(false);
    }
    PwRepInputRef.current.type = "password";
    return setIsPwRepOpened(true);
  };

  const handleIdInputChange = (e) => {
    setIdValue(e.target.value);
  };

  const handlePwInputChange = (e) => {
    setPwValue(e.target.value);
  };

  const handlePwRepInputChange = (e) => {
    setPwRepValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-up",
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
        return idErrorMessage, pwErrorMessage, pwRepErrorMessage;
      }
    } catch (error) {
      console.error(error);
    }
    try {
      checkEmail(idValue);
    } catch (error) {
      console.error(error);
    }
  };

  const checkEmail = async (email) => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.status === 409) {
        setIdErrorMessage("이미 사용 중인 이메일입니다.");
      }
    } catch (error) {
      console.error(error);
    }
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
      });
    }
  }, [idValue]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        if (pwValue && !pwRegExp.test(pwValue)) {
          return setPwErrorMessage(
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
          );
        }
        return setPwErrorMessage("");
      });
    }
  }, [pwValue]);

  useEffect(() => {
    if (PwRepInputRef.current) {
      PwRepInputRef.current.addEventListener("focusout", () => {
        if (!(pwRepValue.trim() === pwValue.trim())) {
          return setPwRepErrorMessage("비밀번호가 일치하지 않아요.");
        }
        return setPwRepErrorMessage("");
      });
    }
  });

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
          ref={IdInputRef}
        />
        <div className={idErrorMessage ? styles.error : ""}>
          {idErrorMessage}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">비밀번호</label>
        <div className={styles.pwContainer}>
          <input
            className={pwErrorMessage ? styles.errorFocus : styles.notError}
            ref={PasswordInputRef}
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
            type="password"
            onChange={handlePwInputChange}
            value={pwValue}
            id="password"
          />
          <Image
            className={styles.eye}
            src={
              isPasswordOpened ? "/images/eye-off.svg" : "/images/eye-on.svg"
            }
            width={16}
            height={16}
            onClick={handlePwEyeButtonClicked}
            alt="눈 모양 아이콘"
          />
        </div>
        <div className={pwErrorMessage ? styles.error : ""}>
          {pwErrorMessage}
        </div>
        <label htmlFor="password">비밀번호 확인</label>
        <div className={styles.pwContainer}>
          <input
            className={pwRepErrorMessage ? styles.errorFocus : styles.notError}
            ref={PwRepInputRef}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
            type="password"
            onChange={handlePwRepInputChange}
            value={pwRepValue}
            id="password"
          />
          <Image
            className={styles.eye}
            src={isPwRepOpened ? "/images/eye-off.svg" : "/images/eye-on.svg"}
            width={16}
            height={16}
            onClick={handlePwRepEyeButtonClicked}
            alt="눈 모양 아이콘"
          />
        </div>
        <div className={pwRepErrorMessage ? styles.error : ""}>
          {pwRepErrorMessage}
        </div>
      </div>
      <button className={styles.loginBtn} type="submit">
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
