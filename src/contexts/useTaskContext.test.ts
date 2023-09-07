import {act, renderHook} from '@testing-library/react-native';

import TaskProvider, {useTasksContext} from './tasksContext';
import {Task} from '~types/tasks';

describe('useTaskContext', () => {
  jest.mock('../utils/idUtils', () => ({
    generateID: () => 'defaultId',
  }));

  test('The initial value of tasks is an empty array, and selectedTask undefined', () => {
    const {result} = renderHook(() => useTasksContext());
    expect(result.current.tasks).toStrictEqual([]);
    expect(result.current.selectedTask).toBeUndefined();
  });

  test('When calling addTask, the task array should have one element', () => {
    const taskTitle = 'title';
    const {result} = renderHook(useTasksContext, {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.addTask(taskTitle);
    });

    expect(result.current.tasks).toEqual([
      {title: taskTitle, id: expect.any(String)},
    ]);
  });

  test('Add a task and remove it', () => {
    const taskTitle = 'title';

    const {result} = renderHook(useTasksContext, {
      wrapper: TaskProvider,
    });

    // Add a task
    act(() => {
      result.current.addTask(taskTitle);
    });

    // Task added
    expect(result.current.tasks).toHaveLength(1);

    // The value of the id is modified in jestSetup.js line 13
    // Remove the recently added task
    act(() => result.current.removeTask('id'));

    expect(result.current.tasks).toHaveLength(0);
  });

  test('Add a task and udpate the title', () => {
    const taskTitle = 'title';
    const newTitle = 'New task title';

    const {result} = renderHook(useTasksContext, {
      wrapper: TaskProvider,
    });

    // Add a task
    act(() => {
      result.current.addTask(taskTitle);
    });

    // Task added
    expect(result.current.tasks).toHaveLength(1);

    // The value of the id is modified in jestSetup.js line 13
    // Edit the task
    const expectedNewTask: Task = {id: 'id', title: newTitle};
    act(() => result.current.updateTask(expectedNewTask));

    expect(result.current.tasks).toStrictEqual([expectedNewTask]);
  });

  test('Try to update a non-existing task', () => {
    const taskTitle = 'title';
    const newTitle = 'New task title';

    const {result} = renderHook(useTasksContext, {
      wrapper: TaskProvider,
    });

    // Add a task
    act(() => {
      result.current.addTask(taskTitle);
    });

    // Task added
    expect(result.current.tasks).toHaveLength(1);

    // The value of the id is modified in jestSetup.js line 13
    // Edit the task
    const expectedNewTask: Task = {id: '28', title: newTitle};

    function expectedToThrow() {
      result.current.updateTask(expectedNewTask);
    }
    expect(expectedToThrow).toThrowError(/task to update doesn't exist/i);
  });

  test('Select an existing task', () => {
    const taskTitle = 'title';

    const {result} = renderHook(useTasksContext, {
      wrapper: TaskProvider,
    });

    // Add a task
    act(() => {
      result.current.addTask(taskTitle);
    });

    // Task added
    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.selectedTask).toBeUndefined();

    act(() => result.current.selectTask('id'));

    expect(result.current.selectedTask).toStrictEqual({
      id: 'id',
      title: taskTitle,
    });
  });

  test('Select a non-existing task', () => {
    const taskTitle = 'title';

    const {result} = renderHook(useTasksContext, {
      wrapper: TaskProvider,
    });

    // Add a task
    act(() => {
      result.current.addTask(taskTitle);
    });

    // Task added
    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.selectedTask).toBeUndefined();

    const functionToThrow = () => result.current.selectTask('28');

    expect(functionToThrow).toThrowError();
  });
});
