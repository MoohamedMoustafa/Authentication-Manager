import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginLocal } from "./store/userSlice";

import store from "./store/store";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import LoadingOverlay from "./components/UI/LoadingOverlay";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const [isloading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  useEffect(() => {
    async function checkToken() {
      const storedToken = await AsyncStorage.getItem("userToken");
      if (storedToken) {
        dispatch(loginLocal(storedToken));
      }
      setIsLoading(false);
    }
    checkToken();
  }, [dispatch]);

  if(isloading) {
    return <LoadingOverlay message="Checking data..." />
  }


  const content = isAuthenticated ? <AuthenticatedStack /> : <AuthStack />;

  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      {content}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
