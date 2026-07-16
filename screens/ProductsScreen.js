import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../data/products";
import global from "../styles/globalStyles";

export default function ProductsScreen() {
  return (
    <View style={global.container}>
      <Text style={global.title}>Товари</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    marginTop: 10,
    color: "green",
    fontWeight: "bold",
  },
});