import { StyleSheet, Text, View } from "react-native";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { logoutLocal } from "../store/userSlice";

function WelcomeScreen() {
  const dispatch = useDispatch ();
  function handleLogout() {
    dispatch(logoutLocal());
  }
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <View style={styles.btn}>
        <Button onPress={handleLogout}>logout</Button>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  btn: {
    marginTop: 16,
  },
});
