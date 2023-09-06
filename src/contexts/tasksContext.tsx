import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import {Task} from '~types/tasks';
import {generateID} from '~utils/idUtils';

interface TasksContext {
  tasks: Task[];
  selectedTask?: Task;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  updateTask: (task: Task) => void;
  selectTask: (id?: string) => void;
}

const initialState: TasksContext = {
  tasks: [],
  selectedTask: undefined,
  addTask: () => undefined,
  removeTask: () => undefined,
  updateTask: () => undefined,
  selectTask: () => undefined,
};

const tasksContext = createContext<TasksContext>(initialState);

export default function TaskProvider({children}: PropsWithChildren<{}>) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();

  function addTask(title: string) {
    const task: Task = {title, id: generateID()};
    setTasks(currentTasks => [...currentTasks, task]);
  }

  function removeTask(id: string) {
    setTasks(currentTasks =>
      currentTasks.filter(filterTask => filterTask.id !== id),
    );
  }

  function updateTask(task: Task) {
    // First, we check that the task to modify exists.
    const taskToUpdate = tasks.find(findTask => findTask.id === task.id);
    if (!taskToUpdate) {
      throw Error("Task to update doesn't exist");
    }
    const modifiedTasks = tasks.map(mappedTask => {
      // The task we want to modify.
      if (mappedTask.id === task.id) {
        return task;
      }
      // If is not the task to modify, return what we have.
      return mappedTask;
    });
    setTasks(modifiedTasks);
    setSelectedTask(undefined);
  }

  function selectTask(id?: string) {
    if (!id) {
      return setSelectedTask(undefined);
    }
    const taskToSelect = tasks.find(taskToFind => taskToFind.id === id);
    if (!taskToSelect) {
      throw Error("The task to select doesn't exist");
    }
    setSelectedTask(taskToSelect);
  }

  const providerValue: TasksContext = {
    tasks,
    selectedTask,
    addTask,
    removeTask,
    updateTask,
    selectTask,
  };
  return (
    <tasksContext.Provider value={providerValue}>
      {children}
    </tasksContext.Provider>
  );
}

export function useTasksContext() {
  const context = useContext(tasksContext);
  if (context === undefined) {
    throw new Error('Context must be used within an Task Provider');
  }
  return context;
}
