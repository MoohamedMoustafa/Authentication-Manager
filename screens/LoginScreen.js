import { useLoginMutation } from "../services/authService";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { loginLocal } from "../store/userSlice";

function LoginScreen() {
  const [login, { isLoading}] = useLoginMutation();
  const dispatch = useDispatch();
  
  async function submitHandler(credentials) {
    try {
      // login returns the is directely in res.data ====> handeled in transformResponse
      const res = await login(credentials);
      dispatch(loginLocal(res.data));

      
      if (res.error?.message === "EMAIL_NOT_FOUND") {
        throw new Error("this email is not registered");
      }
      if (
        res.error?.message === "INVALID_PASSWORD" ||
        res.error?.message === "INVALID_LOGIN_CREDENTIALS"||
        res.error?.message === "INVALID_EMAIL"
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
