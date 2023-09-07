import 'react-native/jest/setup';

import {jest} from '@jest/globals';

jest.mock('react-native-mmkv', () => ({
  useMMKV: () => ({
    getString: jest.fn(),
    set: jest.fn(),
  }),
}));

jest.mock('react-native-uuid', () => ({
  v4: () => 'id',
}));
