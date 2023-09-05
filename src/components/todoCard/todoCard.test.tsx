import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import TodoCard, {CONTAINER_TEST_ID} from './todoCard';

describe('todoCard', () => {
  const TITLE = 'Test Title';

  test('Displays title', () => {
    const {getByText} = render(<TodoCard title={TITLE} onRemove={jest.fn()} />);
    getByText(TITLE);
  });

  test('When the remove button is pressed, the remove function is called', () => {
    const onRemoveMock = jest.fn();
    const {getByText} = render(
      <TodoCard title={TITLE} onRemove={onRemoveMock} />,
    );
    // Get the remove button by label
    const button = getByText(/remove/i);
    // Trigger the press action
    fireEvent.press(button);

    // Expect the mock function to be called
    expect(onRemoveMock).toBeCalled();
  });

  test("By default, we don't see any border", () => {
    const {getByTestId} = render(<TodoCard title={TITLE} onRemove={jest.fn} />);
    const container = getByTestId(CONTAINER_TEST_ID);

    expect(container.props.style).not.toContainEqual(
      expect.objectContaining({borderWidth: 2}),
    );
  });

  it('Shows a blue border when an item is selected', () => {
    const {getByTestId} = render(
      <TodoCard title={TITLE} onRemove={jest.fn} selected />,
    );
    const container = getByTestId(CONTAINER_TEST_ID);
    // When the item has the "selected" prop as true, a border should be styled.
    // Since the color could change over time, I just look for the borderWitdth
    expect(container.props.style).toContainEqual(
      expect.objectContaining({borderWidth: 2}),
    );
  });
});
