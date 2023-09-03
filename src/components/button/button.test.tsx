import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Button from './button';

describe('button', () => {
  const LABEL = 'Test label';
  test('Button renders label text', () => {
    const {getByText} = render(<Button label={LABEL} onPress={jest.fn()} />);
    getByText(LABEL);
  });

  test('onPress prop function is called when button is pressed', () => {
    const onPressMock = jest.fn();

    const {getByText} = render(<Button label={LABEL} onPress={onPressMock} />);

    const buttonText = getByText(LABEL);
    fireEvent.press(buttonText);

    expect(onPressMock).toBeCalled();
  });
});
