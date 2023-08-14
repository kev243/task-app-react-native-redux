import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/store";
import { SET_TASK } from "../../store/task/task.slice";

export default function TaskForm() {
  const [newTitle, setNewTitle] = useState();
  const dispatch = useDispatch();

  const onChangeText = (val) => {
    setNewTitle(val);
  };

  const onAddNewTask = () => {
    if (newTitle === "") return;

    dispatch(SET_TASK({ title: newTitle }));
    // onAddTask(newTitle);
    setNewTitle("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />

      <Button title="Ajouter" onPress={onAddNewTask} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    height: 40,
    paddingLeft: 5,
  },
});
