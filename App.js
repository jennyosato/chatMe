import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/login";
import Friend_list from "./src/components/friend_list";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <Friend_list />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
