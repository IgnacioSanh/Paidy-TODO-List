import {Task} from './tasks';

declare interface TasksContext {
  tasks: Task[];
  selectedTask?: Task;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  updateTask: (task: Task) => void;
  selectTask: (id?: string) => void;
}

export {TasksContext};
