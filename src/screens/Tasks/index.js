import React, { useState } from "react";
import Header from "../../components/Header";
import { Text, FlatList, View, StyleSheet, Pressable } from "react-native";
import TaskTile from "./TaskTile";
import TaskForm from "./TaskForm";
import FloatingBtn from "../../components/Header/FloatingBtn";
import Counter from "../../components/Counter/Index";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, getTasks } from "../../store/task/task.slice";

export default function TasksScreen() {
  const tasks = useSelector(getTasks);

  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  //function pour mettre à jour une tâche
  const onUpdateTask = (task) => {
    let check = !task.isCompleted;
    dispatch(editTask([check, task.id]));
  };

  const onDeleteTask = (task) => {
    dispatch(deleteTask(task.id));
  };

  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm />}
            <View style={styles.containerCounters}>
              <Counter nb={tasks.length} title="Tâches crées" />
              <Counter
                nb={tasks.filter((t) => t.isCompleted === true).length}
                title="Tâches effectuées"
              />
            </View>
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    padding: 20,
    backgroundColor: "orange",
  },

  containerCounters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
