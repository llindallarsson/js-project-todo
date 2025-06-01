import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      tasks: [],

      createTask: (text) =>
        set((state) => {
          const newTask = {
            id: Date.now(),
            text,
            completed: false,
          };
          return { tasks: [newTask, ...state.tasks] };
        }),

      toggleTaskCompletion: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      clearCompletedTasks: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);
