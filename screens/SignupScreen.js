import { useEffect } from "react";
import AuthContent from "../components/auth/AuthContent";
import { useSignupMutation } from "../services/authService";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { loginLocal } from "../store/userSlice";

function SignupScreen() {
  const [signup, { error, isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  async function submitHandler(credentials) {
    try {
      // login returns the is directely in res.data ====> handeled in transformResponse
      const res = await signup(credentials);
      // dispatch(loginLocal(res.data));
      if (res.error.message === "EMAIL_EXISTS") {
        throw new Error("this email is already registered");
      }
      if (res.error.message === "INVALID_EMAIL") {
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
