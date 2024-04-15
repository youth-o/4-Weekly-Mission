import { useEffect, useRef, useState } from "react";
import styles from "@/styles/S<ignin.module.css>";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

function SignUpForm() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
  });
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
    setFormData({ ...formData, id: e.target.value });
  };

  const handlePwInputChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handlePwRepInputChange = (e) => {
    setFormData({ ...formData, confirmPassword: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/sign-up",
        {
          email: formData.id,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        router.push("/folder");
      } else {
        return idErrorMessage, pwErrorMessage, pwRepErrorMessage;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkEmail = async (email) => {
    try {
      const response = await axios.post(
        "/check-email",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
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
      IdInputRef.current.addEventListener("focusout", async () => {
        const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
        if (!formData.id.trim()) {
          return setIdErrorMessage("이메일을 입력해 주세요.");
        }
        if (!EMAIL_REG_EXP.test(formData.id.trim())) {
          return setIdErrorMessage("올바른 이메일 주소가 아닙니다.");
        }

        try {
          await checkEmail(formData.id);
          setIdErrorMessage("이미 사용 중인 이메일입니다.");
          // 이 코드를 안 적으면 이미 checkEmail()에서 setIdErrorMessage로 작성을 했는데도 이미 사용 중인 이메일입니다. 라는 메세지가 안 떠요 ㅠㅠ
        } catch (error) {
          console.error(error);
          setIdErrorMessage("서버 오류가 발생했습니다.");
        }
      });
    }
  }, [formData.id]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        if (formData.password && !pwRegExp.test(formData.password)) {
          return setPwErrorMessage(
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
          );
        }
        return setPwErrorMessage("");
      });
    }
  }, [formData.password]);

  useEffect(() => {
    if (PwRepInputRef.current) {
      PwRepInputRef.current.addEventListener("focusout", () => {
        if (!(formData.confirmPassword.trim() === formData.password.trim())) {
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
          value={formData.id}
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
            value={formData.password}
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
            value={formData.confirmPassword}
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
