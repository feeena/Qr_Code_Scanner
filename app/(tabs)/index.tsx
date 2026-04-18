import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>deadNet</Text>
    </View>
  );
}



const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(215, 83%, 16%)",
  },

  text: {
    color: "white",
  },

  button: {
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",
  }
})