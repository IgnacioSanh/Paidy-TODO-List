import {TasksContext} from './taskContext';

export const defaultContextValue: TasksContext = {
  tasks: [],
  selectedTask: undefined,
  updateTask: jest.fn(),
  addTask: jest.fn(),
  removeTask: jest.fn(),
  selectTask: jest.fn(),
};
