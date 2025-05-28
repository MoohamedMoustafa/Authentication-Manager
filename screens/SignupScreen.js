import { useEffect } from "react";
import AuthContent from "../components/auth/AuthContent";
import { useSignupMutation } from "../services/authService";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function SignupScreen() {
  const [signup, { error, isLoading }] = useSignupMutation();
  function submitHandler(credentials) {
    signup(credentials);
  }
  if (isLoading) return <LoadingOverlay message="Creating user..." />;
  return <AuthContent onAuthenticate={submitHandler} />;
}

export default SignupScreen;
