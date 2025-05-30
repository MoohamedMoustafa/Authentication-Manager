import { useEffect } from "react";
import AuthContent from "../components/auth/AuthContent";
import { useSignupMutation } from "../services/authService";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [signup, { error, isLoading }] = useSignupMutation();
  async function submitHandler(credentials) {
    try {
      const res = signup(credentials).unwrap();
      if (res.error.data.error.message === "EMAIL_EXISTS") {
        throw new Error("this email is already registered");
      }
      if (res.error.data.error.message === "INVALID_EMAIL") {
        throw new Error("this email is not valid");
      }
    } catch (error) {
      Alert.alert("Signup failed", error.message);
    }
  }
  if (isLoading) return <LoadingOverlay message="Creating user..." />;
  return <AuthContent onAuthenticate={submitHandler} />;
}

export default SignupScreen;
