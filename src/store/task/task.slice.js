import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasksList: [
      {
        id: 1,
        title: "init task",
        isCompleted: false,
      },
    ],
  },

  reducers: {
    SET_TASK: (state = tasksList, action) => {
      return {
        ...state,
        tasksList: [
          ...state.tasksList,
          {
            id: new Date().getTime(),
            title: action.payload.title,
            isCompleted: false,
          },
        ],
      };
    },
    editTask: (state, { payload }) => {
      state.tasksList = state.tasksList.map((task) => {
        if (task.id === payload[1]) {
          return {
            ...task,
            isCompleted: payload[0],
          };
        } else {
          return task;
        }
      });
    },
    deleteTask: (state, { payload }) => {
      state.tasksList = state.tasksList.filter((task) => task.id !== payload);
    },
  },
});

export const getTasks = (store) => store.task.tasksList;
export const getCompletedTasks = (store) =>
  store.task.tasksList.filter((task) => task.isCompleted);

export const { SET_TASK, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
