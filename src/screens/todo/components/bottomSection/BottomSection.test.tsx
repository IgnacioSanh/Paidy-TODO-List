import React from 'react';
import {render} from '@testing-library/react-native';

import BottomSection from './BottomSection';

describe('BottomSection', () => {
  test('A placeholder and a button exists by default', () => {
    const {getByPlaceholderText, getByText} = render(<BottomSection />);
    // Search by the input placeholder
    getByPlaceholderText(/enter here/i);
    // Search the button by the label. By default the label is add.
    getByText(/add/i);
  });
  test.todo('When the button is pressed, adds the task to the list');
});
