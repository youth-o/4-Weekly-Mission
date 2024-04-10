import SingInFooter from "@/components/SignIn/SignInFooter";
import SignInForm from "@/components/SignIn/SignInForm";
import SignInHeader from "@/components/SignIn/SignInHeader";
import styles from "@/styles/Signin.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function SignIn() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  }, []);

  return (
    <div className={styles.body}>
      <SignInHeader />
      <SignInForm />
      <SingInFooter />
    </div>
  );
}

export default SignIn;
