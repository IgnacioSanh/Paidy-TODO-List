import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Task} from '~types/tasks';
import {defaultContextValue} from '~types/tests';
import {contextProviderHOC} from '~contexts/tasksContext';

import TodoCard, {CONTAINER_TEST_ID} from './todoCard';

describe('todoCard', () => {
  const defaultTask: Task = {
    id: 'id',
    title: 'task',
  };

  test('Displays title and a remove button is present', () => {
    const {getByText} = render(<TodoCard task={defaultTask} />);
    getByText(defaultTask.title);
    getByText(/remove/i);
  });

  test('When the remove button is pressed, the remove function is called', () => {
    const removeTaskMock = jest.fn();
    const {getByText} = render(
      contextProviderHOC(<TodoCard task={defaultTask} />, {
        ...defaultContextValue,
        removeTask: removeTaskMock,
      }),
    );
    // Get the remove button by label
    const button = getByText(/remove/i);
    // Trigger the press action
    fireEvent.press(button);

    // Expect the mock function to be called
    expect(removeTaskMock).toBeCalledWith(defaultTask.id);
  });

  test("By default, we don't see any border", () => {
    const {getByTestId} = render(<TodoCard task={defaultTask} />);
    const container = getByTestId(CONTAINER_TEST_ID);

    expect(container.props.style).not.toContainEqual(
      expect.objectContaining({borderWidth: 2}),
    );
  });

  it('Shows a blue border when an item is selected', () => {
    const {getByTestId} = render(
      contextProviderHOC(<TodoCard task={defaultTask} />, {
        ...defaultContextValue,
        selectedTask: defaultTask,
      }),
    );
    const container = getByTestId(CONTAINER_TEST_ID);
    // When the item has the "selected" prop as true, a border should be styled.
    // Since the color could change over time, I just look for the borderWitdth
    expect(container.props.style).toContainEqual(
      expect.objectContaining({borderWidth: 2}),
    );
  });

  test('When the card is pressed, selectTask is called', () => {
    const selectTaskMock = jest.fn();
    const {getByText} = render(
      contextProviderHOC(<TodoCard task={defaultTask} />, {
        ...defaultContextValue,
        selectTask: selectTaskMock,
      }),
    );

    const cardTitle = getByText(defaultTask.title);
    fireEvent.press(cardTitle);

    expect(selectTaskMock).toBeCalledWith(defaultTask.id);
  });
});
