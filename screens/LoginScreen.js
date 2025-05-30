import { useLoginMutation } from '../services/authService';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function LoginScreen() {
  const [login, {isLoading, error, data}] = useLoginMutation();
  async function submitHandler(credentials) {
    const res =await login(credentials);

    console.log("response from login",res)
    console.log("data from login",data);
    
  }
  if(isLoading) {
    return <LoadingOverlay message="Logging in..." />
  }
  return <AuthContent isLogin onAuthenticate={submitHandler} />;
}

export default LoginScreen;