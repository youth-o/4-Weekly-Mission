import SignUpFooter from "@/components/SignUp/SignUpFooter";
import SignUpForm from "@/components/SignUp/SignUpForm";
import SignUpHeader from "@/components/SignUp/SingUpHeader";
import styles from "@/styles/Signin.module.css";

function SignUp() {
  return (
    <div className={styles.body}>
      <SignUpHeader />
      <SignUpForm />
      <SignUpFooter />
    </div>
  );
}

export default SignUp;
