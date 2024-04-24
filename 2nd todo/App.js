import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
