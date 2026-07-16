import { Text, TextInput, TouchableOpacity, View } from "react-native";
import global from "../styles/globalStyles";

export default function RegisterScreen() {
  return (
    <View style={global.container}>
      <Text style={global.title}>Реєстрація</Text>

      <TextInput
        placeholder="Ім'я"
        style={global.input}
      />

      <TextInput
        placeholder="Email"
        style={global.input}
      />

      <TextInput
        placeholder="Пароль"
        secureTextEntry
        style={global.input}
      />

      <TouchableOpacity style={global.button}>
        <Text style={global.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
}