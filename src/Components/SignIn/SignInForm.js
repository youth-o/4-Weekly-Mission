import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Signin.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

function SignInForm() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [isPasswordOpened, setIsPasswordOpened] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const PasswordInputRef = useRef(null);
  const IdInputRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "/sign-in",
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
        setIdErrorMessage("이메일을 확인해 주세요.");
        setPwErrorMessage("비밀번호를 확인해 주세요.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEyeButtonClicked = (e) => {
    if (isPasswordOpened) {
      PasswordInputRef.current.type = "text";
      return setIsPasswordOpened(false);
    }
    PasswordInputRef.current.type = "password";
    return setIsPasswordOpened(true);
  };

  const handleIdInputChange = (e) => {
    setFormData({ ...formData, id: e.target.value });
  };

  const handlePwInputChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  useEffect(() => {
    if (IdInputRef.current) {
      IdInputRef.current.addEventListener("focusout", () => {
        const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
        if (!formData.id.trim()) {
          return setIdErrorMessage("이메일을 입력해 주세요.");
        }
        if (!EMAIL_REG_EXP.test(formData.id.trim())) {
          return setIdErrorMessage("올바른 이메일 주소가 아닙니다.");
        }
        return setIdErrorMessage("");
      });
    }
  }, [formData.id]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        if (!formData.password.trim()) {
          return setPwErrorMessage("비밀번호를 입력해 주세요.");
        }
        return setPwErrorMessage("");
      });
    }
  }, [formData.password]);

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
          name="email"
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
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            onChange={handlePwInputChange}
            value={formData.password}
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
            alt="눈 모양 아이콘"
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
