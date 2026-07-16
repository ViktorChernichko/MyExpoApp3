import { StyleSheet } from "react-native";
import colors from "./colors";
import typography from "./typography";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  title: {
    fontSize: typography.title,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 20,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});