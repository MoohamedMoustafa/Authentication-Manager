import { useLoginMutation } from "../services/authService";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [login, { isLoading, error, data }] = useLoginMutation();
  async function submitHandler(credentials) {
    try {
      const res = await login(credentials);
      console.log("res.error.data.error.message", res.error.data.error.message);
      if (res.error.data.error.message === "EMAIL_NOT_FOUND") {
        throw new Error("this email is not registered");
      }
      if (
        res.error.data.error.message === "INVALID_PASSWORD" ||
        res.error.data.error.message === "INVALID_LOGIN_CREDENTIALS"
      ) {
        throw new Error("this email or password is not correct");
      }
    } catch (error) {
      Alert.alert("Login failed", error.message);
    }
  }
  if (isLoading) {
    return <LoadingOverlay message="Logging in..." />;
  }
  return <AuthContent isLogin onAuthenticate={submitHandler} />;
}

export default LoginScreen;
