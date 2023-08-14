import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TasksScreen from "./src/screens/Tasks";
import { Provider } from "react-redux";
// import store from "./src/redux/store";
// import ReactDOM from "react-dom/client";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <TasksScreen />
      </SafeAreaView>
    </Provider>
  );
}
