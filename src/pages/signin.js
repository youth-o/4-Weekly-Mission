import SingInFooter from "@/components/SignInFooter";
import SignInForm from "@/components/SignInForm";
import SignInHeader from "@/components/SignInHeader";
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
