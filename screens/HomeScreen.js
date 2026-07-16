import { Button, Text, View } from "react-native";
import global from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={global.container}>
      <Text style={global.title}>Головний екран</Text>

      <Button
        title="Товари"
        onPress={() => navigation.navigate("Products")}
      />

      <Button
        title="Реєстрація"
        onPress={() => navigation.navigate("Register")}
      />

      <Button
        title="Профіль"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}