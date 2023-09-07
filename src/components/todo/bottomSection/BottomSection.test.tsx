import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';

import {defaultContextValue} from '~types/tests';
import {contextProviderHOC} from '~contexts/tasksContext';
import BottomSection from './BottomSection';
import {Task} from '~types/tasks';

describe('BottomSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('A placeholder and an "add" disabled button exists by default', () => {
    const addTaskMock = jest.fn();
    const {getByPlaceholderText, getByText} = render(
      contextProviderHOC(<BottomSection />, {
        ...defaultContextValue,
        addTask: addTaskMock,
      }),
    );
    // Search by the input placeholder
    getByPlaceholderText(/enter here/i);
    // Search the button by the label. By default the label is add.
    const button = getByText(/add/i);
    // If I press the button addTask won't get called, since the button is disabled
    fireEvent.press(button);
    expect(addTaskMock).not.toBeCalled();
  });

  test('When I add text in the input, I can press the add button and addTask will be called', async () => {
    const addTaskMock = jest.fn();
    const taskTitle = 'Task title';

    const {getByPlaceholderText, getByText} = render(
      contextProviderHOC(<BottomSection />, {
        ...defaultContextValue,
        addTask: addTaskMock,
      }),
    );

    fireEvent.changeText(getByPlaceholderText(/enter here/i), taskTitle);
    fireEvent.press(getByText(/add/i));

    expect(addTaskMock).toBeCalledWith(taskTitle);
    // Expect to clean the input once we add a new task
    expect(getByPlaceholderText(/enter here/i).props).not.toHaveProperty(
      'value',
    );
  });

  test('If there is a selected task, the button should say edit, and input fill with task title', () => {
    const taskTitle = 'Task title';

    const {getByPlaceholderText, getByText, queryByText} = render(
      contextProviderHOC(<BottomSection />, {
        ...defaultContextValue,
        selectedTask: {id: 'id', title: taskTitle},
      }),
    );

    const input = getByPlaceholderText(/enter here/i);
    // If I have a selected task, the input should be prefilled with the task title
    expect(input.props).toHaveProperty('value', taskTitle);
    // The button should say edit
    getByText(/edit/i);
    // We shouldnt see an add button, since it was replaced by the edit
    expect(queryByText(/add/i)).toBeNull();
  });

  test('If I change the title for a task, updateTask should be called', () => {
    const newTaskTitle = 'New task title';
    const selectedTask: Task = {id: 'id', title: 'title'};
    const updateTaskMock = jest.fn();

    const {getByPlaceholderText, getByText} = render(
      contextProviderHOC(<BottomSection />, {
        ...defaultContextValue,
        selectedTask,
        updateTask: updateTaskMock,
      }),
    );

    const input = getByPlaceholderText(/enter here/i);
    act(() => {
      fireEvent.changeText(input, newTaskTitle);
    });

    const editButton = getByText(/edit/i);

    fireEvent.press(editButton);

    expect(updateTaskMock).toBeCalledWith({
      ...selectedTask,
      title: newTaskTitle,
    });
  });
});
