import SingInFooter from "@/components/SignIn/SignInFooter";
import SignInForm from "@/components/SignIn/SignInForm";
import SignInHeader from "@/components/SignIn/SignInHeader";
import styles from "@/styles/Signin.module.css";

function SignIn() {
  return (
    <div className={styles.body}>
      <SignInHeader />
      <SignInForm />
      <SingInFooter />
    </div>
  );
}

export default SignIn;
