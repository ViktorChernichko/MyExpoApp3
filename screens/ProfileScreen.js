import { Image, StyleSheet, Text, View } from "react-native";
import global from "../styles/globalStyles";

export default function ProfileScreen() {
  return (
    <View style={global.container}>
      <Image
        source={{
          uri: "https://www.w3schools.com/howto/img_avatar.png",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>No name</Text>

      <Text>noname@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});