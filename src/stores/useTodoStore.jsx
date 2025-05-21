import { create } from "zustand";

const initialState = {
  tasks: [
    {
      id: 1,
      text: "My first message",
      completed: false,
    },
  ],
};

export const useTodoStore = create((set) => ({
  ...initialState,

  createTask: (text) =>
    set((state) => {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      return { tasks: [newTask, ...state.tasks] };
    }),

  toggleTaskCompletion: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
}));
