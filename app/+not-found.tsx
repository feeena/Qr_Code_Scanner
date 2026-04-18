import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Oops! Not Found" }} />
    <View style={styles.container}>
      <Link href={"/"} style={styles.button}>
        Page unavailable go back to home screen
      </Link>

    </View>
    </>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  text: {
    color: "white",
  },

  button: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 20,
  },
})